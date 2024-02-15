import { useQuery } from "react-query";
import Country, { ICountry } from "./Country";
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

const fetchCountries = async () => {
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data = await resp.json();

    return data;
};

const Countries = () => {
    const { data: countries, error, isLoading } = useQuery("countries", fetchCountries);

    if (isLoading) return <div>Fetching countries...</div>;
    if (error) return <div>An error occurred. Try again later.</div>;

    return (
        <CountriesStyled>
            {countries.map((country: ICountry) => (
                <Country key={country.name.common} country={country} />
            ))}
        </CountriesStyled>
    );
};

export default Countries;