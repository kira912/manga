import { AnimeController } from "./Anime/AnimeController";
import { MangaScanController } from "./Scan/ScrapChapters/MangaScanController";
import { ChapterPageController } from "./Scan/Pages/ChapterPageController";
import { AnimeFactory } from "./Anime/AnimeFactory";
import { EventTargetEventDispatcher } from '../../infrastructure/event/EventDispatcher';
import { EventTarget } from 'event-target-shim';
import { AnimeApi } from "../infrastructure/Anime/AnimeApi";
import { MangaScanFactory } from "./Scan/ScrapChapters/MangaScanFactory";
import { MangaScanOrgScrapper } from "../../infrastructure/scrapper/MangaScanOrgScrapper";
import { AnimeFakeApi } from "../../frontend/infrastructure/Anime/AnimeFakeApi";
import { ChapterPageFactory } from "./Scan/Pages/ChapterPageFactory";

export const eventDispatcher = new EventTargetEventDispatcher(new EventTarget());
export const animeApi = new AnimeApi();
export const mangaScanOrgScrapper = new MangaScanOrgScrapper();
export const animeFakeApi = new AnimeFakeApi(animeApi);
export const animeFactory = new AnimeFactory(animeFakeApi);
export const mangaScanFactory = new MangaScanFactory(mangaScanOrgScrapper);
export const chapterPageFactory = new ChapterPageFactory(mangaScanOrgScrapper);


export { 
    AnimeController,
    MangaScanController,
    ChapterPageController,
    MangaScanOrgScrapper,
    AnimeFactory,
    MangaScanFactory,
    ChapterPageFactory
};