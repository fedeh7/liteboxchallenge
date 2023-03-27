import { PlayCircleIcon } from '../../Icons/PlayCircle';

import { PlayCircleSmallHighlightedIcon } from '../../Icons/PlayCircleSmallHighlihted';
import { StarIcon } from '../../Icons/Star';
import './PopularMovieCard.scss';

export const PopularMovieCard = ({
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
    const backgroundImage = {
        backgroundImage: `url('${backgroundImagePath}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '4px',
    };

    const popularMovieTitle = (
        <p className="popular-movie-title white">{title}</p>
    );

    const popularMovieButton = (
        <button className="popular-movie-play-icon">
            <PlayCircleIcon />
            <PlayCircleSmallHighlightedIcon />
        </button>
    );
    const popularMovieButtonAndTitle = (
        <div className="popular-movie-button-and-title">
            {popularMovieButton}
            {popularMovieTitle}
        </div>
    );

    const popularMovieInfo = (
        <div className="popular-movie-hovered-info-container">
            <div className="popular-movie-hovered-score-container">
                <div className="popular-movie-star-icon">
                    <StarIcon />
                </div>
                <p className="popular-movie-hovered-score white">
                    {voteAverage}
                </p>
            </div>

            <p className="popular-movie-release-date white">{releaseDate}</p>
        </div>
    );
    return (
        <div className="popular-movie-card" style={backgroundImage}>
            <div className="popular-movie-gradient-mask" />
            {popularMovieButtonAndTitle}
            {popularMovieInfo}
        </div>
    );
};
