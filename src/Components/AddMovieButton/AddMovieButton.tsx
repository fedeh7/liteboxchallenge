import './AddMovieButton.scss';
import { PlusIcon } from '../../Icons/Plus';
import { PlusCircleIcon } from '../../Icons/PlusCircle';

export const AddMovieButton = ({
    isMobile,
    openModal,
}: {
    isMobile: boolean;
    openModal: () => void;
}) => {
    let modalButton = (
        <>
            <button className="add-movie-button-container" onClick={openModal}>
                <PlusIcon />
                <span className="add-movie-button-text bold">
                    AGREGAR PELICULA
                </span>
            </button>
        </>
    );

    if (isMobile) {
        modalButton = (
            <>
                <button
                    className="add-movie-button-container"
                    onClick={openModal}>
                    <PlusCircleIcon />
                </button>
            </>
        );
    }
    return modalButton;
};
