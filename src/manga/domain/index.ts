import { Anime } from "./Anime/Entity/Anime";
import { Episode } from "./Anime/Entity/Episode";
import { Chapter } from "./Scan/Entity/Chapter";
import { Page } from "./Scan/Entity/Page";
import { Manga } from './Manga/Entity/Manga'

import { GetAllAnime } from "./Anime/UseCase/GetAllAnime/GetAllAnime";
import { GetAnimeEpisodes } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodes";
import { GetScanChapters } from "./Scan/UseCase/GetScanChapters/GetScanChapters";
import { GetScanChapterPage } from "./Scan/UseCase/GetChapterPages/GetScanChapterPage";
import { SearchAnime } from "./Anime/UseCase/SearchAnime/SearchAnime";

import { GetAllManga } from "./Manga/UseCase/GetAllManga/GetAllManga";

import { GetAllAnimeResponse } from "./Anime/UseCase/GetAllAnime/GetAllAnimeResponse";
import { GetScanChapterPageResponse } from "./Scan/UseCase/GetChapterPages/GetScanChapterPageResponse";
import { GetAnimeEpisodesResponse } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesResponse";
import { GetScanChaptersResponse } from "./Scan/UseCase/GetScanChapters/GetScanChaptersResponse";
import { SearchAnimeResponse } from "./Anime/UseCase/SearchAnime/SearchAnimeResponse";

import { GetAllMangaResponse } from "./Manga/UseCase/GetAllManga/GetAllMangaResponse";

export * from "./Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
export * from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
export * from "./Scan/UseCase/GetScanChapters/GetScanChaptersPresenterInterface";
export * from "./Scan/UseCase/GetChapterPages/GetScanChapterPagePresenterInterface";
export * from "./Anime/UseCase/SearchAnime/SearchAnimePresenterInterface"
export * from "./Anime/UseCase/AnimeApiInterface";
export * from "./Scan/UseCase/ScanApiInterface";
export * from "./Manga/UseCase/MangaApiInterface";
export * from "./Manga/UseCase/GetAllManga/GetAllMangaPresenterInterface"

import { GetAnimeEpisodeRequest } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodeRequest";
import { GetScanChaptersRequest } from "./Scan/UseCase/GetScanChapters/GetScanChaptersRequest";
import { GetScanChapterPageRequest } from "./Scan/UseCase/GetChapterPages/GetScanChapterPageRequest";
import { SearchAnimeRequest } from "./Anime/UseCase/SearchAnime/SearchAnimeRequest";

export {
    Anime,
    Episode,
    Chapter,
    Page,
    Manga,
    GetAllManga,
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage,
    SearchAnime,
    GetAllMangaResponse,
    GetAllAnimeResponse,
    GetAnimeEpisodesResponse,
    GetScanChaptersResponse,
    GetScanChapterPageResponse,
    SearchAnimeResponse,
    GetAnimeEpisodeRequest,
    GetScanChaptersRequest,
    GetScanChapterPageRequest,
    SearchAnimeRequest
}