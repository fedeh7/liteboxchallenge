import { BellIcon } from '../../Icons/Bell';
import { MenuIcon } from '../../Icons/Menu';
import { ProfileIcon } from '../../Icons/Profile';
import { AddMovieModal } from '../AddMovieModal';
import './Navbar.scss';
export const Navbar = ({
    mobileBreakpoints,
}: {
    mobileBreakpoints: { isSmall: boolean; isMedium: boolean };
}) => {
    let content = (
        <nav className="navbar-container centered">
            <div className="navbar-title-container aquamarine">
                <h3 className="navbar-title">
                    <span className="bold">LITE</span>FLIX
                </h3>
            </div>
            <AddMovieModal mobileBreakpoints={mobileBreakpoints} />

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
    if (mobileBreakpoints.isSmall) {
        content = (
            <nav className="navbar-container">
                <AddMovieModal mobileBreakpoints={mobileBreakpoints} />
                <div className="navbar-title-container">
                    <h3 className="navbar-title">
                        <span className="navbar-title-bold">LITE</span>FLIX
                    </h3>
                </div>
                <button className="profile-button">
                    <ProfileIcon />
                </button>
            </nav>
        );
    }
    return content;
};
