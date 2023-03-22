import './MyListButton.scss';
import { Button } from '../Button';
import { PlusIcon } from '../../Icons/Plus';

export const MyListButton = () => {
    return <Button text="MI LISTA" secondary={true} icon={<PlusIcon />} />;
};
