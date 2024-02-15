import styled from "styled-components";

const InputBase = styled.div`
    min-height: 60px;
    border: 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    font-size: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.input};

    svg {
        width: 18px;
        color: ${(props) => props.theme.icon};
    }
`;

export default InputBase;