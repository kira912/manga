<script setup lang="ts">
  import AnimeListView from '../../anime/components/AnimeListView.vue';
</script>

<template>
  <component :is="AnimeListView" routerName="AnimeScanDetail" urlParamValue="mangaName"></component>
</template>