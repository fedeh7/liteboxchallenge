import { useEffect, useState } from 'react';
import { FeaturedMovie } from './Containers/FeaturedMovie';
import { Navbar } from './Containers/Navbar';
import { PopularMovies } from './Containers/PopularMovies';
import { getMovies, IMovieData } from './utils/apis';
import './App.scss';
import { useMobileSize } from './utils/hooks';

export const App = () => {
    const [featuredMovie, setFeaturedMovie] = useState<IMovieData>();
    const [popularMovies, setPopularMovies] = useState<IMovieData[]>();
    const isMobile = useMobileSize(1020);

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
              // backgroundSize: 'cover',
              // backgroundRepeat: 'no-repeat',
          }
        : undefined;

    let content = (
        <div className="homepage-main-content centered">
            <FeaturedMovie isMobile={isMobile} title={featuredMovie?.title} />
            <PopularMovies isMobile={isMobile} popularMovies={popularMovies} />
        </div>
    );

    // if (isMobile) {
    //     content = (
    //         <>
    //             <FeaturedMovie
    //                 isMobile={isMobile}
    //                 title={featuredMovie?.title}
    //             />
    //             <PopularMovies
    //                 isMobile={isMobile}
    //                 popularMovies={popularMovies}
    //             />
    //         </>
    //     );
    // }
    return (
        <main className="homepage-container">
            <div className="background-image" style={backgroundImage}>
                <div className="background-mask" />
            </div>
            {/* <div className="homepage-container-background-mask"> */}
            <Navbar isMobile={isMobile} />
            {content}
            {/* </div> */}
        </main>
    );
};
