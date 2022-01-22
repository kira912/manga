import { AnimeEpisodesViewModel, AnimeViewModel } from "clean-archi-manga/frontend/interface-adapter/Anime/ViewModel";
import { ActionContext } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

export interface State {
  anime?: AnimeViewModel[];
  episodes?: AnimeEpisodesViewModel[];
  rootDispatch?: boolean;
}

export interface AnimeGettersTypes {
  getAll(state: State): AnimeViewModel[];
  getAnimeEpisodes(state: State): AnimeEpisodesViewModel[];
}

export type AnimeMutationsTypes<S = State> = {
  [MutationTypes.SET_ALL_ANIME](state: S, payload: AnimeViewModel[]): void;
  [MutationTypes.SET_ANIME_EPISODES](
    state: S,
    payload: AnimeEpisodesViewModel[]
  ): void;
};

export interface AnimeActionsTypes {
  [ActionTypes.GET_ALL_ANIME]({ commit }: AugmentedActionContext): void;
  [ActionTypes.GET_ANIME_EPISODE](
    { commit }: AugmentedActionContext,
    payload: number
  ): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof AnimeMutationsTypes>(
    key: K,
    payload: Parameters<AnimeMutationsTypes[K]>[1]
  ): ReturnType<AnimeMutationsTypes[K]>;
} & Omit<ActionContext<State, State>, "commit">;