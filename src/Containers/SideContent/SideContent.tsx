import { useState } from 'react';
import { Dropdown } from '../../Components/Dropdown';
import { PopularMovieCard } from '../../Components/PopularMovie';

import { IMovieData } from '../../utils/apis';
import { MyMovies } from '../MyMovies';
import { PopularMovies } from '../PopularMovies';
import './SideContent.scss';

const options = ['Populares', 'Mis peliculas'];
export const SideContent = ({
    popularMovies,
}: {
    popularMovies: IMovieData[] | undefined;
}) => {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    let content = null;

    if (selectedOption === 'Populares') {
        content = <PopularMovies popularMovies={popularMovies} />;
    } else if (selectedOption === 'Mis peliculas') {
        content = <MyMovies />;
    }
    return (
        <div className="side-content-container">
            <Dropdown
                options={options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />

            {content}
        </div>
    );
};
