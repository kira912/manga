import { ActionContext } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import { MangaViewModel, MangaSearchResultViewModel } from "../../../../../interface-adapter/manga/ViewModel";
import { IRootState } from "../root";
import { MangaFactory } from "frontend/interface-adapter";

export interface State {
  mangas?: MangaViewModel[];
  manga: MangaViewModel | null;
  resultSearch?: MangaSearchResultViewModel[];
  resultSearchDisplayed: boolean;
}

export interface GettersTypes {
  getAllManga(state: State): MangaViewModel[];
  getManga(state: State): MangaViewModel;
  getSearchResult(state: State): MangaSearchResultViewModel[];
  resultIsActive(state: State): boolean;
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_ALL_MANGA](state: S, payload: MangaViewModel[]): void;
  [MutationTypes.SET_SEARCH_MANGA](
    state: S,
    payload: MangaSearchResultViewModel[]
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
  [ActionTypes.GET_ALL_MANGA]({ commit }: AugmentedActionContext): void;
  [ActionTypes.SEARCH_MANGA](
    { commit }: AugmentedActionContext,
    payload: { searched: string; factory: MangaFactory }
  ): void;
  [ActionTypes.OPEN_SEARCH_MANGA]({ commit }: AugmentedActionContext, factory: MangaFactory): void;
  [ActionTypes.CLOSE_SEARCH_MANGA]({ commit }: AugmentedActionContext, factory: MangaFactory): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, IRootState>, "commit">;
