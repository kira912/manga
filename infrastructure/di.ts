import { GetAnimeEpisodes } from "../manga/domain/Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodes";
import { GetAllAnime } from "../manga/domain/Anime/UseCase/GetAllAnime/GetAllAnime";
import { AnilistApi } from "./manga-api/AnilistApi";
import { GetScanChapters } from "../manga/domain/Scan/UseCase/GetScanChapters/GetScanChapters";
import { MangaScanOrgScrapper } from "./scrapper/MangaScanOrgScrapper";
import { GetScanChapterPage } from "../manga/domain/Scan/UseCase/GetChapterPages/GetScanChapterPage";

export const anilistMangaApi = new AnilistApi();
export const getAllAnime = new GetAllAnime(anilistMangaApi);
export const mangaOrgScrapper = new MangaScanOrgScrapper();
export const getAnimeEpisodes = new GetAnimeEpisodes(anilistMangaApi);
export const getScanChapter = new GetScanChapters(mangaOrgScrapper); 
export const getScanChapterPages = new GetScanChapterPage(mangaOrgScrapper);
