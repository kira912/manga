<template>
  <div class="flex flex-wrap">
    <div v-for="page in store.getters.getChapterPages" :key="page.id">
      <img class="object-contain h-48 w-96" :src="page.url" :alt="page.id" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";

const store = useStore();
const route = useRoute()

onBeforeMount(async () => {
  await store.dispatch(AllActionTypes.GET_ANIME_SCAN_CHAPTER_PAGE, route.params.id);
})
</script>
