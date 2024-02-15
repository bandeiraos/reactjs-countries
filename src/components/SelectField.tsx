import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import InputBase from "../styles/components/InputBase.styled";
import { useQueryClient } from "react-query";

interface IRegion {
    name: string,
    value: string;
}

const OPTIONS_VALUES: IRegion[] = [
    { name: 'Africa', value: 'africa' },
    { name: 'America', value: 'america' },
    { name: 'Asia', value: 'asia' },
    { name: 'Europe', value: 'europe' },
    { name: 'Oceania', value: 'oceania' },
];

const SelectWrapperStyle = styled.div`
    width: 250px;
    position: relative;
    user-select: none;

    @media screen and (max-width: 500px){
        width: 50%;
    }
`;

const SelectStyled = styled(InputBase)`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;

const OptionsStyled = styled.ul`
    background-color: ${(props) => props.theme.elements};
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 12px 32px;
    position: absolute;
    top: 68px;
    width: 100%;
`;

const OptionItemStyled = styled.li`
    list-style: none;
    cursor: pointer;
    padding: 6px;
    color: ${props => props.theme.text};

    &:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`;

const fetchByRegion = async (region: string) => {
    const resp = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await resp.json();

    return data;
};

const SelectField = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [region, setRegion] = useState<string | null>(null);
    const queryClient = useQueryClient();

    const iconMemo = useMemo(() => {
        if (isOpen) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            );
        }

        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }, [isOpen]);

    const handleToggleDropdown = useCallback(() => {
        setIsOpen(current => !current);
    }, []);

    const handleChangeRegion = useCallback(async (region: IRegion) => {
        const data = await fetchByRegion(region.value);
        queryClient.setQueryData('countries', data);
        setRegion(region.name);
        handleToggleDropdown();
    }, [queryClient, handleToggleDropdown]);

    const optionsMemo = useMemo(() => {
        return (
            <OptionsStyled>
                {OPTIONS_VALUES.map((item) => (
                    <OptionItemStyled key={item.value} onClick={() => handleChangeRegion(item)}>
                        {item.name}
                    </OptionItemStyled>
                ))}
            </OptionsStyled>
        );
    }, [handleChangeRegion]);

    return (
        <SelectWrapperStyle>
            <SelectStyled onClick={handleToggleDropdown}>
                {region ?? 'Filter by Region'}
                {iconMemo}
            </SelectStyled>
            {isOpen && optionsMemo}
        </SelectWrapperStyle>

    );
};

export default SelectField;