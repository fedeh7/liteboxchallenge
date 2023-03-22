import { useState } from 'react';
import { PlayCircleIcon } from '../../Icons/PlayCircle';
import { PlayCircleSmallIcon } from '../../Icons/PlayCircleSmall';
import { PlayCircleSmallHighlightedIcon } from '../../Icons/PlayCircleSmallHighlihted';
import { StarIcon } from '../../Icons/Star';
import './PopularMovie.scss';

export const PopularMovie = ({
    title,
    voteAverage,
    backgroundImagePath,
    releaseDate,
}: {
    title: string;
    voteAverage: number;
    backgroundImagePath: string;
    releaseDate: string;
}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringSmallPlayButton, setIsHoveringSmallPlayButton] =
        useState(false);
    const backgroundImage = {
        backgroundImage: `url('https://image.tmdb.org/t/p/w300${backgroundImagePath}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px',
    };

    const handleOnHover = () => {
        console.log('hovers');
        setIsHovering(true);
    };

    const handleOnStopHover = () => {
        setIsHovering(false);
    };
    const handleOnHoverSmallPlayButton = () => {
        setIsHoveringSmallPlayButton(true);
    };

    const handleOnStopHoverSmallPlayButton = () => {
        setIsHoveringSmallPlayButton(false);
    };

    const defaultContent = (
        <>
            <div className="popular-movie-play-icon">
                <PlayCircleIcon />
            </div>
            <p className="popular-movie-title white">{title}</p>
        </>
    );

    const hoveredContent = (
        <>
            <div className="popular-movie-hovered-title-container">
                <button
                    className="popular-movie-play-small-icon"
                    onMouseEnter={handleOnHoverSmallPlayButton}
                    onMouseLeave={handleOnStopHoverSmallPlayButton}>
                    {isHoveringSmallPlayButton ? (
                        <PlayCircleSmallHighlightedIcon />
                    ) : (
                        <PlayCircleSmallIcon />
                    )}
                </button>
                <p className="popular-movie-title-hovered white">{title}</p>
            </div>

            <div className="popular-movie-hovered-info-container">
                <div className="popular-movie-hovered-score-container">
                    <div className="popular-movie-star-icon">
                        <StarIcon />
                    </div>
                    <p className="popular-movie-hovered-score white">
                        {voteAverage}
                    </p>
                </div>

                <p className="popular-movie-release-date white">
                    {releaseDate}
                </p>
            </div>
        </>
    );
    return (
        <div
            className="popular-movie-card"
            style={backgroundImage}
            onMouseEnter={handleOnHover}
            onMouseLeave={handleOnStopHover}>
            <div className="popular-movie-gradient-mask" />

            {isHovering ? hoveredContent : hoveredContent}
        </div>
    );
};
