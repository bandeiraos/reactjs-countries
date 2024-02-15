export interface ITheme {
    text: string,
    background: string,
    elements: string,
    input: string;
    icon: string;
}

export interface IThemes {
    [name: string]: ITheme,
}

const themes: IThemes = {
    light: {
        text: 'hsl(200, 15%, 8%)',
        background: 'hsl(0, 0%, 98%)',
        elements: 'hsl(0, 0%, 100%)',
        input: 'hsl(0, 0 %, 52 %)',
        icon: 'rgb(174 174 174)'
    },
    dark: {
        text: 'hsl(0, 0%, 100%)',
        background: 'hsl(207, 26%, 17%)',
        elements: 'hsl(209, 23%, 22%)',
        input: 'hsl(0, 0%, 100%)',
        icon: 'hsl(0, 0%, 100%)',
    }
};

export default themes;

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)