<template>
  <div>
    <!-- Hero Section -->
    <HeroSection @shop-now="handleShopNow" @sell-now="handleSellNow" />

    <!-- Categories Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-black mb-4">카테고리</h2>
          <p class="text-gray-600 text-lg">원하는 카테고리를 선택해보세요</p>
        </div>
        <div class="flex flex-wrap justify-center gap-3">
          <CategoryCard
            v-for="category in categories"
            :key="category.categoryId"
            :category="category"
            @click="handleCategoryClick"
          />
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section
      v-for="exhibition in exhibitions"
      :key="exhibition.exhibitionId"
      class="py-16 bg-gray-50"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-12">
          <h2 class="text-3xl font-bold">{{ exhibition.title }}</h2>
          <button
            class="text-gray-600 hover:text-black font-medium"
            @click="handleViewMore(exhibition)"
          >
            더보기 →
          </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in exhibition.products"
            :key="product.productId"
            :product="product"
            @click="handleProductClick"
            @toggle-favorite="handleToggleFavorite"
          />
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <StatsSection />

    <!-- CTA Section -->
    <CTASection @download-app="handleDownloadApp" @start-web="handleStartWeb" />
  </div>
</template>

<script setup lang="ts">
import type { Category } from "~/types/category";
import type { Product, Exhibition } from "~/types/product";
import { useCategory } from "~/composables/category/useCategory";
import { useExhibitions } from "~/composables/exhibition/useExhibitions";
import { SITE_CONFIG } from "~/constants/site";

// SEO 설정
useHead({
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.description}`,
  meta: [
    {
      name: "description",
      content: SITE_CONFIG.description,
    },
    { name: "keywords", content: SITE_CONFIG.keywords },
  ],
});

// Composables
const { categories } = useCategory();
const { exhibitions } = useExhibitions();

// Event Handlers
const handleShopNow = () => {
  navigateTo("/shop");
};

const handleSellNow = () => {
  // TODO: 판매하기 페이지로 이동
  console.log("판매하기 클릭");
};

const handleCategoryClick = (category: Category) => {
  navigateTo(`/shop?category=${category.categoryId}`);
};

const handleProductClick = (product: Product) => {
  navigateTo(`/product/${product.productId}`);
};

const handleToggleFavorite = (product: Product) => {
  // TODO: 즐겨찾기 토글 로직
  console.log("즐겨찾기 토글:", product.productName);
};

const handleViewMore = (exhibition: Exhibition) => {
  // TODO: 전시회 상세 페이지로 이동
  console.log("더보기 클릭:", exhibition.title);
};

const handleDownloadApp = () => {
  // TODO: 앱 다운로드 로직
  console.log("앱 다운로드");
};

const handleStartWeb = () => {
  // TODO: 웹 시작 로직
  console.log("웹에서 시작하기");
};
</script>
