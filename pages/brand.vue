<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-black text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">BRAND</h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8">
          세계적인 브랜드의 정품을 만나보세요
        </p>
      </div>
    </section>

    <!-- Featured Brands -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">인기 브랜드</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div
            v-for="brand in featuredBrands"
            :key="brand.name"
            class="text-center group cursor-pointer"
          >
            <div
              class="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"
            >
              <span class="text-3xl">{{ brand.icon }}</span>
            </div>
            <p class="text-sm font-medium text-gray-700 group-hover:text-black">
              {{ brand.name }}
            </p>
            <p class="text-xs text-gray-500 mt-1">{{ brand.count }}개 상품</p>
          </div>
        </div>
      </div>
    </section>

    <!-- All Brands -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">전체 브랜드</h2>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="브랜드 검색"
                class="w-64 px-4 py-2 pl-10 pr-4 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select
                v-model="selectedCategory"
                class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">전체 카테고리</option>
                <option value="shoes">신발</option>
                <option value="clothing">의류</option>
                <option value="bags">가방</option>
                <option value="watches">시계</option>
                <option value="accessories">액세서리</option>
              </select>
              <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div
            v-for="brand in filteredBrands"
            :key="brand.name"
            class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors"
              >
                <span class="text-2xl">{{ brand.icon }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-900 group-hover:text-black">
                  {{ brand.name }}
                </h3>
                <p class="text-sm text-gray-600">{{ brand.category }}</p>
                <div class="flex items-center mt-2">
                  <div class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span>{{ brand.rating }}</span>
                    <span class="ml-2">({{ brand.reviews }})</span>
                  </div>
                </div>
                <p class="text-sm text-gray-500 mt-1">{{ brand.count }}개 상품</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
          <nav class="flex items-center space-x-2">
            <button
              class="px-3 py-2 text-sm text-gray-500 hover:text-black disabled:opacity-50"
              disabled
            >
              이전
            </button>
            <button class="px-3 py-2 text-sm bg-black text-white rounded">1</button>
            <button class="px-3 py-2 text-sm text-gray-700 hover:text-black">2</button>
            <button class="px-3 py-2 text-sm text-gray-700 hover:text-black">3</button>
            <button class="px-3 py-2 text-sm text-gray-500 hover:text-black">다음</button>
          </nav>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive data
const searchQuery = ref("");
const selectedCategory = ref("");

// Featured brands
const featuredBrands = [
  { name: "Nike", icon: "👟", count: 1250 },
  { name: "Adidas", icon: "👟", count: 980 },
  { name: "Supreme", icon: "👕", count: 450 },
  { name: "Off-White", icon: "👕", count: 320 },
  { name: "Jordan", icon: "👟", count: 680 },
  { name: "Louis Vuitton", icon: "👜", count: 150 },
];

// All brands data
const allBrands = [
  { name: "Nike", icon: "👟", category: "신발", rating: 4.8, reviews: 1250, count: 1250 },
  { name: "Adidas", icon: "👟", category: "신발", rating: 4.7, reviews: 980, count: 980 },
  {
    name: "Supreme",
    icon: "👕",
    category: "의류",
    rating: 4.9,
    reviews: 450,
    count: 450,
  },
  {
    name: "Off-White",
    icon: "👕",
    category: "의류",
    rating: 4.8,
    reviews: 320,
    count: 320,
  },
  { name: "Jordan", icon: "👟", category: "신발", rating: 4.8, reviews: 680, count: 680 },
  {
    name: "Louis Vuitton",
    icon: "👜",
    category: "가방",
    rating: 4.9,
    reviews: 150,
    count: 150,
  },
  { name: "Chanel", icon: "👜", category: "가방", rating: 4.9, reviews: 120, count: 120 },
  { name: "Hermès", icon: "👜", category: "가방", rating: 4.9, reviews: 80, count: 80 },
  { name: "Rolex", icon: "⌚", category: "시계", rating: 4.9, reviews: 60, count: 60 },
  { name: "Omega", icon: "⌚", category: "시계", rating: 4.8, reviews: 45, count: 45 },
  {
    name: "Cartier",
    icon: "💍",
    category: "액세서리",
    rating: 4.9,
    reviews: 90,
    count: 90,
  },
  {
    name: "Tiffany & Co.",
    icon: "💍",
    category: "액세서리",
    rating: 4.8,
    reviews: 75,
    count: 75,
  },
  { name: "Gucci", icon: "👕", category: "의류", rating: 4.7, reviews: 200, count: 200 },
  { name: "Prada", icon: "👜", category: "가방", rating: 4.8, reviews: 110, count: 110 },
  {
    name: "Balenciaga",
    icon: "👕",
    category: "의류",
    rating: 4.6,
    reviews: 180,
    count: 180,
  },
  { name: "Givenchy", icon: "👕", category: "의류", rating: 4.7, reviews: 95, count: 95 },
];

// Computed filtered brands
const filteredBrands = computed(() => {
  let filtered = [...allBrands];

  // Search filter
  if (searchQuery.value) {
    filtered = filtered.filter((brand) =>
      brand.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  }

  // Category filter
  if (selectedCategory.value) {
    const categoryMap = {
      shoes: "신발",
      clothing: "의류",
      bags: "가방",
      watches: "시계",
      accessories: "액세서리",
    };
    filtered = filtered.filter(
      (brand) => brand.category === categoryMap[selectedCategory.value],
    );
  }

  return filtered;
});
</script>
