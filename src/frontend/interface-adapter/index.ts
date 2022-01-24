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
import { ScanMangadexApi } from "../../infrastructure/manga-api/ScanMangadexApi";

export const eventDispatcher = new EventTargetEventDispatcher(new EventTarget());
export const animeApi = new AnimeApi();
export const scanMangadexApi = new ScanMangadexApi();
export const animeFakeApi = new AnimeFakeApi(animeApi);
export const animeFactory = new AnimeFactory(animeFakeApi);
export const chapterFactory = new ChapterFactory(scanMangadexApi);
export const pageFactory = new PageFactory(scanMangadexApi);

export {
    AnimeController,
    ChapterController,
    PageController,
    ScanMangadexApi,
    AnimeFactory,
    ChapterFactory,
    PageFactory
};