export const getMovies = async (): Promise<IMovieData[] | any> => {
    try {
        const apiResponse = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20',
        );
        const responseData = await apiResponse.json();

        const movies = formatMoviesData(responseData.results);

        return movies;
    } catch (error) {
        return error;
    }
};

export interface IMovieData {
    backgroundImagePath: string;
    posterImagePath: string;
    id: number;
    title: string;
    voteAverage: number;
    releaseDate: string;
}

const formatMoviesData = (movieList: object[]) => {
    let movies = [];

    for (let i = 0; i < 5; i++) {
        const movie: any = movieList[i];
        const formattedMovie: IMovieData = {
            backgroundImagePath: movie.backdrop_path,
            posterImagePath: movie.poster_path,
            id: movie.id,
            title: movie.title,
            voteAverage: movie.vote_average,
            releaseDate: movie.release_date.slice(0, 4),
        };

        movies.push(formattedMovie);
    }
    return movies;
};
