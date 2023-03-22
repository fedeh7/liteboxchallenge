import { LiteflixTitle } from '../../Components/LiteflixTitle';
import { BellIcon } from '../../Icons/Bell';
import { MenuIcon } from '../../Icons/Menu';
import { ProfileIcon } from '../../Icons/Profile';
import { AddMovieModal } from '../AddMovieModal';
import './Navbar.scss';

export const Navbar = ({ isMobile }: { isMobile: boolean }) => {
    let content = (
        <nav className="navbar-container centered">
            <div className="navbar-title-container">
                <LiteflixTitle />
            </div>
            <AddMovieModal isMobile={isMobile} />

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
                <AddMovieModal isMobile={isMobile} />
                <div className="navbar-title-container">
                    <LiteflixTitle />
                </div>
                <button className="profile-button">
                    <ProfileIcon />
                </button>
            </nav>
        );
    }
    return content;
};
