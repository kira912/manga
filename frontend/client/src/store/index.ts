import { createStore } from "vuex";
import { IRootState } from "./interfaces";
import { AnimeStoreModuleTypes } from "./modules/anime/types";

import root from "./modules/root";
import { ScanStoreModuleTypes } from "./modules/scan/types";

export const store = createStore<IRootState>(root);

type StoreModules = {
  animeModule: AnimeStoreModuleTypes;
  scanModule: ScanStoreModuleTypes;
};

export type Store = AnimeStoreModuleTypes<
  Pick<StoreModules, "animeModule"> &
  Pick<StoreModules, "scanModule">
>;