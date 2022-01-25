import {
  AnimeEpisodesViewModel,
  AnimeViewModel,
  AnimeSearchResultViewModel,
} from "../../../../../interface-adapter/Anime/ViewModel";
import { ActionContext } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { AnimeFactory } from "../../../../../interface-adapter";
import { IRootState } from "../root";

export interface State {
  animes?: AnimeViewModel[];
  episodes?: AnimeEpisodesViewModel[];
}

export interface GettersTypes {
  getAll(state: State): AnimeViewModel[];
  getAnimeEpisodes(state: State): AnimeEpisodesViewModel[];
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_ALL_ANIME](state: S, payload: AnimeViewModel[]): void;
  [MutationTypes.SET_ANIME_EPISODES](
    state: S,
    payload: AnimeEpisodesViewModel[]
  ): void;
};

export interface ActionsTypes {
  [ActionTypes.GET_ALL_ANIME]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_ANIME_EPISODE](
    { commit }: AugmentedActionContext,
    payload: number,
  ): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, IRootState>, "commit">;
