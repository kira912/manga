import { Module, ModuleTree } from "vuex";
import { IRootState } from "../../interfaces";
import animeModule from "../anime";
import scanModule from "../scan";
import modalModule from "../modal";

const modules: ModuleTree<IRootState> = {
  animeModule,
  scanModule,
  modalModule
};

const root: Module<IRootState, IRootState> = {
  modules,
};

export default root;