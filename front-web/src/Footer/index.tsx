
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as linkedinIcon } from './linkedin.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';
import './styles.css';


function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <YoutubeIcon />
                </a>
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <InstagramIcon />
                </a>
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>

    )
}

export default Footer;