import { LiteflixTitle } from '../../Components/LiteflixTitle';
import { BellIcon } from '../../Icons/Bell';
import { MenuIcon } from '../../Icons/Menu';
import { ProfileIcon } from '../../Icons/Profile';
import { AddMovieButton } from '../../Components/AddMovieButton';
import './Navbar.scss';

export const Navbar = ({
    isMobile,
    openModal,
    modalShown,
}: {
    isMobile: boolean;
    modalShown: boolean;
    openModal: () => void;
}) => {
    let content = (
        <nav className="navbar-container centered">
            <div className="navbar-title-container">
                <LiteflixTitle />
            </div>
            <AddMovieButton isMobile={isMobile} openModal={openModal} />

            <button className="menu-button">
                <MenuIcon />
            </button>
            <button className="notification-button">
                <BellIcon />
            </button>
            <button className="profile-button">
                <ProfileIcon />
            </button>
        </nav>
    );
    if (isMobile) {
        content = (
            <nav className="navbar-container centered">
                {!modalShown && (
                    <AddMovieButton isMobile={isMobile} openModal={openModal} />
                )}

                <LiteflixTitle />

                <button className="profile-button">
                    <ProfileIcon />
                </button>
            </nav>
        );
    }
    return content;
};
