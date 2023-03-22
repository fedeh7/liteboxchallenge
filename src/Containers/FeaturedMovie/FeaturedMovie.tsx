import { MyListButton } from '../../Components/MyListButton';
import { PlayButton } from '../../Components/PlayButton';
import './FeaturedMovie.scss';

export const FeaturedMovie = ({
    isMobile,
    title,
}: {
    isMobile: boolean;
    title: string | undefined;
}) => {
    return (
        <div className="featured-movie-container">
            <p className="white featured-movie-subtitle">
                ORIGINAL DE <span className="bold">LITEFLIX</span>
            </p>
            <h1 className="featured-movie-title aquamarine bold">{title}</h1>
            <div className="featured-movie-buttons">
                <div className="featured-movie-primary-button">
                    <PlayButton />
                </div>
                <div className="featured-movie-secondary-button">
                    <MyListButton />
                </div>
            </div>
        </div>
    );
};
