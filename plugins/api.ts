// plugins/api.ts
import type { ApiResponse } from "~/types/api";

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const accessToken = useCookie<string | null>("access_token");
  const refreshToken = useCookie<string | null>("refresh_token");

  let tokenRefreshPromise: Promise<string | null> | null = null;

  /**
   * 토큰이 필요한 요청인지 확인
   */
  const isAuthRequired = (request: string): boolean => {
    return !request.includes("/auth/refresh") && !!accessToken.value;
  };

  /**
   * 토큰 갱신 요청인지 확인
   */
  const isRefreshRequest = (request: string): boolean => {
    return request.includes("/auth/refresh");
  };

  /**
   * 액세스 토큰을 헤더에 추가
   */
  const addAuthHeader = (options: any, token: string): void => {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  };

  /**
   * 토큰 갱신 처리
   */
  const refreshAccessToken = async (): Promise<string | null> => {
    if (!refreshToken.value) return null;

    try {
      const response = await $fetch<ApiResponse<TokenResponse>>("/auth/refresh", {
        baseURL: config.public.apiBase as string,
        method: "POST",
        headers: { Authorization: `Bearer ${refreshToken.value}` },
      });

      if (response.status && response.data?.accessToken) {
        accessToken.value = response.data.accessToken;
        refreshToken.value = response.data.refreshToken;
        return response.data.accessToken;
      }

      return null;
    } catch (error) {
      console.error("Token refresh failed:", error);
      clearTokens();
      return null;
    }
  };

  /**
   * 토큰 초기화
   */
  const clearTokens = (): void => {
    accessToken.value = null;
    refreshToken.value = null;
  };

  /**
   * 토큰 갱신 처리 (중복 요청 방지)
   */
  const handleTokenRefresh = async (): Promise<string | null> => {
    if (!tokenRefreshPromise) {
      tokenRefreshPromise = (async () => {
        try {
          return await refreshAccessToken();
        } finally {
          tokenRefreshPromise = null;
        }
      })();
    }

    return await tokenRefreshPromise;
  };

  /**
   * API 클라이언트 생성
   */
  const api: typeof $fetch = $fetch.create({
    baseURL: config.public.apiBase as string,

    onRequest({ options, request }) {
      const requestUrl = String(request);

      if (isAuthRequired(requestUrl)) {
        addAuthHeader(options, accessToken.value!);
      }
    },

    onResponse({ response }) {
      const body = response._data as ApiResponse<any>;

      // 성공 응답인 경우
      if (body.status) {
        return body.data;
      }

      // 에러 응답인 경우
      if (body.error) {
        throw new Error(JSON.stringify(body.error));
      }
    },

    onResponseError: async (ctx): Promise<any> => {
      const { request, response, options } = ctx;
      const requestUrl = String(request);

      // 401 에러가 아니거나, 리프레시 토큰이 없거나, 리프레시 요청인 경우
      if (
        response?.status !== 401 ||
        !refreshToken.value ||
        isRefreshRequest(requestUrl)
      ) {
        throw ctx.error;
      }

      // 토큰 갱신 시도
      const newToken = await handleTokenRefresh();

      if (!newToken) {
        throw ctx.error;
      }

      // 새로운 토큰으로 원래 요청 재시도
      return api(request, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${newToken}`,
        },
      } as any);
    },
  });

  return {
    provide: { api },
  };
});
