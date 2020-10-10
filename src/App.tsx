import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/main.css";
import WebScraper from "./components/WebScraper";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext, ThemeProvider } from "./components/ThemeProvider";

library.add(fas);

export type AppProps = {

}

export type AppState = {
    website: string;
    novelId: string;
    chapterFrom: number;
    chapterTo: number;
    isNavOpen: boolean;
    loadPage: () => void;
    clearPage: () => void;
}

export default class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            website: "BoxNovel",
            novelId: "super-gene-webnovel",
            chapterFrom: 1,
            chapterTo: 1,
            isNavOpen: true,
            loadPage: () => {},
            clearPage: () => {}
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        const { isNavOpen } = this.state;
        if (isNavOpen)
            this.setState({isNavOpen: false});
        else
            this.setState({isNavOpen: true});
    }

    render() {
        const { website, novelId, chapterFrom, chapterTo, isNavOpen, loadPage, clearPage } = this.state;

        return (
            <ThemeProvider>
                <ThemeContext.Consumer>
                    {(theme => (
                        <div className={`${theme.theme.background}`}>
                            <nav className={`${isNavOpen ? "" : "hidden"} options p-4 bg-gray-800`}>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 font-medium text-gray-100">Website</label>
                                    <select className="px-1 rounded text-lg border-2 border-gray-500 bg-gray-300" 
                                        disabled
                                        value={website}
                                        onChange={event => this.setState({website: event.target.value})}>
                                        <option value="BoxNovel">Box Novel (boxnovel.com)</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 font-medium text-gray-100" htmlFor="">Novel Id</label>
                                    <input className="px-2 rounded text-lg border-2 border-gray-500 bg-gray-300" 
                                        type="text"
                                        value={novelId}
                                        onChange={event => this.setState({novelId: event.target.value})} />
                                </div>
                    
                                <label className="font-medium text-gray-100" htmlFor="">Chapters</label>
                                <div className="flex flex-row mb-4">
                                    <div className="flex flex-col mr-4">
                                        <label className="mb-1 text-gray-100" htmlFor="">From</label>
                                        <input className="px-2 rounded text-lg border-2 border-gray-500 bg-gray-300" 
                                            type="number"
                                            value={chapterFrom}
                                            onChange={event => this.setState({chapterFrom: parseInt(event.target.value)})} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-gray-100" htmlFor="">To</label>
                                        <input className="px-2 rounded text-lg border-2 border-gray-500 bg-gray-300" 
                                            type="number"
                                            value={chapterTo}
                                            onChange={event => this.setState({chapterTo: parseInt(event.target.value)})} />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className="mb-1">
                                        <button className="px-3 py-1 mr-4 rounded bg-blue-500 text-gray-100 hover:bg-blue-400"
                                            onClick={() => {
                                                clearPage();
                                                loadPage();
                                            }}>
                                            Generate
                                        </button>
                                        <button className="px-3 py-1 rounded bg-gray-600 text-gray-100 hover:bg-gray-500"
                                            onClick={() => clearPage()}>
                                            Clear
                                        </button>
                                    </div>
                                    <button className="px-3 py-1 mb-1 rounded bg-green-500 text-gray-100 hover:bg-green-400"
                                        onClick={() => theme.toggleTheme()}>
                                        Toggle Theme
                                    </button>
                                </div>
                            </nav>
                            <button className="w-full py-2 flex justify-center items-center rounded-b-lg bg-gray-700 text-gray-100 hover:bg-gray-600"
                                onClick={() => this.toggleNav()}>
                                {(isNavOpen &&
                                    <FontAwesomeIcon icon="chevron-up" />
                                ) ||
                                (!isNavOpen &&
                                    <FontAwesomeIcon icon="chevron-down" />
                                )}
                            </button>
                
                            <main className="reading-content">
                                <WebScraper novelId={novelId} 
                                    chapterFrom={chapterFrom} 
                                    chapterTo={chapterTo}
                                    loadPage={callable => this.setState({loadPage: callable})}
                                    clearPage={callable => this.setState({clearPage: callable})} />
                            </main>
                        </div>
                    ))}
                </ThemeContext.Consumer>
            </ThemeProvider>
        );
    }
}
