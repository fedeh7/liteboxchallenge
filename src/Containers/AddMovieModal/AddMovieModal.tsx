import './AddMovieModal.scss';
import { PlusIcon } from '../../Icons/Plus';
import { PlusCircleIcon } from '../../Icons/PlusCircle';

export const AddMovieModal = ({ isMobile }: { isMobile: boolean }) => {
    // const Modal = <div className='modal-container'></div>;
    let content = (
        <>
            <button className="add-movie-button-container">
                <PlusIcon />
                <span className="add-movie-button-text bold">
                    AGREGAR PELICULA
                </span>
            </button>
            {/* {Modal} */}
        </>
    );

    if (isMobile) {
        content = (
            <button className="add-movie-button-container">
                <PlusCircleIcon />
            </button>
        );
    }
    return content;
};
