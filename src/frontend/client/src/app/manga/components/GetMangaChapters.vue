<template>
  <div>
    <div v-for="chapter in store.getters.getChapters" :key="chapter.chapter">
      {{ chapter }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { AllActionTypes } from "../../../store/action-types";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();

onBeforeMount(() => {
  store.dispatch(AllActionTypes.GET_SCAN_CHAPTERS, route.params.id)
})
</script>
