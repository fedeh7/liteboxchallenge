import { ReactElement } from 'react';
import './Button.scss';

export const Button = ({
    text,
    icon,
    secondary = false,
}: {
    text: string;
    icon: ReactElement;
    secondary?: boolean;
}) => {
    return (
        <button
            className={`rectangle-button ${
                secondary ? 'secondary-button' : 'primary-button'
            }`}>
            {icon} <span className="rectangle-button-text white">{text}</span>
        </button>
    );
};
