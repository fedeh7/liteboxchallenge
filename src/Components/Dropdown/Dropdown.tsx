import './Dropdown.scss';
import { ArrowDownIcon } from '../../Icons/ArrowDown';

export const Dropdown = () => {
    return (
        <button className="dropdown-button-container white">
            VER: <span className="bold">POPULARES</span> <ArrowDownIcon />
        </button>
    );
};
