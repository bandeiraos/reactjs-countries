import { IThemes } from "../definitions/definitions";

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