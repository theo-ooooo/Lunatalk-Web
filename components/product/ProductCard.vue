<template>
  <div
    class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    @click="$emit('click', product)"
  >
    <div class="aspect-square bg-gray-100 relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-6xl">{{ product.icon }}</span>
      </div>
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
    <div class="p-4">
      <h3 class="font-semibold text-lg mb-2 line-clamp-2">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-2">{{ product.brand }}</p>
      <div class="flex justify-between items-center">
        <span class="text-lg font-bold">{{ product.price.toLocaleString() }}원</span>
        <span class="text-sm text-gray-500">{{ product.size }}</span>
      </div>
      <div v-if="showRating" class="mt-2 flex items-center text-sm text-gray-500">
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
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
  showRating: {
    type: Boolean,
    default: true,
  },
});

defineEmits(["click", "toggle-favorite"]);
</script>
