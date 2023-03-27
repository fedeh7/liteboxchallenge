import { useEffect, useState } from 'react';
import { FeaturedMovie } from './Containers/FeaturedMovie';
import { Navbar } from './Containers/Navbar';

import { getMovies, IMovieData } from './utils/apis';
import './App.scss';
import { useMobileSize } from './utils/hooks';
import { Modal } from './Containers/Modal';
import { SideContent } from './Containers/SideContent';

export const App = () => {
    const [featuredMovie, setFeaturedMovie] = useState<IMovieData>();
    const [popularMovies, setPopularMovies] = useState<IMovieData[]>();
    const [modalShown, setModalShown] = useState(false);
    const isMobile = useMobileSize(1020);

    const openModal = () => {
        setModalShown(true);
    };
    const closeModal = () => {
        setModalShown(false);
    };

    useEffect(() => {
        const getFeaturedMovieData = async () => {
            const moviesData = await getMovies();
            setFeaturedMovie(moviesData.shift());
            setPopularMovies(moviesData);
        };

        getFeaturedMovieData();
    }, []);

    const backgroundImage = featuredMovie?.backgroundImagePath
        ? {
              backgroundImage: isMobile
                  ? `url('https://image.tmdb.org/t/p/original${featuredMovie.posterImagePath}')`
                  : `url('https://image.tmdb.org/t/p/original${featuredMovie.backgroundImagePath}')`,
          }
        : undefined;

    return (
        <main className="homepage-container">
            <div className="background-image" style={backgroundImage}>
                <div className="background-mask" />
            </div>

            <Navbar
                isMobile={isMobile}
                openModal={openModal}
                modalShown={modalShown}
            />
            <div className="homepage-main-content centered">
                <FeaturedMovie
                    isMobile={isMobile}
                    title={featuredMovie?.title}
                />
                <SideContent popularMovies={popularMovies} />
            </div>
            {modalShown && (
                <Modal closeModal={closeModal} isMobile={isMobile} />
            )}
        </main>
    );
};
