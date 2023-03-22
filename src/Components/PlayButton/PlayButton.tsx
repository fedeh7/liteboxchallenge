import './PlayButton.scss';
import { Button } from '../Button';
import { PlayIcon } from '../../Icons/Play';

export const PlayButton = () => {
    return <Button text="REPRODUCIR" icon={<PlayIcon />} />;
};
