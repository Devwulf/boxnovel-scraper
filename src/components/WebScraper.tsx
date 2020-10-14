import React from "react";
import cheerio from "cheerio";
import { ThemeContext } from "./ThemeProvider";
import LoadingBar from "./LoadingBar";

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
    pagesLoaded: number;
    totalPages: number;
    isLoading: boolean;
}

export default class WebScraper extends React.Component<WebScraperProps, WebScraperState> {
    constructor(props: WebScraperProps) {
        super(props);

        this.state = {
            elements: [],
            pagesLoaded: 0,
            totalPages: 0,
            isLoading: false
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
        const { chapterFrom, chapterTo } = this.props;
        const elements: TextElement[] = [];
        this.setState({isLoading: true, pagesLoaded: 0, totalPages: (chapterTo - chapterFrom) + 1});

        for (var i = chapterFrom; i <= chapterTo; i++) {
            const html = await this.loadSinglePage(i);
            if (html) {
                const $ = cheerio.load(html);
                let titleFound: boolean = false;
                const rootDiv = $("div.text-left");
                rootDiv.find("h1, h2, h3, h4, h5, h6").each((index, element) => {
                    elements.push({ isTitle: true, value: $(element).text()});
                    titleFound = true;
                });

                rootDiv.find("p").each((index, element) => {
                    elements.push({ isTitle: !titleFound && index === 0, value: $(element).text()});
                });
            }

            this.setState(prevState => ({pagesLoaded: prevState.pagesLoaded + 1}));
        }

        this.setState({elements: elements, isLoading: false});
    }

    clearPage() {
        this.setState({elements: []});
    }

    render() {
        const { pagesLoaded, totalPages, isLoading, elements } = this.state;

        return(
            <ThemeContext.Consumer>
                {(theme => (
                    <>
                        <div className="">
                            <div className={`${isLoading ? "" : "hidden"}`}>
                                <LoadingBar currentItems={pagesLoaded} totalItems={totalPages} />
                            </div>
                        </div>
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
                    </>
                ))}
            </ThemeContext.Consumer>
        );
    }
}