import styled from "styled-components";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import Countries from "../components/Countries";

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


const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="form">
                <div className="field-wrapper">
                    <InputField />
                </div>
                <div className="field-wrapper">
                    <SelectField />
                </div>
            </div>

            <Countries />
        </HomePageStyled>
    );
};

export default HomePage;
