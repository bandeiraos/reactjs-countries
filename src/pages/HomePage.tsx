import styled from "styled-components";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Countries from "../components/Countries";
import { useQuery } from "react-query";
import { useCallback, useState } from "react";
import { OPTIONS_VALUES } from "../constants/constants";
import { ICountry, IRegion } from "../definitions/definitions";

const HomePageStyled = styled.div`
    .form {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 500px){
        .form {
            flex-direction: column;
        }

        .field-wrapper:last-child {
            margin-top: 40px;
        }
    }
`;
const fetchCountries = async () => {
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data = await resp.json();

    return data;
};

const HomePage = () => {
    const [region, setRegion] = useState(OPTIONS_VALUES[0]);
    const [search, setSearch] = useState('');

    const { data: allCountries, error, isLoading } = useQuery(["countries", region], fetchCountries);

    const handleChangeSearch = useCallback((search: string) => {
        setSearch(search);
    }, []);

    const handleChangeRegion = useCallback((region: IRegion) => {
        setRegion(region);
    }, []);

    const filteredCountries = allCountries?.filter((country: ICountry) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        } else {
            if (region.value !== 'all') {
                return country.region.toLowerCase() === region.value;
            }
        }

        return country;
    });

    return (
        <HomePageStyled>
            <div className="form">
                <div className="field-wrapper">
                    <InputField onChange={handleChangeSearch} />
                </div>
                <div className="field-wrapper">
                    <SelectField onChange={handleChangeRegion} region={region} />
                </div>
            </div>

            {
                isLoading ? <div>Fetching countries...</div>
                    : error ? <div>An error occurred. Try again later.</div>
                        : <Countries countries={filteredCountries} />
            }
        </HomePageStyled>
    );
};

export default HomePage;
