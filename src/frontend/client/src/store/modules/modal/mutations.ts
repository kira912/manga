import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./interface";
import { MutationsTypes } from "./interface";

export const mutations: MutationTree<State> & MutationsTypes = {
  [MutationTypes.SET_OPEN_SCAN_MODAL](state: State, payload: {name: string, url: string}) {
    state.scanPageOpen.index = payload.name;
    state.scanPageOpen.url = payload.url;
  },
  [MutationTypes.SET_CLOSE_SCAN_MODAL](state: State) {
    state.scanPageOpen.index = '';
    state.scanPageOpen.url = '';
  },
};
