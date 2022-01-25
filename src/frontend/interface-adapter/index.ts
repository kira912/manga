import { MangaController } from "./Manga/MangaController";
import { AnimeController } from "./Anime/AnimeController";
import { ChapterController } from "./Scan/Chapters/ChapterController";
import { PageController } from "./Scan/Pages/PageController";
import { AnimeFactory } from "./Anime/AnimeFactory";
import { EventTargetEventDispatcher } from '../../infrastructure/event/EventDispatcher';
import { EventTarget } from 'event-target-shim';
import { AnimeApi } from "../infrastructure/Anime/AnimeApi";
import { ChapterFactory } from "./Scan/Chapters/ChapterFactory";
import { AnimeFakeApi } from "../infrastructure/Anime/AnimeFakeApi";
import { PageFactory } from "./Scan/Pages/PageFactory";
import { ScanMangaDexApi } from "../../infrastructure/manga-api/MangaDex/ScanMangaDexApi";
import { MangaFactory } from "./Manga/MangaFactory";
import { MangaApiMangaDex } from "../../infrastructure/manga-api/MangaDex/MangaApiMangaDex";
import { MangaApi, MangaFakeApi } from "../../frontend/infrastructure";

export const eventDispatcher = new EventTargetEventDispatcher(new EventTarget());
export const animeApi = new AnimeApi();
export const scanMangadexApi = new ScanMangaDexApi();
export const mangadexApi = new MangaApiMangaDex();
export const animeFakeApi = new AnimeFakeApi(animeApi);
export const animeFactory = new AnimeFactory(animeFakeApi);
export const chapterFactory = new ChapterFactory(scanMangadexApi);
export const pageFactory = new PageFactory(scanMangadexApi);

export const mangaFactory = new MangaFactory(mangadexApi);
export const mangaApi = new MangaApi();
export const mangaFakeApi = new MangaFakeApi(mangaApi);

export {
    MangaController,
    AnimeController,
    ChapterController,
    PageController,
    ScanMangaDexApi,
    AnimeFactory,
    ChapterFactory,
    PageFactory,
    MangaFactory
};