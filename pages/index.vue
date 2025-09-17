<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-black text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">KREAM</h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          정품만을 다루는 중고 명품 거래 플랫폼
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            지금 쇼핑하기
          </button>
          <button
            class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          >
            판매하기
          </button>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-black mb-4">카테고리</h2>
          <p class="text-gray-600 text-lg">원하는 카테고리를 선택해보세요</p>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <div
            v-for="category in categories"
            :key="category.categoryId"
            class="group cursor-pointer"
          >
            <div
              class="px-8 py-4 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-800 group-hover:border-gray-400 group-hover:bg-gray-50 group-hover:text-black transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
            >
              <div>{{ category.categoryName.toUpperCase() }}</div>
              <div class="text-xs text-gray-500 mt-1 font-normal">
                {{ category.productCount?.toLocaleString() || 0 }} 상품
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">인기 상품</h2>
          <button class="text-gray-600 hover:text-black font-medium">더보기 →</button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="product in featuredProducts"
            :key="product.id"
            class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="aspect-square bg-gray-100 relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-6xl">👟</span>
              </div>
              <div class="absolute top-2 right-2">
                <button
                  class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-lg mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ product.brand }}</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-bold"
                  >{{ product.price.toLocaleString() }}원</span
                >
                <span class="text-sm text-gray-500">{{ product.size }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-black mb-2">1,000만+</div>
            <p class="text-gray-600">회원 수</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-black mb-2">99.9%</div>
            <p class="text-gray-600">정품률</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-black mb-2">24시간</div>
            <p class="text-gray-600">검수 완료</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-black text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">지금 시작하세요</h2>
        <p class="text-xl text-gray-300 mb-8">
          안전하고 신뢰할 수 있는 중고 명품 거래의 새로운 경험
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            앱 다운로드
          </button>
          <button
            class="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
          >
            웹에서 시작하기
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO 설정
useHead({
  title: "Lunatalk - 정품만을 다루는 중고 명품 거래 플랫폼",
  meta: [
    {
      name: "description",
      content: "검증된 정품만을 거래하는 안전한 플랫폼에서 원하는 상품을 찾아보세요",
    },
    { name: "keywords", content: "중고명품, 정품거래, 명품쇼핑, 중고시장" },
  ],
});

// Composables
const { categories } = useCategory();

console.log(categories.value);

// 인기 상품 데이터
const featuredProducts = [
  {
    id: 1,
    name: "Nike Air Jordan 1 Retro High OG",
    brand: "Nike",
    price: 180000,
    size: "280mm",
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 250000,
    size: "285mm",
  },
  {
    id: 3,
    name: "Supreme Box Logo Hoodie",
    brand: "Supreme",
    price: 800000,
    size: "L",
  },
  {
    id: 4,
    name: "Off-White x Nike Air Presto",
    brand: "Off-White",
    price: 1200000,
    size: "290mm",
  },
];
</script>
