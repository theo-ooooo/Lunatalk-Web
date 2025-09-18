<template>
  <section class="bg-black text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6">{{ HERO_CONFIG.title }}</h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8">
        {{ HERO_CONFIG.subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          @click="$emit('shop-now')"
        >
          {{ HERO_CONFIG.buttons.primary }}
        </button>
        <button
          class="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors"
          @click="$emit('sell-now')"
        >
          {{ HERO_CONFIG.buttons.secondary }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HERO_CONFIG } from "~/constants/site";

defineEmits<{
  "shop-now": [];
  "sell-now": [];
}>();
</script>
