import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./interface";
import { MutationsTypes } from "./interface";

export const mutations: MutationTree<State> & MutationsTypes = {
  [MutationTypes.SET_OPEN_MODAL](state: State, name: string) {
    state.open.unshift(name);
  },
  [MutationTypes.SET_CLOSE_MODAL](state: State, name: string) {
    state.open = state.open.filter((element) => element != name);
  },
  [MutationTypes.SET_CLOSE_ALL_MODAL](state: State) {
    state.open = [];
  },
};
