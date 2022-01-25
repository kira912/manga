import { animeFactory, pageFactory, chapterFactory, mangaFactory } from '../../../interface-adapter';
import { AnimeKey, ChapterPage, MangaKey, ScanKey } from '../symbols';

const factories = {
  install: (Vue: any) => {
    Vue.provide(AnimeKey, animeFactory)
    Vue.provide(ScanKey, chapterFactory)
    Vue.provide(ChapterPage, pageFactory)
    Vue.provide(MangaKey, mangaFactory)
  }
};

export default factories;