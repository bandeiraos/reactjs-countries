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

export interface IRegion {
    name: string,
    value: string;
}

export interface ICountry {
    name: {
        common: string;
    },
    region: string,
    population: number,
    flags: {
        png: string,
        alt: string;
    },
    capital: string[];
}