import { ActionContext } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

export interface State {
  open: Array<string>;
}

export type AugmentedActionContext = {
  commit<K extends keyof MutationsTypes>(
    key: K,
    payload: Parameters<MutationsTypes[K]>[1]
  ): ReturnType<MutationsTypes[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface ActionsTypes {
  [ActionTypes.OPEN_MODAL](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  [ActionTypes.CLOSE_MODAL](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
}

export interface GettersTypes {
  active(state: State): void;
  allOpen(state: State): void;
}

export type MutationsTypes<S = State> = {
  [MutationTypes.SET_OPEN_MODAL](state: S, payload: string): void;
  [MutationTypes.SET_CLOSE_MODAL](state: S, payload: string): void;
  [MutationTypes.SET_CLOSE_ALL_MODAL](state: S): void;
};
