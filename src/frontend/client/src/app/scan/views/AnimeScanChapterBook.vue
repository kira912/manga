<template>
  <div class="flex justify-center">
    <GetPagesChapter />
    <ChapterPageOverlayLoader />
    <GetSinglePage />
  </div>
</template>
<script setup lang="ts">
import GetPagesChapter from '../components/GetPagesChapter.vue';
import ChapterPageOverlayLoader from '../components/ChapterPageOverlayLoader.vue';
import GetSinglePage from "../components/GetSinglePage.vue";
</script>
