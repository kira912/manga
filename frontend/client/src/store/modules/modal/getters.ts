import { GetterTree } from "vuex";
import { IRootState } from "../../interfaces";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, IRootState> &
  GettersTypes = {
  active: (state: State) => {
    return state.open.length > 0 ? state.open[0] : null;
  },
  allOpen: (state: State) => {
    return state.open;
  },
};