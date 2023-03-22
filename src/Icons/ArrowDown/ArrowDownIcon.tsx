import './ArrowDownIcon.scss';
import arrowDownSvg from './ArrowDown.svg';

export const ArrowDownIcon = () => {
    return (
        <img
            className="arrow-down-icon"
            src={arrowDownSvg}
            alt="Arrow down icon"
        />
    );
};
