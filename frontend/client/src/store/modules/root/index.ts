import { Module, ModuleTree } from "vuex";
import { IRootState } from "../../interfaces";
import animeModule from "../anime";
import scanModule from "../scan";

const modules: ModuleTree<IRootState> = {
  animeModule,
  scanModule
};

const root: Module<IRootState, IRootState> = {
  modules,
};

export default root;