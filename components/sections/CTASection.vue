<template>
  <section class="py-20 bg-black text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl font-bold mb-6">{{ CTA_CONFIG.title }}</h2>
      <p class="text-xl text-gray-300 mb-8">
        {{ CTA_CONFIG.subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          class="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          @click="$emit('download-app')"
        >
          {{ CTA_CONFIG.buttons.primary }}
        </button>
        <button
          class="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
          @click="$emit('start-web')"
        >
          {{ CTA_CONFIG.buttons.secondary }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CTA_CONFIG } from "~/constants/site";

defineEmits<{
  "download-app": [];
  "start-web": [];
}>();
</script>
