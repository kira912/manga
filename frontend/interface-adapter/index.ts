import { AnimeController } from "./Anime/AnimeController";
import { MangaScanController } from "./Scan/ScrapChapters/MangaScanController";
import { AnimeFactory } from "./Anime/AnimeFactory";
import { EventTargetEventDispatcher } from '../../infrastructure/event/EventDispatcher';
import { AnilistApi } from "../../infrastructure/manga-api/AnilistApi";
import { EventTarget } from 'event-target-shim';
import { AnimeApi } from "../infrastructure/Anime/AnimeApi";
import { MangaScanFactory } from "./Scan/ScrapChapters/MangaScanFactory";
import { MangaScanOrgScrapper } from "../../infrastructure/scrapper/MangaScanOrgScrapper";

export const eventDispatcher = new EventTargetEventDispatcher(new EventTarget());
export const anilistMangaApi = new AnilistApi();
export const animeApi = new AnimeApi();
export const mangaScanOrgScrapper = new MangaScanOrgScrapper();
export const animeFactory = new AnimeFactory(eventDispatcher, anilistMangaApi);
export const mangaScanFactory = new MangaScanFactory(eventDispatcher, mangaScanOrgScrapper);


export { 
    AnimeController,
    MangaScanController,
    MangaScanOrgScrapper,
    AnilistApi,
    AnimeFactory,
    MangaScanFactory
};