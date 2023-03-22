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
    const isMobile = useMobileSize(600);

    const mobileBreakpoints = {
        isSmall: useMobileSize(600),
        isMedium: useMobileSize(800),
    };

    useEffect(() => {
        const getFeaturedMovieData = async () => {
            const moviesData = await getMovies();
            console.log(moviesData);
            setFeaturedMovie(moviesData.shift());
            setPopularMovies(moviesData);
        };

        getFeaturedMovieData();
    }, []);

    const backgroundImage = featuredMovie?.backgroundImagePath
        ? {
              backgroundImage: `rgba(0,0,0,0.1), url('https://image.tmdb.org/t/p/original${featuredMovie.backgroundImagePath}')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
          }
        : undefined;
    return (
        <main className="homepage-container" style={backgroundImage}>
            <div className="homepage-container-background-mask">
                <Navbar mobileBreakpoints={mobileBreakpoints} />
                <div className="homepage-main-content centered">
                    <FeaturedMovie
                        isMobile={isMobile}
                        title={featuredMovie?.title}
                    />
                    <PopularMovies
                        isMobile={isMobile}
                        popularMovies={popularMovies}
                    />
                </div>
            </div>
        </main>
    );
};
