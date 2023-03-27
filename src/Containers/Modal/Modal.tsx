import { useState } from 'react';
import { LiteflixTitle } from '../../Components/LiteflixTitle';
import { UploadImageComponent } from '../../Components/UploadImageComponent';
import { MY_MOVIE_TITLE_LOCALSTORAGE_KEY } from '../../Constants';
import { CloseIcon } from '../../Icons/Close';
import './Modal.scss';

export const Modal = ({
    closeModal,
    isMobile,
}: {
    closeModal: () => void;
    isMobile: boolean;
}) => {
    const [imageUploadSuccessful, setImageUploadSuccessful] = useState(false);
    const [movieTitle, setMovieTitle] = useState('');
    const [addMovieSuccess, setAddMovieSuccess] = useState(false);

    const handleOnSubmit = (event: any) => {
        event.preventDefault();

        try {
            localStorage.setItem(MY_MOVIE_TITLE_LOCALSTORAGE_KEY, movieTitle);
            setAddMovieSuccess(true);
        } catch (err) {}
    };

    const handleMovieTitleInput = (event: any) => {
        setMovieTitle(event.target.value);
    };
    return (
        <div className="modal-background">
            <div className="modal-content-container">
                <button className="modal-close-button" onClick={closeModal}>
                    <CloseIcon />
                </button>

                <form
                    action=""
                    className="modal-form"
                    style={{ display: addMovieSuccess ? 'none' : 'flex' }}
                    onSubmit={handleOnSubmit}>
                    <h3 className="modal-form-title aquamarine bold">
                        Agregar película
                    </h3>
                    <div className="modal-form-upload-image-component-container">
                        <UploadImageComponent
                            setImageUploadSuccessful={setImageUploadSuccessful}
                            isMobile={isMobile}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="TITULO"
                        className="modal-movie-title-input white"
                        maxLength={40}
                        onChange={handleMovieTitleInput}
                        required={true}
                    />
                    <button
                        type="submit"
                        className="modal-upload-movie-button"
                        disabled={!(movieTitle && imageUploadSuccessful)}>
                        SUBIR PELÍCULA
                    </button>
                    <button
                        type="button"
                        className="modal-exit-button white"
                        onClick={closeModal}>
                        Salir
                    </button>
                </form>
                <div
                    className="modal-upload-complete-content"
                    style={{
                        display: addMovieSuccess ? 'flex' : 'none',
                    }}>
                    <LiteflixTitle />
                    <p className="modal-upload-complete-congratulations white bold">
                        ¡Felicitaciones!
                    </p>
                    <p className="modal-upload-complete-message white">
                        {localStorage.getItem('movie-name')} fue correctamente
                        subida.
                    </p>
                    <button
                        className="modal-return-home-button"
                        onClick={closeModal}>
                        Ir a home
                    </button>
                </div>
            </div>
        </div>
    );
};
