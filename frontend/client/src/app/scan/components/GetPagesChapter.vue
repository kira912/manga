<template>
  <div class="flex flex-col">
    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div
          class="page"
          v-for="(page, index) in store.getters.getChapterPages"
          :key="index"
          ref="inner"
        >
          <img
            class="aspect-auto"
            :src="page.url"
            :alt="page.id"
            @click="store.dispatch(AllActionTypes.OPEN_MODAL, `page_${index}`)"
          />
          <GetSinglePage :url="page.url" :index="index" />
        </div>
      </div>
    </div>
    <div class="flex flex-wrap self-center">
      <button
        class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="prev"
      >
        prev
      </button>
      <button
        class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        @click="next"
      >
        next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pre } from "restify";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";
import GetSinglePage from "./GetSinglePage.vue";

const store = useStore();
const route = useRoute();
const innerStyles = ref({});
const inner = ref(null);
const step = ref("");
const transitioning = ref(false);
const setStep = () => {
  const innerWidth = inner.value.scrollWidth;
  const totalCards = store.getters.getChapterPages.length;
  step.value = `${innerWidth / totalCards}px`;
};
const next = () => {
  if (transitioning.value) {
    return;
  }

  transitioning.value = true;
  moveLeft();
  afterTransition(() => {
    const card = store.getters.getChapterPages.shift();
    store.getters.getChapterPages.push(card);
    resetTranslate();
    transitioning.value = false;
  });
};
const prev = () => {
  if (transitioning.value) {
    return;
  }

  transitioning.value = true;
  moveRight();
  afterTransition(() => {
    const card = store.getters.getChapterPages.pop();
    store.getters.getChapterPages.unshift(card);
    resetTranslate();
    transitioning.value = false;
  });
};
const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(-${step.value})
                translateX(-${step.value})`,
  };
};
const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step.value})
                translateX(-${step.value})`,
  };
};

const afterTransition = (callback) => {
  const listener = () => {
    callback();
    inner.value.removeEventListener("transitionend", listener);
  };
  inner.value.addEventListener("transitionend", listener);
};
const resetTranslate = () => {
  innerStyles.value = {
    transition: "none",
    transform: `translateX(-${step.value})`,
  };
};

onMounted(async () => {
  await store.dispatch(
    AllActionTypes.GET_ANIME_SCAN_CHAPTER_PAGE,
    route.params.bookId
  );

  window.addEventListener('keydown', (event) => {
    if (event.which === 37) {
      prev()
    }
    else if (event.which === 39) {
      next()
    }
  })

  setStep();
  resetTranslate();
});
</script>

<style scoped>
.carousel {
  width: 100%;
  overflow: hidden;
}
.inner {
  transition: transform 0.2s;
  white-space: nowrap;
}
.page {
  display: inline-flex;
  background-color: #39b1bd;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: 50%;
}
</style>
