import { ICountry } from "../definitions/definitions";
import Country from "./Country";
import styled from "styled-components";

const CountriesStyled = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    width: 100%;

    @media screen and (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 500px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

interface CountriesProps {
    countries: ICountry[];
}

const Countries = ({ countries }: CountriesProps) => {
    return (
        <CountriesStyled>
            {countries.map((country: ICountry) => (
                <Country key={country.name.common} country={country} />
            ))}
        </CountriesStyled>
    );
};

export default Countries;