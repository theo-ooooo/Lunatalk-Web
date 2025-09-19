<template>
  <section
    class="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-gray-900 overflow-hidden"
  >
    <!-- Main Content -->
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="text-center">
        <!-- Brand Logo/Title -->
        <div class="mb-12">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight"
          >
            {{ HERO_CONFIG.title }}
          </h1>
          <div
            class="w-20 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mx-auto rounded-full"
          ></div>
        </div>

        <!-- Subtitle -->
        <p
          class="text-lg md:text-xl lg:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          {{ HERO_CONFIG.subtitle }}
        </p>

        <!-- CTA Button -->
        <div class="flex justify-center">
          <button
            class="px-12 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium text-lg rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            @click="$emit('shop-now')"
          >
            {{ HERO_CONFIG.buttons.primary }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { HERO_CONFIG } from "~/constants/site";

defineEmits<{
  "shop-now": [];
}>();

// 컴포넌트 이름 명시적 지정
defineOptions({
  name: "HeroSection",
});
</script>
