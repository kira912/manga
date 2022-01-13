import { ActionContext } from "vuex";
import { MutationTypes as AnimeMTypes } from "./modules/anime/mutation-types";
import { ActionTypes as AnimeATypes } from "./modules/anime/action-types";
import { ActionTypes as ScanATypes } from "./modules/scan/action-types";
import {
  AnimeEpisodesViewModel,
  AnimeViewModel,
} from "clean-archi-manga/frontend/interface-adapter/Anime/ViewModel";
import {
  ScanChapterPagesViewModel,
  ScanChaptersViewModel,
} from "clean-archi-manga/frontend/interface-adapter/Scan/ScrapChapters/ViewModel";

export interface IRootState {
  root: boolean;
  version: string;
}

export interface AnimeStateTypes {
  anime?: AnimeViewModel[];
  episodes?: AnimeEpisodesViewModel[];
  rootDispatch?: boolean;
}

export interface ScanStateTypes {
  chapters?: ScanChaptersViewModel[];
  pages?: ScanChapterPagesViewModel[];
  rootDispatch?: boolean;
}

export interface AnimeGettersTypes {
  getAll(state: AnimeStateTypes): AnimeViewModel[];
  getAnimeEpisodes(state: AnimeStateTypes): AnimeEpisodesViewModel[];
}

export interface ScanGettersTypes {
  getChapters(state: ScanStateTypes): ScanChaptersViewModel[];
  getChapterPages(state: ScanStateTypes): ScanChapterPagesViewModel[];
}

export type AnimeMutationsTypes<S = AnimeStateTypes> = {
  [AnimeMTypes.SET_ALL_ANIME](state: S, payload: AnimeViewModel[]): void;
  [AnimeMTypes.SET_ANIME_EPISODES](
    state: S,
    payload: AnimeEpisodesViewModel[]
  ): void;
};

export type ScanMutationsTypes<S = ScanStateTypes> = {
  [AnimeMTypes.SET_ALL_ANIME](state: S, payload: AnimeViewModel[]): void;
  [AnimeMTypes.SET_ANIME_EPISODES](
    state: S,
    payload: AnimeEpisodesViewModel[]
  ): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof AnimeMutationsTypes>(
    key: K,
    payload: Parameters<AnimeMutationsTypes[K]>[1]
  ): ReturnType<AnimeMutationsTypes[K]>;
} & Omit<ActionContext<AnimeStateTypes, IRootState>, "commit">;

export interface AnimeActionsTypes {
  [AnimeATypes.GET_ALL_ANIME]({ commit }: AugmentedActionContext): void;
  [AnimeATypes.GET_ANIME_EPISODE](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export interface ScanActionsTypes {
  [ScanATypes.GET_ANIME_SCAN_CHAPTERS](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}
