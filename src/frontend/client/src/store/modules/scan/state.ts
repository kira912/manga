import { ViewModel as ScanViewModel } from "../../../../../interface-adapter/Scan/Chapters/ViewModel";
import { State } from "./interface";

export const state: State = {
  chapters: [],
  pages: [],
  viewModel: new ScanViewModel(),
};