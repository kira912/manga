<template>
  <div class="flex justify-center items-center space-x-1">
    <a @click="prevPage" class="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
    </a>
    <a v-if="store.getters.getCurrentListPage > 1" href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
      {{ store.getters.getCurrentListPage - 1}}
    </a>
    <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
      {{ store.getters.getCurrentListPage}}
    </a>
    <a href="#" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
      {{ store.getters.getCurrentListPage + 1}}
    </a>
    <a @click="nextPage" class="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";
const store = useStore();

const nextPage = async () => {
  await store.dispatch(AllActionTypes.GET_NEW_ANIME_LIST_PAGE, store.getters.currentListPage++);
}

const prevPage = async () => {
  await store.dispatch(AllActionTypes.GET_NEW_ANIME_LIST_PAGE, store.getters.currentListPage--);
}
</script>
