<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <div class="w-full h-full flex items-center justify-center">
              <span class="text-9xl">{{ product.icon }}</span>
            </div>
          </div>
          <div class="grid grid-cols-4 gap-2">
            <div
              v-for="i in 4"
              :key="i"
              class="aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-black"
            >
              <span class="text-2xl">{{ product.icon }}</span>
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold mb-2">{{ product.name }}</h1>
            <p class="text-xl text-gray-600">{{ product.brand }}</p>
          </div>

          <!-- Price Section -->
          <div class="border-t border-b border-gray-200 py-6">
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl font-bold"
                >{{ product.price.toLocaleString() }}원</span
              >
              <div class="flex items-center text-sm text-gray-500">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span>{{ product.rating }}</span>
                <span class="ml-2">({{ product.reviews }}개 리뷰)</span>
              </div>
            </div>
            <div class="text-sm text-gray-600">
              <p>
                즉시 구매가:
                <span class="font-semibold">{{ product.price.toLocaleString() }}원</span>
              </p>
              <p>
                최근 거래가:
                <span class="font-semibold"
                  >{{ product.recentPrice.toLocaleString() }}원</span
                >
              </p>
            </div>
          </div>

          <!-- Size Selection -->
          <div>
            <h3 class="text-lg font-semibold mb-4">사이즈 선택</h3>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="size in product.sizes"
                :key="size"
                :class="[
                  'px-4 py-2 border rounded-lg text-sm font-medium transition-colors',
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400',
                ]"
                @click="selectedSize = size"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-4">
            <button
              class="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              즉시 구매하기
            </button>
            <button
              class="w-full border border-black text-black py-4 rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-colors"
            >
              관심 상품 등록
            </button>
          </div>

          <!-- Product Details -->
          <div class="space-y-4">
            <div>
              <h3 class="text-lg font-semibold mb-2">상품 정보</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <span>브랜드</span>
                  <span>{{ product.brand }}</span>
                </div>
                <div class="flex justify-between">
                  <span>모델명</span>
                  <span>{{ product.model }}</span>
                </div>
                <div class="flex justify-between">
                  <span>출시일</span>
                  <span>{{ product.releaseDate }}</span>
                </div>
                <div class="flex justify-between">
                  <span>컬러</span>
                  <span>{{ product.color }}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-2">거래 정보</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <span>검수 완료</span>
                  <span class="text-green-600 font-medium">완료</span>
                </div>
                <div class="flex justify-between">
                  <span>배송비</span>
                  <span>무료</span>
                </div>
                <div class="flex justify-between">
                  <span>배송 예정일</span>
                  <span>1-2일</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Not Found -->
      <div v-else class="text-center py-20">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h2>
        <p class="text-gray-600 mb-8">요청하신 상품이 존재하지 않거나 삭제되었습니다.</p>
        <NuxtLink
          to="/shop"
          class="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          쇼핑 계속하기
        </NuxtLink>
      </div>
    </div>

    <!-- Related Products -->
    <div v-if="product" class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold mb-8">관련 상품</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div class="aspect-square bg-gray-100 flex items-center justify-center">
              <span class="text-4xl">{{ relatedProduct.icon }}</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-sm mb-1 line-clamp-2">
                {{ relatedProduct.name }}
              </h3>
              <p class="text-gray-600 text-xs mb-2">{{ relatedProduct.brand }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm font-bold"
                  >{{ relatedProduct.price.toLocaleString() }}원</span
                >
                <span class="text-xs text-gray-500">{{ relatedProduct.size }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Get product ID from route
const route = useRoute();
const productId = route.params.id;

// Reactive data
const selectedSize = ref("");

// Sample product data
const products = {
  1: {
    id: 1,
    name: "Nike Air Jordan 1 Retro High OG Chicago",
    brand: "Nike",
    model: "Air Jordan 1",
    price: 180000,
    recentPrice: 175000,
    size: "280mm",
    sizes: ["270mm", "275mm", "280mm", "285mm", "290mm", "295mm"],
    icon: "👟",
    rating: 4.8,
    reviews: 124,
    releaseDate: "2022-05-15",
    color: "Chicago",
  },
  2: {
    id: 2,
    name: "Adidas Yeezy Boost 350 V2 Cream White",
    brand: "Adidas",
    model: "Yeezy Boost 350 V2",
    price: 250000,
    recentPrice: 245000,
    size: "285mm",
    sizes: ["270mm", "275mm", "280mm", "285mm", "290mm", "295mm"],
    icon: "👟",
    rating: 4.9,
    reviews: 89,
    releaseDate: "2021-08-21",
    color: "Cream White",
  },
};

// Related products
const relatedProducts = [
  {
    id: 3,
    name: "Nike Air Jordan 1 Retro High OG Bred",
    brand: "Nike",
    price: 200000,
    size: "280mm",
    icon: "👟",
  },
  {
    id: 4,
    name: "Nike Air Jordan 1 Retro High OG Royal",
    brand: "Nike",
    price: 190000,
    size: "280mm",
    icon: "👟",
  },
  {
    id: 5,
    name: "Nike Air Jordan 1 Retro High OG Shadow",
    brand: "Nike",
    price: 170000,
    size: "280mm",
    icon: "👟",
  },
  {
    id: 6,
    name: "Nike Air Jordan 1 Retro High OG Pine Green",
    brand: "Nike",
    price: 210000,
    size: "280mm",
    icon: "👟",
  },
];

// Get current product
const product = computed(() => products[productId]);

// Set default size
if (product.value) {
  selectedSize.value = product.value.sizes[0];
}
</script>
