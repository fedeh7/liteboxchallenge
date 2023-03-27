import { useEffect, useState } from 'react';
import { PopularMovieCard } from '../../Components/PopularMovie';
import {
    MY_MOVIE_IMAGE_LOCALSTORAGE_KEY,
    MY_MOVIE_TITLE_LOCALSTORAGE_KEY,
} from '../../Constants';

import './MyMovies.scss';

export const MyMovies = () => {
    const [myMovieTitle, setMyMovieTitle] = useState(
        'No hay ninguna pelicula todavia',
    );
    const [myMovieBackgroundImagePath, setMyMovieBackgroundImagePath] =
        useState('');

    useEffect(() => {
        try {
            const movieTitle = localStorage.getItem(
                MY_MOVIE_TITLE_LOCALSTORAGE_KEY,
            );
            const movieImagePath = localStorage.getItem(
                MY_MOVIE_IMAGE_LOCALSTORAGE_KEY,
            );
            if (movieTitle && typeof movieTitle === 'string') {
                setMyMovieTitle(movieTitle);
            }
            if (movieImagePath && typeof movieImagePath === 'string') {
                const formattedMovieImagePath = `data:image/png;base64,${movieImagePath}`;
                setMyMovieBackgroundImagePath(formattedMovieImagePath);
            }
        } catch (err) {}
    }, []);

    return (
        <div className="my-movies-list">
            <div className="my-movie-card-container">
                <PopularMovieCard
                    title={myMovieTitle}
                    voteAverage={0}
                    backgroundImagePath={myMovieBackgroundImagePath}
                    releaseDate="2023"
                />
            </div>
        </div>
    );
};
