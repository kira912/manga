import { ActionContext } from "vuex";
import { ChapterViewModel } from "../../../../../interface-adapter/Scan/Chapters/ViewModel";
import { ChapterPagesViewModel } from "../../../../../interface-adapter/Scan/Pages/ViewModel";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";

export interface State {
  chapters?: ChapterViewModel[];
  pages?: ChapterPagesViewModel[];
  rootDispatch?: boolean;
}

export interface GettersTypes {
  getChapters(state: State): ChapterViewModel[];
  getChapterPages(state: State): ChapterPagesViewModel[];
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_ANIME_SCAN_CHAPTERS](
    state: S,
    payload: ChapterViewModel[]
  ): void;
  [MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE](
    state: S,
    payload: ChapterPagesViewModel[]
  ): void;
};

export interface ActionsTypes {
  [ActionTypes.GET_ANIME_SCAN_CHAPTERS](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.GET_ANIME_SCAN_CHAPTER_PAGE](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, State>, "commit">;
