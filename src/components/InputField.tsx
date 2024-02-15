import styled from "styled-components";
import InputBase from "../styles/components/InputBase.styled";

const InputStyled = styled(InputBase)`
    input {
        flex: 1;
        border: 0;
        margin-left: 16px;
        padding: 0 8px;
        outline: none;
        background-color: ${(props) => props.theme.elements};
        color: ${(props) => props.theme.text};
        font-size: 16px;

        &::placeholder {
            opacity: .6;
        }
    }
`;

const InputField = () => {
    return (
        <InputStyled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            <input type='text' placeholder="Search for a country..." />
        </InputStyled>
    );
};

export default InputField;