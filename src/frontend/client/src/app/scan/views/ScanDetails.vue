<template>
  <div>
    <GetAllMangaScan v-if="store.getters.haveChapters" />
    <p v-else> {{ store.getters.getChapterViewModel.noChapters }} </p>
</div>
</template>
<script setup lang="ts">
import { onBeforeMount, onUnmounted } from '@vue/runtime-core';
import { AllActionTypes } from '../../../store/action-types';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import GetAllMangaScan from '../components/GetAllMangaScan.vue';

const store = useStore();
const route = useRoute();
onBeforeMount(() => {
  store.dispatch(AllActionTypes.GET_SCAN_CHAPTERS, route.params.id);
})

onUnmounted(() => {
  store.dispatch(AllActionTypes.GET_CLEAR_CHAPTERS);
})
</script>
