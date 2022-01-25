import { ActionContext } from "vuex";
import { IRootState } from "../root";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

export interface State {
  scanPageOpen: {
    index: string,
    url: string,
  };
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, IRootState>, "commit">;

export interface ActionsTypes {
  [ActionTypes.OPEN_SCAN_PAGE_MODAL](
    { commit }: AugmentedActionContext,
    name: string,
    url: string,
  ): void;
  [ActionTypes.CLOSE_SCAN_PAGE_MODAL](
    { commit }: AugmentedActionContext,
  ): void;
}

export interface GettersTypes {
  active(state: State): void;
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_OPEN_SCAN_MODAL](state: S, payload: {name: string, url: string}): void;
  [MutationTypes.SET_CLOSE_SCAN_MODAL](state: S): void;
};
