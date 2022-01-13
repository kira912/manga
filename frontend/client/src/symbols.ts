import { InjectionKey } from 'vue';
import { AnimeFactory, ChapterPageFactory } from '../../interface-adapter';
import { MangaScanFactory } from '../../interface-adapter';

export const AnimeKey: InjectionKey<AnimeFactory> = Symbol('anime');
export const ScanKey: InjectionKey<MangaScanFactory> = Symbol('scan');
export const ChapterPage: InjectionKey<ChapterPageFactory> = Symbol('chapterPage');
