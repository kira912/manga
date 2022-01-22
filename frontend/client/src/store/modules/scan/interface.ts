import { ActionContext } from "vuex";
import {
  ScanChapterPagesViewModel,
  ScanChaptersViewModel,
} from "clean-archi-manga/frontend/interface-adapter/Scan/ScrapChapters/ViewModel";
import { MutationTypes } from "./mutation-types";
import { ActionTypes } from "./action-types";

export interface State {
  root: boolean;
  version: string;
}

export interface ScanStateTypes {
  chapters?: ScanChaptersViewModel[];
  pages?: ScanChapterPagesViewModel[];
  rootDispatch?: boolean;
}

export interface ScanGettersTypes {
  getChapters(state: ScanStateTypes): ScanChaptersViewModel[];
  getChapterPages(state: ScanStateTypes): ScanChapterPagesViewModel[];
}

export type MutationsTypes<S = ScanStateTypes> = {
  [MutationTypes.SET_ANIME_SCAN_CHAPTERS](state: S, payload: ScanChaptersViewModel[]): void;
  [MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE](
    state: S,
    payload: ScanChapterPagesViewModel[]
  ): void;
};

export interface ScanActionsTypes {
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