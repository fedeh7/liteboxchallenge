import './Dropdown.scss';
import { ArrowDownIcon } from '../../Icons/ArrowDown';
import { CheckmarkIcon } from '../../Icons/Checkmark';
import { Dispatch, SetStateAction, useState } from 'react';

const Option = ({
    optionText,
    currentOption,
    selectedOption,
    setSelectedOption,
}: {
    optionText: string;
    currentOption: number;
    selectedOption: number;
    setSelectedOption: Dispatch<SetStateAction<number>>;
}) => {
    const isSelected = currentOption === selectedOption;
    const selectCurrentOption = () => {
        setSelectedOption(currentOption);
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
export const Dropdown = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [dropdownContentVisible, setDropdownContentVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownContentVisible(!dropdownContentVisible);
    };
    const options = ['Populares', 'Mis peliculas'];

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
                                currentOption={index}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
    return (
        <div className="dropdown-container">
            <button
                className="dropdown-button-container white"
                onClick={toggleDropdown}>
                VER: <span className="bold">POPULARES</span> <ArrowDownIcon />
            </button>
            {dropdownContentVisible && dropdownContent}
        </div>
    );
};
