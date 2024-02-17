import styled from "styled-components";
import { useCountriesContext } from "../context/context";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";

const ContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 10%;
    
    @media screen and (max-width: 500px) {
        padding: 30px;
    }
`;
// https://restcountries.com/v3.1/name/{name}?fullText=true
const Container = () => {

    const { selectedCountry } = useCountriesContext();
    return (
        <ContainerStyled>
            {selectedCountry ?
                <DetailsPage />
                :
                <HomePage />
            }
        </ContainerStyled>
    );
};

export default Container;