import { Module } from "vuex";
import { AnimeStateTypes, IRootState } from "../../interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const anime: Module<AnimeStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default anime;
