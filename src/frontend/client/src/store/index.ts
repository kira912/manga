import { createStore } from "vuex";
import { IRootState } from "./modules/root/index";
import { AnimeStoreModuleTypes } from "./modules/anime/types";
import { ScanStoreModuleTypes } from "./modules/scan/types";
import { ModalStoreModuleTypes } from "./modules/modal/types";
import { MangaStoreModuleTypes } from "./modules/manga/types";

import root from "./modules/root";

export const store = createStore<IRootState>(root);

type StoreModules = {
  animeModule: AnimeStoreModuleTypes;
  scanModule: ScanStoreModuleTypes;
  modalModule: ModalStoreModuleTypes;
  mangaModule: MangaStoreModuleTypes;
};

export type Store = AnimeStoreModuleTypes<
  Pick<StoreModules, "animeModule"> &
  Pick<StoreModules, "scanModule"> &
  Pick<StoreModules, "modalModule"> &
  Pick<StoreModules, "mangaModule">
>;
