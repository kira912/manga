import { GetScanChapterPageResponse } from './GetScanChapterPageResponse';

export interface GetScanChapterPagePresenterInterface {
    presentChapterPages(response: GetScanChapterPageResponse): void;
}