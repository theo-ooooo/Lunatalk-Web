<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <!-- 1차 메뉴 (상단) -->
    <div class="bg-black text-white py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center text-sm">
          <div class="flex items-center space-x-6">
            <!-- <span>정품만을 다루는 중고 명품 거래 플랫폼</span> -->
          </div>
          <div class="flex items-center space-x-4">
            <button class="hover:text-gray-300 transition-colors">로그인</button>
            <button class="hover:text-gray-300 transition-colors">회원가입</button>
            <button class="hover:text-gray-300 transition-colors">고객센터</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 2차 메뉴 (하단) -->
    <div class="border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-black">
              <NuxtImg
                src="https://admin.lunatalk.co.kr/static/media/logo.e0e49014f4ed6f070031.jpg"
                alt="logo"
                width="100"
                height="100"
              />
            </NuxtLink>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <!-- Cart Button -->
            <button
              class="text-gray-700 hover:text-black transition-colors relative p-2"
              title="장바구니"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M16.192 5.2h3.267a1 1 0 0 1 .998.938l.916 14.837a.4.4 0 0 1-.399.425H3.025a.4.4 0 0 1-.4-.425l.917-14.837A1 1 0 0 1 4.54 5.2h3.267a4.251 4.251 0 0 1 8.385 0ZM7.75 6.7H5.01l-.815 13.2h15.61l-.816-13.2h-2.74v2.7h-1.5V6.7h-5.5v2.7h-1.5V6.7Zm1.59-1.5h5.32a2.751 2.751 0 0 0-5.32 0Z"
                />
              </svg>
              <!-- Cart Badge -->
              <span
                class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
              >
                3
              </span>
            </button>

            <!-- My Page Button -->
            <button
              class="text-gray-700 hover:text-black transition-colors p-2"
              title="마이페이지"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 3차 메뉴 (카테고리) -->
    <div class="bg-gray-50 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center space-x-8 py-3">
          <NuxtLink
            v-for="category in categories"
            :key="category.categoryId"
            :to="`/shop?category=${category.categoryId}`"
            class="text-gray-700 hover:text-black font-medium text-sm"
          >
            {{ category.categoryName.toUpperCase() }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCategory } from "~/composables/category/useCategory";

const { categories } = useCategory();
</script>
