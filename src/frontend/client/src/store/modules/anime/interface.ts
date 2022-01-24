import {
  AnimeEpisodesViewModel,
  AnimeViewModel,
  AnimeSearchResultViewModel,
} from "../../../../../interface-adapter/Anime/ViewModel";
import { ActionContext } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { AnimeFactory } from "../../../../../interface-adapter";

export interface State {
  animes?: AnimeViewModel[];
  episodes?: AnimeEpisodesViewModel[];
  resultSearch?: AnimeSearchResultViewModel[];
  resultSearchDisplayed: boolean;
}

export interface GettersTypes {
  getAll(state: State): AnimeViewModel[];
  getAnimeEpisodes(state: State): AnimeEpisodesViewModel[];
  getSearchResult(state: State): AnimeSearchResultViewModel[];
  resultIsActive(state: State): boolean;
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_ALL_ANIME](state: S, payload: AnimeViewModel[]): void;
  [MutationTypes.SET_ANIME_EPISODES](
    state: S,
    payload: AnimeEpisodesViewModel[]
  ): void;
  [MutationTypes.SET_SEARCH_ANIME](
    state: S,
    payload: AnimeSearchResultViewModel[]
  ): void;
  [MutationTypes.SET_OPEN_RESULT_SEARCH](
    state: S,
    payload: boolean
  ): void;
  [MutationTypes.SET_CLOSE_RESULT_SEARCH](
    state: S,
    payload: boolean
  ): void;
};

export interface ActionsTypes {
  [ActionTypes.GET_ALL_ANIME]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_ANIME_EPISODE](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
  [ActionTypes.SEARCH_ANIME](
    { commit }: AugmentedActionContext,
    payload: { searched: string; factory: AnimeFactory }
  ): void;
  [ActionTypes.OPEN_SEARCH_ANIME]({ commit }: AugmentedActionContext, factory: AnimeFactory): void;
  [ActionTypes.CLOSE_SEARCH_ANIME]({ commit }: AugmentedActionContext, factory: AnimeFactory): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, State>, "commit">;
