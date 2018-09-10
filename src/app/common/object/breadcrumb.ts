export class Breadcrumbs {
    private title: string;

    private url: string;

    private link: boolean;

    constructor(title: string, url: string, link: boolean) {
        this.title = title;
        this.url = url;
        this.link = link;
    }

}
