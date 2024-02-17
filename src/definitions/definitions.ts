export interface ITheme {
    text: string,
    background: string,
    elements: string,
    input: string;
    icon: string;
    boxShadow: string;
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
        nativeName: {
            [type: string]: {
                common: string;
            };
        };
    },
    region: string,
    population: number,
    flags: {
        svg: string,
        png: string,
        alt: string,
    },
    capital: string[],
    subregion: string,
    tld: string[],
    currencies: {
        [name: string]: {
            name: string;
        };
    },
    languages: {
        [name: string]: string;
    },
    borders: string[];
}