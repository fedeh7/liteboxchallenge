import './Dropdown.scss';
import { ArrowDownIcon } from '../../Icons/ArrowDown';
import { CheckmarkIcon } from '../../Icons/Checkmark';
import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useClickOutside } from '../../utils/hooks';

export const Dropdown = ({
    options,
    selectedOption,
    setSelectedOption,
}: {
    options: string[];
    selectedOption: string;
    setSelectedOption: Dispatch<SetStateAction<string>>;
}) => {
    const [dropdownContentVisible, setDropdownContentVisible] = useState(false);
    const ref = useRef(null);

    const toggleDropdown = () => {
        setDropdownContentVisible(!dropdownContentVisible);
    };

    const closeDropdown = () => {
        setDropdownContentVisible(false);
    };
    useClickOutside(ref, closeDropdown);
    const dropdownContent = (
        <>
            <div className="dropdown-arrow-row">{triangleFigure}</div>
            <div className="dropdown-content">
                <div className="dropdown-content-options-container">
                    {options.map((optionText, index) => {
                        return (
                            <Option
                                optionText={optionText}
                                key={index}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                                closeDropdown={closeDropdown}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
    return (
        <div className="dropdown-container" ref={ref}>
            <button
                className="dropdown-button-container white"
                onClick={toggleDropdown}>
                VER: <span className="bold">{selectedOption}</span>{' '}
                <ArrowDownIcon />
            </button>
            {dropdownContentVisible && dropdownContent}
        </div>
    );
};

const Option = ({
    optionText,
    selectedOption,
    setSelectedOption,
    closeDropdown,
}: {
    optionText: string;
    selectedOption: string;
    setSelectedOption: Dispatch<SetStateAction<string>>;
    closeDropdown: () => void;
}) => {
    const isSelected = optionText === selectedOption;
    const selectCurrentOption = () => {
        setSelectedOption(optionText);
        closeDropdown();
    };
    return (
        <div
            className={`dropdown-content-option white ${
                isSelected && 'selected bold'
            }`}
            onClick={selectCurrentOption}>
            <p>{optionText}</p>
            <CheckmarkIcon />
        </div>
    );
};

const triangleFigure = (
    <div className="triangle-whole">
        <div className="triangle-left" />
        <div className="triangle-right" />
    </div>
);
