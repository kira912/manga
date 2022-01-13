import { Chapter, Page, AnimeScrapperInterface } from "../../manga/domain";
import cheerio from 'cheerio';
import { MangaOrgPageModel } from "./MangaScanOrgScrapperModel";

export class MangaScanOrgScrapper implements AnimeScrapperInterface {
    private readonly baseUri = "https://manga-scan.org";
    async scrapChapters(animeName: number): Promise<Chapter[]> {
        const chapters = Array();
        // var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', window.location.origin);
        // console.log(headers.get('Access-Control-Allow-Origin'));
        
        const siteContentResponse = await fetch(`${this.baseUri}/manga/${animeName}`, {method: 'GET'})
        const $ = cheerio.load(await siteContentResponse.text());
        
        $('.chapters-list .col-chapter').each((_, chapterElement) => {
            const chapterName = $(chapterElement).find('h5').text().trim().split("\n")[0];
            const chapterId = chapterName.split(' ')[2];
            const bookId = $(chapterElement).attr()['data-chapter'];

            chapters.push(new Chapter(chapterId, chapterName, bookId));
        })

        return chapters;
    }

    async scrapChapterPages(bookId: string): Promise<Page[]> {
        const book = await this.fetchBook(`/book/${bookId}`);
        console.log(book);
        
        return book;
    }

    private async fetchBook(bookLink: string): Promise<Page[]> {
        const book = [];

        const pageContentResponse = await fetch(`${this.baseUri}${bookLink}`);
        const $ = cheerio.load(await pageContentResponse.text());
        const page = await this.fetchPage(bookLink)

        book.push(new Page(page.id, page.url));
        let nextBtn = $('.btn-next');

        console.log(nextBtn.length);
        
        while (nextBtn.length !== 0) {
            const nextPage = await this.fetchPage(nextBtn.attr().href)
            book.push(new Page(nextPage.id, nextPage.url));
            nextBtn = nextPage.nextBtn;
        }

        return book;
    }

    private async fetchPage(pageUrl: string): Promise<MangaOrgPageModel> {
        const pageContentResponse = await fetch(`${this.baseUri}${pageUrl}`)
        const $ = cheerio.load(await pageContentResponse.text())
        const imgElement = $('.book-page img')
        const id = imgElement.attr().alt;
        const url = imgElement.attr().src;
        
        return new MangaOrgPageModel(id, url, $('.btn-next'));
    }
}