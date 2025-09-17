# 🛍️ Lunatalk Frontend

Lunatalk는 기존 Laravel 백엔드와 연동되는 쇼핑몰 프론트엔드를 Nuxt 3와 Vue 3 기반으로 구축한 프로젝트입니다.
KREAM 스타일의 모던한 UI/UX, 반응형 디자인, 컴포넌트 기반 아키텍처로 구성되어 있으며,
실제 서비스 수준의 사용자 경험을 제공합니다.

## 🚀 주요 기능

- **모던한 UI/UX**: KREAM 스타일의 미니멀하고 세련된 디자인
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 화면 최적화
- **컴포넌트 기반**: 재사용 가능한 Vue 컴포넌트 구조
- **상품 관리**: 상품 목록, 상세보기, 필터링, 검색 기능
- **사용자 경험**: 직관적인 네비게이션과 인터랙션
- **SEO 최적화**: Nuxt 3의 SSR/SSG 기능 활용

## ⚙️ 기술 스택

| 항목                 | 내용              |
| -------------------- | ----------------- |
| **Language**         | TypeScript        |
| **Framework**        | Nuxt 3, Vue 3     |
| **Styling**          | Tailwind CSS      |
| **State Management** | Pinia (Vuex 대체) |
| **Build Tool**       | Vite              |
| **Linting**          | ESLint, Prettier  |
| **Package Manager**  | Yarn              |

## 🗂️ 프로젝트 구조

```
lunatalk_nuxt3/
├── app.vue                 # 루트 컴포넌트
├── nuxt.config.ts         # Nuxt 설정
├── package.json           # 의존성 관리
├── layouts/               # 레이아웃 컴포넌트
│   └── default.vue
├── pages/                 # 페이지 라우팅
│   ├── index.vue         # 메인 페이지
│   ├── shop.vue          # 쇼핑 페이지
│   ├── brand.vue         # 브랜드 페이지
│   ├── about.vue         # 회사 소개
│   └── product/
│       └── [id].vue      # 상품 상세
├── components/           # 재사용 컴포넌트
│   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   ├── product/         # 상품 관련 컴포넌트
│   │   ├── ProductCard.vue
│   │   └── ProductList.vue
│   ├── category/        # 카테고리 컴포넌트
│   │   └── CategoryCard.vue
│   └── common/          # 공통 컴포넌트
│       ├── Button.vue
│       └── Modal.vue
├── assets/              # 정적 자산
├── public/              # 공개 파일
└── server/              # 서버 사이드 코드
```

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: Black (#000000)
- **Secondary**: Gray (#6B7280)
- **Background**: Light Gray (#F9FAFB)
- **Accent**: Red (#EF4444)

### 컴포넌트 구조

- **Layout**: Header, Footer, Navigation
- **Product**: Card, List, Detail, Filter
- **Category**: Grid, Card, Navigation
- **Common**: Button, Modal, Input, Badge

## 🛠️ 개발 환경 설정

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/lunatalk_nuxt3.git
cd lunatalk_nuxt3
```

### 2. 의존성 설치

```bash
yarn install
```

### 3. 개발 서버 실행

```bash
yarn dev
```

### 4. 빌드 및 배포

```bash
# 프로덕션 빌드
yarn build

# 프리뷰 서버 실행
yarn preview
```

## 📱 주요 페이지

### 🏠 메인 페이지 (`/`)

- 히어로 섹션
- 카테고리 그리드
- 인기 상품 목록
- 통계 및 CTA 섹션

### 🛒 쇼핑 페이지 (`/shop`)

- 상품 필터링 (카테고리, 브랜드, 가격)
- 정렬 기능 (최신순, 가격순, 인기순)
- 그리드/리스트 뷰 토글
- 페이지네이션

### 👟 상품 상세 (`/product/[id]`)

- 상품 이미지 갤러리
- 상품 정보 및 가격
- 사이즈 선택
- 관련 상품 추천

### 🏷️ 브랜드 페이지 (`/brand`)

- 브랜드 목록 및 검색
- 카테고리별 필터링
- 브랜드별 상품 수 표시

## 🧪 개발자 노트

"기존 Laravel 백엔드와 연동되는 프론트엔드를 Nuxt 3 + Vue 3 기반으로 구축했습니다.
KREAM의 모던한 디자인을 참고하여 사용자 경험을 최우선으로 고려했으며,
컴포넌트 기반 아키텍처로 유지보수성과 확장성을 확보했습니다.
실제 서비스 배포를 염두에 둔 SEO 최적화, 반응형 디자인, 성능 최적화를 적용했습니다."

## 🔗 관련 프로젝트

- **Backend**: [Lunatalk Server](https://github.com/seojindev/lunatalk.backend)
- **Frontend**: [Lunatalk Frontend](https://github.com/your-username/lunatalk_nuxt3)

## 📄 라이선스

MIT License
