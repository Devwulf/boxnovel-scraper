import React from "react";

export type ThemeColors = {
    foreground: string;
    background: string;
}

export const Themes: {[key: string]: ThemeColors} = { 
    Light: { foreground: "text-gray-800", background: "bg-gray-200" },
    Dark: { foreground: "text-gray-400", background: "bg-gray-800" }
};

export const ThemeContext = React.createContext({theme: Themes.Dark, toggleTheme: () => {}});

export type ThemeProviderProps = {

}

export type ThemeProviderState = {
    selectedTheme: ThemeColors;
}

export class ThemeProvider extends React.Component<ThemeProviderProps, ThemeProviderState> {
    constructor(props: ThemeProviderProps) {
        super(props);

        this.state = {
            selectedTheme: Themes.Dark
        };

        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState(state => ({selectedTheme: state.selectedTheme === Themes.Dark ? Themes.Light : Themes.Dark}));
    }

    render() {
        const { children } = this.props;
        const { selectedTheme } = this.state;

        return(
            <ThemeContext.Provider value={{theme: selectedTheme, toggleTheme: this.toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        );
    }
}