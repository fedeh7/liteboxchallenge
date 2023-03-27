import { PopularMovieCard } from '../../Components/PopularMovie';

import { IMovieData } from '../../utils/apis';
import './PopularMovies.scss';

export const PopularMovies = ({
    popularMovies,
}: {
    popularMovies: IMovieData[] | undefined;
}) => {
    return (
        <div className="popular-movies-list">
            {popularMovies &&
                popularMovies.map((movie, index) => {
                    const formattedBackgroundImagePath = `https://image.tmdb.org/t/p/w300${movie.backgroundImagePath}`;
                    return (
                        <div
                            className="popular-movie-card-container"
                            key={index}>
                            <PopularMovieCard
                                title={movie.title}
                                voteAverage={movie.voteAverage}
                                backgroundImagePath={
                                    formattedBackgroundImagePath
                                }
                                releaseDate={movie.releaseDate}
                            />
                        </div>
                    );
                })}
        </div>
    );
};
