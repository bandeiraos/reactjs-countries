import { createContext, useContext, useState } from "react";
import { ICountry } from "../definitions/definitions";

interface ICountriesContext {
    selectedCountry: ICountry | null,
    handleSelectCountry: (country: ICountry | null) => void;
}

export const CountriesContext = createContext<ICountriesContext>({ selectedCountry: null, handleSelectCountry: () => { } });

const CountriesProvider = ({ ...props }) => {
    const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);

    const handleSelectCountry = (country: ICountry | null) => {
        setSelectedCountry(country);
    };

    return <CountriesContext.Provider value={{ selectedCountry, handleSelectCountry }} {...props} />;
};

const useCountriesContext = () => useContext(CountriesContext);


export { CountriesProvider, useCountriesContext };