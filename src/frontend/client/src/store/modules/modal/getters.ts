import { GetterTree } from "vuex";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, State> &
  GettersTypes = {
  active: (state: State) => {
    return state.open.length > 0 ? state.open[0] : null;
  },
  allOpen: (state: State) => {
    return state.open;
  },
};