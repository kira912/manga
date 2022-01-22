import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  ActionsTypes,
  State
} from "./interface";
import { IRootState } from "../../interfaces";

export const actions: ActionTree<State, IRootState> &
ActionsTypes = {
  [ActionTypes.OPEN_MODAL]({ commit }, name: string) {
    commit(MutationTypes.SET_OPEN_MODAL, name);
  },
  [ActionTypes.CLOSE_MODAL]({ commit }, name: string) {
    commit(MutationTypes.SET_CLOSE_MODAL, name);
  },
  [ActionTypes.CLOSE_ALL_MODAL]({ commit }) {
    commit(MutationTypes.SET_CLOSE_ALL_MODAL);
  },
};