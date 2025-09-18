<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div v-for="stat in STATS_CONFIG" :key="stat.label" class="group">
          <div
            class="text-4xl font-bold text-black mb-2 group-hover:scale-105 transition-transform"
          >
            {{ stat.value }}
          </div>
          <p class="text-gray-600">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { STATS_CONFIG } from "~/constants/site";
</script>
