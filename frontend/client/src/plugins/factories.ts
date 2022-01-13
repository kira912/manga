import { animeFactory, chapterPageFactory, mangaScanFactory } from '../../../interface-adapter';
import { AnimeKey, ChapterPage, ScanKey } from '../symbols';

const factories = {
  install: (Vue: any) => {
    Vue.provide(AnimeKey, animeFactory)
    Vue.provide(ScanKey, mangaScanFactory)
    Vue.provide(ChapterPage, chapterPageFactory)
  }
};

export default factories;