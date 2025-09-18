<template>
  <div
    class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    @click="$emit('click', product)"
  >
    <!-- Product Image -->
    <div class="aspect-square bg-gray-100 relative">
      <NuxtImg
        v-if="product.thumbnailImage"
        :src="getImageUrl(product.thumbnailImage.imagePath)"
        :alt="product.productName"
        class="w-full h-full object-cover"
        loading="lazy"
      />
      <div v-else class="absolute inset-0 flex items-center justify-center">
        <span class="text-6xl">👟</span>
      </div>

      <!-- Favorite Button -->
      <div class="absolute top-2 right-2">
        <button
          class="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity"
          @click.stop="$emit('toggle-favorite', product)"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-2 line-clamp-2">{{ product.productName }}</h3>
      <p class="text-gray-600 text-sm mb-2">
        {{ product.category?.categoryName?.toUpperCase() || "" }}
      </p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold">
          {{ formatPrice(product.price) }}
        </span>
        <span class="text-sm text-gray-500">
          {{ product.colors?.join(", ") || "" }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "~/types/product";

interface Props {
  product: Product;
  showRating?: boolean;
}

defineProps<Props>();

defineEmits<{
  click: [product: Product];
  "toggle-favorite": [product: Product];
}>();

const config = useRuntimeConfig();

const getImageUrl = (imagePath: string): string => {
  return `${config.public.cdnBase}${imagePath}`;
};

const formatPrice = (price: number | null | undefined): string => {
  if (!price) return "0원";
  return `${price.toLocaleString()}원`;
};
</script>
