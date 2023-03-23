import playCircleSvg from './PlayCircle.svg';
import './PlayCircleIcon.scss';

export const PlayCircleIcon = () => {
    return (
        <img
            className="play-circle-icon"
            src={playCircleSvg}
            alt="Play circle icon"
        />
    );
};
