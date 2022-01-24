import { animeFactory, pageFactory, chapterFactory } from '../../../interface-adapter';
import { AnimeKey, ChapterPage, ScanKey } from '../symbols';

const factories = {
  install: (Vue: any) => {
    Vue.provide(AnimeKey, animeFactory)
    Vue.provide(ScanKey, chapterFactory)
    Vue.provide(ChapterPage, pageFactory)
  }
};

export default factories;