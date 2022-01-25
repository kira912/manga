import { InjectionKey } from 'vue';
import { AnimeFactory, PageFactory, MangaFactory } from '../../interface-adapter';
import { ChapterFactory } from '../../interface-adapter';

export const AnimeKey: InjectionKey<AnimeFactory> = Symbol('anime');
export const ScanKey: InjectionKey<ChapterFactory> = Symbol('scan');
export const ChapterPage: InjectionKey<PageFactory> = Symbol('chapterPage');
export const MangaKey: InjectionKey<MangaFactory> = Symbol('manga');
