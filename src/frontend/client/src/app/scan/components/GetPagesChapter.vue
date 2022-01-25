<template>
  <div class="flex flex-col">
    <div class v-for="(page, index) in store.getters.getChapterPages" :key="index">
      <input class="sr-only peer" type="radio" name="carousel" :id="`carousel-${index}`" :checked="isFirstPage(index)" />

      <div
        class="w-96 absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0"
      >
        <img
          class="rounded-t-lg w-full h-full"
          :src="page.url"
          @click="store.dispatch(AllActionTypes.OPEN_SCAN_PAGE_MODAL, {name: `scan_page_${index}`, url: page.url})"
        />

        <div class="absolute top-1/2 w-full flex justify-between z-20">
          <label
            :for="`carousel-${Math.abs(index - 1)}`"
            class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
          <label
            :for="`carousel-${Math.abs(index + 1)}`"
            class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";

const store = useStore();
const route = useRoute();

const isFirstPage = (pageIndex) => {
  return pageIndex === 0;
}

onMounted(async () => {
  await store.dispatch(
    AllActionTypes.GET_SCAN_CHAPTER_PAGE,
    route.params.bookId,
  );
});
</script>
