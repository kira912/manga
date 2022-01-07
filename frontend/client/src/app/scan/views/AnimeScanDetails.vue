<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div v-for="(chapter, index) in viewModel.chapters" :key="index" @click="fetchChapterPages(chapter.bookUrl)" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl">
            <article class="overflow-hidden rounded-lg shadow-lg">
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        {{ chapter.name }}
                    </h1>
                </header>
            </article>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from "@vue/runtime-core";
import { MangaScanFactory } from '../../../../../interface-adapter';
import { inject } from 'vue'

const $scan: MangaScanFactory | undefined = inject('scan');
const viewModel = $scan.viewModel;
console.log(viewModel);


onMounted(() => {
  const route = useRoute()
  if (typeof $scan !== 'undefined') {
    $scan.controller.getChaptersList(route.params.id);
  }
})

function fetchChapterPages(bookUrl) {
  console.log(bookUrl);
  $scan.controller.getChapterPage(bookUrl)
}

</script>
