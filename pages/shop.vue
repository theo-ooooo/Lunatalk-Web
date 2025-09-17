<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Filter Section -->
    <div class="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-wrap gap-4">
          <!-- Category Filter -->
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

          <!-- Brand Filter -->
          <div class="relative">
            <select
              v-model="selectedBrand"
              class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">전체 브랜드</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="supreme">Supreme</option>
              <option value="off-white">Off-White</option>
              <option value="jordan">Jordan</option>
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

          <!-- Price Filter -->
          <div class="flex items-center space-x-2">
            <input
              v-model="minPrice"
              type="number"
              placeholder="최소가격"
              class="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            <span class="text-gray-500">-</span>
            <input
              v-model="maxPrice"
              type="number"
              placeholder="최대가격"
              class="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <!-- Sort Filter -->
          <div class="relative">
            <select
              v-model="sortBy"
              class="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="newest">최신순</option>
              <option value="price-low">낮은 가격순</option>
              <option value="price-high">높은 가격순</option>
              <option value="popular">인기순</option>
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

          <!-- View Toggle -->
          <div class="flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              @click="viewMode = 'grid'"
              :class="[
                'px-3 py-2 text-sm',
                viewMode === 'grid'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50',
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
            <button
              @click="viewMode = 'list'"
              :class="[
                'px-3 py-2 text-sm',
                viewMode === 'list'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50',
              ]"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">상품 목록</h1>
        <p class="text-gray-600">{{ filteredProducts.length }}개의 상품</p>
      </div>

      <!-- Grid View -->
      <div
        v-if="viewMode === 'grid'"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div class="aspect-square bg-gray-100 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl">{{ product.icon }}</span>
            </div>
            <div class="absolute top-2 right-2">
              <button
                class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
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
            <h3 class="font-semibold text-lg mb-2 line-clamp-2">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ product.brand }}</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-bold"
                >{{ product.price.toLocaleString() }}원</span
              >
              <span class="text-sm text-gray-500">{{ product.size }}</span>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span>{{ product.rating }}</span>
              <span class="ml-2">({{ product.reviews }})</span>
            </div>
          </div>
        </div>
      </div>

      <!-- List View -->
      <div v-else class="space-y-4">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
        >
          <div class="flex gap-4">
            <div
              class="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0"
            >
              <span class="text-3xl">{{ product.icon }}</span>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-semibold text-lg mb-1 line-clamp-1">{{ product.name }}</h3>
              <p class="text-gray-600 text-sm mb-2">{{ product.brand }}</p>
              <div class="flex items-center text-sm text-gray-500 mb-2">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span>{{ product.rating }}</span>
                <span class="ml-2">({{ product.reviews }})</span>
              </div>
            </div>
            <div class="text-right flex-shrink-0">
              <div class="text-xl font-bold mb-1">
                {{ product.price.toLocaleString() }}원
              </div>
              <div class="text-sm text-gray-500 mb-2">{{ product.size }}</div>
              <button
                class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"
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
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Reactive data
const selectedCategory = ref("");
const selectedBrand = ref("");
const minPrice = ref("");
const maxPrice = ref("");
const sortBy = ref("newest");
const viewMode = ref("grid");

// Sample products data
const products = [
  {
    id: 1,
    name: "Nike Air Jordan 1 Retro High OG Chicago",
    brand: "Nike",
    category: "shoes",
    price: 180000,
    size: "280mm",
    icon: "👟",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost 350 V2 Cream White",
    brand: "Adidas",
    category: "shoes",
    price: 250000,
    size: "285mm",
    icon: "👟",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Supreme Box Logo Hoodie Black",
    brand: "Supreme",
    category: "clothing",
    price: 800000,
    size: "L",
    icon: "👕",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 4,
    name: "Off-White x Nike Air Presto The Ten",
    brand: "Off-White",
    category: "shoes",
    price: 1200000,
    size: "290mm",
    icon: "👟",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    name: "Louis Vuitton Monogram Keepall 55",
    brand: "Louis Vuitton",
    category: "bags",
    price: 2500000,
    size: "55cm",
    icon: "👜",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 6,
    name: "Rolex Submariner Date",
    brand: "Rolex",
    category: "watches",
    price: 15000000,
    size: "40mm",
    icon: "⌚",
    rating: 4.9,
    reviews: 23,
  },
  {
    id: 7,
    name: "Chanel Classic Flap Bag",
    brand: "Chanel",
    category: "bags",
    price: 8000000,
    size: "25cm",
    icon: "👜",
    rating: 4.8,
    reviews: 34,
  },
  {
    id: 8,
    name: "Nike Dunk Low Panda",
    brand: "Nike",
    category: "shoes",
    price: 120000,
    size: "275mm",
    icon: "👟",
    rating: 4.6,
    reviews: 203,
  },
];

// Computed filtered products
const filteredProducts = computed(() => {
  let filtered = [...products];

  // Category filter
  if (selectedCategory.value) {
    filtered = filtered.filter((product) => product.category === selectedCategory.value);
  }

  // Brand filter
  if (selectedBrand.value) {
    filtered = filtered.filter(
      (product) => product.brand.toLowerCase() === selectedBrand.value,
    );
  }

  // Price filter
  if (minPrice.value) {
    filtered = filtered.filter((product) => product.price >= parseInt(minPrice.value));
  }
  if (maxPrice.value) {
    filtered = filtered.filter((product) => product.price <= parseInt(maxPrice.value));
  }

  // Sort
  switch (sortBy.value) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "popular":
      filtered.sort((a, b) => b.reviews - a.reviews);
      break;
    default: // newest
      filtered.sort((a, b) => b.id - a.id);
  }

  return filtered;
});
</script>
