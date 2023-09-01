import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
function SocialLinks() {
    return (

        <div className="social-links">
            <a className='githublink' href="https://github.com/FreshMozzarella" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faGithub} />
            </a>
            <a  className='linkedinlink' href="www.linkedin.com/in/the-alec-taylor" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
            </a>
            {/* Add more links here */}
        </div>
    );
}

export default SocialLinks;