import React from "react";
import cheerio, { html } from "cheerio";
import { ThemeContext } from "./ThemeProvider";

export type TextElement = {
    isTitle: boolean;
    value: string;
}

export type WebScraperProps = {
    novelId: string;
    chapterFrom: number;
    chapterTo: number;
    loadPage: (callable: () => void) => void;
    clearPage: (callable: () => void) => void;
}

export type WebScraperState = {
    elements: TextElement[];
}

export default class WebScraper extends React.Component<WebScraperProps, WebScraperState> {
    constructor(props: WebScraperProps) {
        super(props);

        this.state = {
            elements: []
        };

        this.loadSinglePage = this.loadSinglePage.bind(this);
        this.loadPages = this.loadPages.bind(this);
        this.clearPage = this.clearPage.bind(this);
    }

    componentDidMount() {
        this.props.loadPage(this.loadPages);
        this.props.clearPage(this.clearPage);
    }

    async loadSinglePage(chapter: number): Promise<string> {
        const { novelId } = this.props;

        const html = await fetch(`https://cors-anywhere.herokuapp.com/https://boxnovel.com/novel/${novelId}/chapter-${chapter}/`)
            .then(response => response.text());
        
        return html;
    }

    async loadPages() {
        console.log("test");
        const { chapterFrom, chapterTo } = this.props;
        const elements: TextElement[] = [];

        for (var i = chapterFrom; i <= chapterTo; i++) {
            const html = await this.loadSinglePage(i);
            if (html) {
                const $ = cheerio.load(html);
                let titleFound: boolean = false;
                $("div.text-left h3").each((index, element) => {
                    elements.push({ isTitle: true, value: $(element).text()});
                    titleFound = true;
                });

                $("div.text-left p").each((index, element) => {
                    elements.push({ isTitle: !titleFound && index === 0, value: $(element).text()});
                });
            }
        }

        this.setState({elements});
    }

    clearPage() {
        this.setState({elements: []});
    }

    render() {
        const { elements } = this.state;

        return(
            <ThemeContext.Consumer>
                {(theme => (
                    <article className={`px-4 ${theme.theme.background} ${theme.theme.foreground}`}>
                        <section>
                            {elements.map((element, index) => 
                                (element.isTitle &&
                                    <h3 key={index} className="text-xl font-medium mt-6 mb-4">{element.value}</h3>
                                ) || 
                                (!element.isTitle &&
                                    <p key={index} className="pb-2">{element.value}</p>
                                )
                            )}
                        </section>
                    </article>
                ))}
            </ThemeContext.Consumer>
        );
    }
}