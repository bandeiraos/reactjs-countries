import styled from "styled-components";
import HomePage from "../pages/HomePage";

const ContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 10%;
    
    @media screen and (max-width: 500px) {
        padding: 30px;

    }
`;

const Container = () => {
    return (
        <ContainerStyled>
            <HomePage />
        </ContainerStyled>
    );
};

export default Container;