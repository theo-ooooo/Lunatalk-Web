import type { ApiResponse } from "~/types/api";

export interface Category {
  categoryId: number;
  categoryName: string;
  status: string;
  visibility: string;
  productCount: number;
}

export const categoryService = {
  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    const { $api } = useNuxtApp();
    return await $api<ApiResponse<Category[]>>("/categories");
  },
};
