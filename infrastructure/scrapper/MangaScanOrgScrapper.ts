import { Chapter } from "../../manga/domain/Scan/Entity/Chapter";
import { AnimeScrapperInterface } from "../../manga/domain/Anime/UseCase/AnimeScrapperInterface";
import cheerio from 'cheerio';
import { Page } from "../../manga/domain/Scan/Entity/Page";

export class MangaScanOrgScrapper implements AnimeScrapperInterface {
    private readonly baseUri = "https://manga-scan.org/";
    async scrapChapters(animeName: string): Promise<Chapter[]> {
        const chapters = Array();
        // var headers = new Headers();
        // headers.append('Access-Control-Allow-Origin', window.location.origin);
        // console.log(headers.get('Access-Control-Allow-Origin'));
        
        const siteContentResponse = await fetch(`${this.baseUri}manga/${animeName}`, {method: 'GET'})
        const $ = cheerio.load(await siteContentResponse.text());
        
        $('.chapters-list .col-chapter').each((_, chapterElement) => {
            const chapterName = $(chapterElement).find('h5').text().trim().split("\n")[0];
            const chapterId = chapterName.split(' ')[2];
            const bookUrl = $(chapterElement).find('a').attr().href;

            chapters.push(new Chapter(chapterId, chapterName, bookUrl, []));
        })

        return chapters;
    }

    async scrapChapterPages(bookLink: string): Promise<Page[]> {
        const pages = Array();


    }

    private async fetchBook(bookLink: string): Promise<Page[]> {
        const book = [];

        const pageContentResponse = await fetch(`${this.baseUri}manga${bookLink}`)
        const $ = cheerio.load(await pageContentResponse.text())
        // const imgElement = $('.book-page img')
        // const id = pages.length === 0 ? 0 : imgElement.attr().alt;
        // const source = imgElement.attr().src;
        const nextUrl = $('.btn-next');

        const nextPage = this.fetchPage(nextUrl.attr().href)

        // book.push(new Page(id, source));

        return book;
    }

    private async fetchPage(url: string) {
        const pageContentResponse = await fetch(`${this.baseUri}manga${url}`)
        const $ = cheerio.load(await pageContentResponse.text())
        const imgElement = $('.book-page img')
        const id = imgElement.attr().alt;
        const source = imgElement.attr().src;
    }
}