import { useMemo } from "react";
import styled from "styled-components";

interface IHeader {
    onChangeTheme: () => void;
    isDarkTheme: boolean,
}

const HeaderStyled = styled.header`
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    background-color: ${props => props.theme.elements};
    
    h1 {
        font-weight: 800;
        font-size: 16px;
        color: ${props => props.theme.text};
    }

    button {
        display: flex;
        align-items: center;
        background: none;
        border: 0;
        font-weight: bold;
        cursor: pointer;
        color: ${props => props.theme.text};

        svg {
            width: 16px ;
            margin-right: 10px;
        }
    }
    
`;


const Header = ({ onChangeTheme, isDarkTheme }: IHeader) => {
    const iconMemo = useMemo(() => {
        if (isDarkTheme) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>
            );
        }

        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
        );
    }, [isDarkTheme]);

    return (
        <HeaderStyled>
            <h1>Where in the world?</h1>
            <button onClick={onChangeTheme}>
                {iconMemo}

                Dark Mode
            </button>
        </HeaderStyled>
    );
};

export default Header;