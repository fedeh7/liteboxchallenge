import { Dropdown } from '../../Components/Dropdown';
import { PopularMovie } from '../../Components/PopularMovie';
import { IMovieData } from '../../utils/apis';
import './PopularMovies.scss';

export const PopularMovies = ({
    isMobile,
    popularMovies,
}: {
    isMobile: boolean;
    popularMovies: IMovieData[] | undefined;
}) => {
    return (
        <div className="popular-movies-container">
            <Dropdown />

            <div className="popular-movies-list">
                {popularMovies &&
                    popularMovies.map((movie, index) => {
                        return (
                            <div
                                className="popular-movie-card-container"
                                key={index}>
                                <PopularMovie
                                    title={movie.title}
                                    voteAverage={movie.voteAverage}
                                    backgroundImagePath={
                                        movie.backgroundImagePath
                                    }
                                    releaseDate={movie.releaseDate}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
