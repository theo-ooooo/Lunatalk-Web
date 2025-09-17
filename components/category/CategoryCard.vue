<template>
  <div class="text-center group cursor-pointer" @click="$emit('click', category)">
    <div
      class="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"
    >
      <span class="text-2xl">{{ category.icon }}</span>
    </div>
    <p class="text-sm font-medium text-gray-700 group-hover:text-black">
      {{ category.name }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});

defineEmits(["click"]);
</script>
