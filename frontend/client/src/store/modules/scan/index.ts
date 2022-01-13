import { Module } from "vuex";
import { ScanStateTypes, IRootState } from "../../interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const anime: Module<ScanStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default anime;
