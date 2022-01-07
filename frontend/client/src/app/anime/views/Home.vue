<script setup lang="ts">
  import AnimeListView from '../components/AnimeListView.vue';
</script>

<template>
  <component :is="AnimeListView" routerName="AnimeEpisodesDetail" urlParamKey="id"></component>
</template>