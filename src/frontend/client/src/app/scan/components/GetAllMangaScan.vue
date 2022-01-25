<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <router-link 
          v-for="(chapter, index) in store.getters.getChapters"
          :key="index"
          :to="{name: 'AnimeScanChapterBook', params: {bookId: chapter.viewerId}}"
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:shadow-2xl"
        >
            <article class="overflow-hidden rounded-lg shadow-lg">
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                  <span> {{ chapter.chapter }} </span>
                    <h1 class="text-lg">
                        {{ chapter.name }}
                    </h1>
                </header>
            </article>
        </router-link>
    </div>
</div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

</script>
