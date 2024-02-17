import { KeyboardEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import InputBase from "../styles/components/InputBase.styled";
import { hasPressedEnter } from "../helpers/helpers";
import { IRegion } from "../definitions/definitions";
import { OPTIONS_VALUES } from "../constants/constants";

interface SelectFieldProps {
    onChange: (region: IRegion) => void,
    region: IRegion;
}

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
    box-shadow: ${props => props.theme.boxShadow};
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

const SelectField = ({ onChange, region }: SelectFieldProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

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
        handleToggleDropdown();
        onChange(region);
    }, [handleToggleDropdown, onChange]);

    const handleKeyDownFilters = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (hasPressedEnter(e.code)) {
            handleToggleDropdown();
        }
    }, [handleToggleDropdown]);

    const handleKeyDownFilterItem = useCallback((e: KeyboardEvent<HTMLLIElement>, region: IRegion) => {
        if (hasPressedEnter(e.code)) {
            onChange(region);
            selectRef?.current?.focus();
        }
    }, [onChange]);

    const optionsMemo = useMemo(() => {
        return (
            <OptionsStyled role="listbox" aria-hidden={!isOpen}>
                {OPTIONS_VALUES.map((item) => (
                    <OptionItemStyled
                        key={item.value}
                        role="button"
                        onClick={() => handleChangeRegion(item)}
                        tabIndex={0}
                        onKeyDown={(e) => handleKeyDownFilterItem(e, item)}
                    >
                        {item.name}
                    </OptionItemStyled>
                ))}
            </OptionsStyled>
        );
    }, [handleChangeRegion, handleKeyDownFilterItem, isOpen]);

    return (
        <SelectWrapperStyle
            ref={selectRef}
            role="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={handleKeyDownFilters}
        >
            <SelectStyled onClick={handleToggleDropdown} className="select-filter">
                {region.value === 'all' ? 'Filter by Region' : region.name}
                {iconMemo}
            </SelectStyled>

            {isOpen && optionsMemo}
        </SelectWrapperStyle>

    );
};

export default SelectField;