export const SITE_CONFIG = {
  name: "Lunatalk",
  description: "루나톡 - 가방, 다이어리 판매 브랜드",
  keywords: "가방/다이어리 브랜드 루나톡(Lunatalk)",
} as const;

export const HERO_CONFIG = {
  title: "LUNATALK",
  subtitle: "루나톡 - 가방, 다이어리 판매 브랜드",
  buttons: {
    primary: "지금 쇼핑하기",
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
