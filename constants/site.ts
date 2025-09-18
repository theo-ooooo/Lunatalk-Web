export const SITE_CONFIG = {
  name: "Lunatalk",
  description: "정품만을 다루는 중고 명품 거래 플랫폼",
  keywords: "중고명품, 정품거래, 명품쇼핑, 중고시장",
} as const;

export const HERO_CONFIG = {
  title: "KREAM",
  subtitle: "정품만을 다루는 중고 명품 거래 플랫폼",
  buttons: {
    primary: "지금 쇼핑하기",
    secondary: "판매하기",
  },
} as const;

export const STATS_CONFIG = [
  { value: "1,000만+", label: "회원 수" },
  { value: "99.9%", label: "정품률" },
  { value: "24시간", label: "검수 완료" },
] as const;

export const CTA_CONFIG = {
  title: "지금 시작하세요",
  subtitle: "안전하고 신뢰할 수 있는 중고 명품 거래의 새로운 경험",
  buttons: {
    primary: "앱 다운로드",
    secondary: "웹에서 시작하기",
  },
} as const;
