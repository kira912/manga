import { createStore } from "vuex";
import { IRootState } from "./interfaces";
import { AnimeStoreModuleTypes } from "./modules/anime/types";
import { ScanStoreModuleTypes } from "./modules/scan/types";
import { ModalStoreModuleTypes } from "./modules/modal/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  animeModule: AnimeStoreModuleTypes;
  scanModule: ScanStoreModuleTypes;
  modalModule: ModalStoreModuleTypes;
};

export type Store = AnimeStoreModuleTypes<
  Pick<StoreModules, "animeModule"> &
  Pick<StoreModules, "scanModule"> &
  Pick<StoreModules, "modalModule">
>;