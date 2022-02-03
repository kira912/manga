<template>
  <div class="flex items-center justify-center min-h-screen">
    <button
      type="submit"
      class="flex items-center justify-center w-12 h-12 text-white rounded-r-lg"
    >
      <svg
        class="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </button>
    <input class="rounded-full p-2 border-none" v-model="search" :placeholder="viewModel.searchPlaceholder" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";
import { MangaKey } from "../../../symbols";
import { injectStrict } from "../../../utils/injectTyped";

const search = ref("");
const store = useStore();
const manga = injectStrict(MangaKey);
const viewModel = ref(manga.viewModel);

watch(search, (searched, prevSearched) => {
  if (searched === '') {
    store.dispatch(AllActionTypes.CLOSE_SEARCH_MANGA, manga);
  } else if (searched !== prevSearched) {
    store.dispatch(AllActionTypes.SEARCH_MANGA, {searched, factory: manga});
    store.dispatch(AllActionTypes.OPEN_SEARCH_MANGA, manga);
  }
});

onMounted(() => {
  store.dispatch(AllActionTypes.OPEN_SEARCH_MANGA, manga);
})
</script>
