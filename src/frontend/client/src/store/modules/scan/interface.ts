import { ActionContext } from "vuex";
import { ChapterViewModel, ViewModel as ScanViewModel } from "../../../../../interface-adapter/Scan/Chapters/ViewModel";
import { ChapterPagesViewModel } from "../../../../../interface-adapter/Scan/Pages/ViewModel";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";
import { IRootState } from "../root";

export interface State {
  chapters: ChapterViewModel[];
  pages: ChapterPagesViewModel[];
  viewModel: ScanViewModel;
  rootDispatch?: boolean;
}

export interface GettersTypes {
  getChapters(state: State): ChapterViewModel[];
  getChapterPages(state: State): ChapterPagesViewModel[];
  haveChapters(state: State): boolean;
  getChapterViewModel(state: State): ScanViewModel;
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_SCAN_CHAPTERS](
    state: S,
    payload: ChapterViewModel[],
  ): void;
  [MutationTypes.SET_SCAN_CHAPTER_PAGE](
    state: S,
    payload: ChapterPagesViewModel[],
  ): void;
  [MutationTypes.SET_CLEAR_CHAPTERS](
    state: S,
  ): void;
};

export interface ActionsTypes {
  [ActionTypes.GET_SCAN_CHAPTERS](
    { commit }: AugmentedActionContext,
    payload: string,
  ): void;
  [ActionTypes.GET_SCAN_CHAPTER_PAGE](
    { commit }: AugmentedActionContext,
    payload: string,
  ): void;
  [ActionTypes.GET_CLEAR_CHAPTERS](
    { commit }: AugmentedActionContext,
  ): void;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, IRootState>, "commit">;
