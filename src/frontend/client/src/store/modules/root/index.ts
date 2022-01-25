import { Module, ModuleTree } from 'vuex';
import animeModule from '../anime';
import scanModule from '../scan';
import modalModule from '../modal';
import mangaModule from '../manga';

export interface IRootState {
  root: boolean;
  version: string;
}

const modules: ModuleTree<IRootState> = {
  animeModule,
  scanModule,
  modalModule,
  mangaModule,
};

const root: Module<IRootState, IRootState> = {
  modules,
};

export default root;
