import { Dispatch, SetStateAction, useState } from 'react';
import { MY_MOVIE_IMAGE_LOCALSTORAGE_KEY } from '../../Constants';
import { ClipIcon } from '../../Icons/Clip';
import './UploadImageComponent.scss';

export const UploadImageComponent = ({
    setImageUploadSuccessful,
    isMobile,
}: {
    setImageUploadSuccessful: Dispatch<SetStateAction<boolean>>;
    isMobile: boolean;
}) => {
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [currentFile, setCurrentFile] = useState<File>();
    const [error, setError] = useState(false);
    const [dragActive, setDragActive] = useState(false);

    const reader = new FileReader();

    reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
            const imagepath = reader.result
                .replace('data:', '')
                .replace(/^.+,/, '');

            try {
                localStorage.setItem(
                    MY_MOVIE_IMAGE_LOCALSTORAGE_KEY,
                    imagepath,
                );
                setImageUploadSuccessful(true);
            } catch (err) {
                handleOnError();
            }
        }
    };
    reader.onloadstart = () => {
        setUploading(true);
    };
    reader.onerror = () => {
        handleOnError();
    };
    reader.onprogress = (data) => {
        if (data.lengthComputable) {
            const progressPercentage = Math.round(
                (data.loaded / data.total) * 100,
            );

            setUploadProgress(progressPercentage);
        }
    };
    const cancelUpload = () => {
        reader.abort();
        setUploading(false);
        setUploadProgress(0);
    };
    const retryUpload = () => {
        if (currentFile) {
            reader.readAsDataURL(currentFile);
        }
    };
    const handleOnError = () => {
        setUploadProgress(100);
        setError(true);
    };
    const handleImageUpload = (event: any) => {
        setError(false);
        const file = event.target.files[0];
        setCurrentFile(file);

        reader.readAsDataURL(file);
    };

    const handleDrag = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.type === 'dragenter' || event.type === 'dragover') {
            setDragActive(true);
        } else if (event.type === 'dragleave') {
            setDragActive(false);
        }
    };
    const handleDrop = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files && event.dataTransfer.files[0]) {
            setError(false);
            const file = event.dataTransfer.files[0];
            setCurrentFile(file);

            reader.readAsDataURL(file);
        }
    };
    return (
        <div
            className={`modal-upload-image-container ${
                uploading && 'no-borders'
            } ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}>
            {/* <div className="modal-upload-image-drag-and-drop"> */}
            <label
                htmlFor="file"
                className="label-upload-image white "
                style={{ display: uploading ? 'none' : 'block' }}>
                <ClipIcon />{' '}
                <span className={`${isMobile ? '' : 'bold'}`}>
                    Agrega un archivo
                </span>
                {!isMobile && <span> o arrastralo y sueltalo aqui</span>}
                <input
                    type="file"
                    name="file"
                    id="file"
                    className="modal-upload-image-input"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </label>

            <div
                className="modal-upload-progress"
                style={{ display: !uploading ? 'none' : 'flex' }}>
                <ProgressMessage
                    error={error}
                    uploadProgress={uploadProgress}
                />
                <div className="modal-upload-progress-bar-container">
                    <div
                        className="modal-upload-progress-bar-highlight"
                        style={{
                            width: `${uploadProgress}%`,
                            backgroundColor: error ? 'red' : 'aquamarine',
                        }}
                    />
                    <div className="modal-upload-progress-bar-gray-line" />
                </div>
                <div className="modal-upload-button-container">
                    <button
                        className="modal-upload-progress-cancel white bold"
                        type="button"
                        style={{
                            display:
                                error || uploadProgress === 100
                                    ? 'none'
                                    : 'block',
                        }}
                        onClick={cancelUpload}>
                        Cancelar
                    </button>
                    <button
                        className="modal-upload-progress-retry white bold"
                        style={{
                            display: error ? 'block' : 'none',
                        }}
                        onClick={retryUpload}>
                        Reintentar
                    </button>
                    <p
                        className="modal-upload-progress-done aquamarine"
                        style={{
                            display:
                                !error && uploadProgress === 100
                                    ? 'block'
                                    : 'none',
                        }}>
                        ¡Listo!
                    </p>
                </div>
            </div>
        </div>
    );
};

const ProgressMessage = ({
    error,
    uploadProgress,
}: {
    error: boolean;
    uploadProgress: number;
}) => {
    const uploadingMessage = (
        <p className="modal-upload-progress-message white">
            Cargando <span className="white bold">{uploadProgress}%</span>
        </p>
    );

    const errorMessage = (
        <p className="modal-upload-progress-message white">
            <span className="white bold">¡Error!</span> No se pudo cargar la
            pelicula
        </p>
    );
    const doneMessage = (
        <p className="modal-upload-progress-message white bold">100% cargado</p>
    );

    if (error) {
        return errorMessage;
    } else if (uploadProgress === 100) {
        return doneMessage;
    } else {
        return uploadingMessage;
    }
};
