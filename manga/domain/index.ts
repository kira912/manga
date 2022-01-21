import { Anime } from "./Anime/Entity/Anime";
import { Episode } from "./Anime/Entity/Episode";
import { Chapter } from "./Scan/Entity/Chapter";
import { Page } from "./Scan/Entity/Page";

import { GetAllAnime } from "./Anime/UseCase/GetAllAnime/GetAllAnime";
import { GetAnimeEpisodes } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodes";
import { GetScanChapters } from "./Scan/UseCase/GetScanChapters/GetScanChapters";
import { GetScanChapterPage } from "./Scan/UseCase/GetChapterPages/GetScanChapterPage";

import { GetAllAnimeResponse } from "./Anime/UseCase/GetAllAnime/GetAllAnimeResponse";
import { GetScanChapterPageResponse } from "./Scan/UseCase/GetChapterPages/GetScanChapterPageResponse";
import { GetAnimeEpisodesResponse } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesResponse";
import { GetScanChaptersResponse } from "./Scan/UseCase/GetScanChapters/GetScanChaptersResponse";

export * from "./Anime/UseCase/GetAllAnime/GetAllAnimePresenterInterface";
export * from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
export * from "./Scan/UseCase/GetScanChapters/GetScanChaptersPresenterInterface";
export * from "./Scan/UseCase/GetChapterPages/GetScanChapterPagePresenterInterface";
export * from "./Anime/UseCase/AnimeApiInterface";
export * from "./Scan/UseCase/ScanApiInterface";

import { GetAnimeEpisodeRequest } from "./Anime/UseCase/GetAnimeEpisodes/GetAnimeEpisodeRequest";
import { GetScanChaptersRequest } from "./Scan/UseCase/GetScanChapters/GetScanChaptersRequest";
import { GetScanChapterPageRequest } from "./Scan/UseCase/GetChapterPages/GetScanChapterPageRequest";

export {
    Anime,
    Episode,
    Chapter,
    Page,
    GetAllAnime,
    GetAnimeEpisodes,
    GetScanChapters,
    GetScanChapterPage,
    GetAllAnimeResponse,
    GetAnimeEpisodesResponse,
    GetScanChaptersResponse,
    GetScanChapterPageResponse,
    GetAnimeEpisodeRequest,
    GetScanChaptersRequest,
    GetScanChapterPageRequest
}