import { GetScanChaptersResponse } from './GetScanChaptersResponse';

export interface GetScanChaptersPresenterInterface {
    presentScanChapters(response: GetScanChaptersResponse): void;
}