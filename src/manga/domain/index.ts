import { Anime } from "./anime/entity/Anime";
import { Episode } from "./anime/entity/Episode";
import { Chapter } from "./scan/entity/Chapter";
import { Page } from "./scan/entity/Page";
import { Manga } from './manga/entity/Manga'

import { GetAllAnime } from "./anime/useCases/getAllAnime/GetAllAnime";
import { GetAnimeEpisodes } from "./anime/useCases/getAnimeEpisodes/GetAnimeEpisodes";
import { GetScanChapters } from "./scan/useCases/getScanChapters/GetScanChapters";
import { GetScanChapterPage } from "./scan/useCases/getChapterPages/GetScanChapterPage";
import { SearchManga } from "./manga/useCases/searchManga/SearchManga";
import { GetMangaById } from "./manga/useCases/getMangaById/GetMangaById";
import { GetAllManga } from "./manga/useCases/getAllManga/GetAllManga";

import { GetAllAnimeResponse } from "./anime/useCases/getAllAnime/GetAllAnimeResponse";
import { GetScanChapterPageResponse } from "./scan/useCases/getChapterPages/GetScanChapterPageResponse";
import { GetAnimeEpisodesResponse } from "./anime/useCases/getAnimeEpisodes/GetAnimeEpisodesResponse";
import { GetScanChaptersResponse } from "./scan/useCases/getScanChapters/GetScanChaptersResponse";
import { SearchMangaResponse } from "./manga/useCases/searchManga/SearchMangaResponse";
import { GetMangaByIdResponse } from "./manga/useCases/getMangaById/GetMangaByIdResponse";
import { GetAllMangaResponse } from "./manga/useCases/getAllManga/GetAllMangaResponse";

export * from "./anime/useCases/getAllAnime/GetAllAnimePresenterInterface";
export * from "./anime/useCases/getAnimeEpisodes/GetAnimeEpisodesPresenterInterface";
export * from "./scan/useCases/getScanChapters/GetScanChaptersPresenterInterface";
export * from "./scan/useCases/getChapterPages/GetScanChapterPagePresenterInterface";
export * from "./manga/useCases/searchManga/SearchMangaPresenterInterface"
export * from "./anime/useCases/AnimeApiInterface";
export * from "./scan/useCases/ScanApiInterface";
export * from "./manga/useCases/MangaApiInterface";
export * from "./manga/useCases/getAllManga/GetAllMangaPresenterInterface";
export * from "./manga/useCases/getMangaById/GetMangaByIdPresenterInterface";

import { GetAllAnimeRequest } from "./anime/useCases/getAllAnime/GetAllAnimeRequest";
import { GetAnimeEpisodeRequest } from "./anime/useCases/getAnimeEpisodes/GetAnimeEpisodeRequest";
import { GetScanChaptersRequest } from "./scan/useCases/getScanChapters/GetScanChaptersRequest";
import { GetScanChapterPageRequest } from "./scan/useCases/getChapterPages/GetScanChapterPageRequest";
import { SearchMangaRequest } from "./manga/useCases/searchManga/SearchMangaRequest";
import { GetMangaByIdRequest } from "./manga/useCases/getMangaById/GetMangaByIdRequest";

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
  SearchManga,
  GetMangaById,
  GetAllMangaResponse,
  GetAllAnimeResponse,
  GetAnimeEpisodesResponse,
  GetScanChaptersResponse,
  GetScanChapterPageResponse,
  SearchMangaResponse,
  GetMangaByIdResponse,
  GetAnimeEpisodeRequest,
  GetScanChaptersRequest,
  GetScanChapterPageRequest,
  SearchMangaRequest,
  GetMangaByIdRequest,
  GetAllAnimeRequest
}