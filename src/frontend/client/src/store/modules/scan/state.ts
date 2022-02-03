import { ViewModel as ScanViewModel } from "../../../../../interface-adapter/scan/chapters/ViewModel";
import { State } from "./interface";

export const state: State = {
  chapters: [],
  pages: [],
  viewModel: new ScanViewModel(),
};