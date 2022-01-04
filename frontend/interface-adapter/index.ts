import { AnimeController } from "./Anime/AnimeController";
import { AnimeFactory } from "./Anime/AnimeFactory";
import { EventTargetEventDispatcher } from '../../infrastructure/event/EventDispatcher';
import { AnimeKitsuApi } from "../../infrastructure/manga-api/KitsuApi";
import { EventTarget } from 'event-target-shim';

export const eventDispatcher = new EventTargetEventDispatcher(new EventTarget());
export const kitsuMangaApi = new AnimeKitsuApi();
export const animeFactory = new AnimeFactory(eventDispatcher, kitsuMangaApi);


export { 
    AnimeController,
    AnimeKitsuApi,
    AnimeFactory
};