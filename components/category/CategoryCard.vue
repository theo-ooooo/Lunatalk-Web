<template>
  <div class="group cursor-pointer" @click="$emit('click', category)">
    <div
      class="px-8 py-4 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-800 group-hover:border-gray-400 group-hover:bg-gray-50 group-hover:text-black transition-all duration-300 hover:shadow-md hover:-translate-y-1 text-center"
    >
      <div>{{ category.categoryName.toUpperCase() }}</div>
      <div class="text-xs text-gray-500 mt-1 font-normal">
        {{ formatProductCount(category.productCount) }} 상품
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Category } from "~/types/category";

interface Props {
  category: Category;
}

defineProps<Props>();

defineEmits<{
  click: [category: Category];
}>();

const formatProductCount = (count: number | null | undefined): string => {
  if (!count) return "0";
  return count.toLocaleString();
};
</script>
