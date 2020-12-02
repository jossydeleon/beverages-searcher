import React from 'react';
import './footer.css';

/**
 * Component footer which display information and copyrigths about Developer
 */
const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="social-footer">
      <div className="social-footer-left">
        <a href="https://josymardeleon.com" target="_blank" rel="noopener noreferrer"> {currentYear} &copy; Josymar De Leon - Software Developer</a>
      </div>
      <div className="social-footer-icons">
        <ul className="menu simple">
        <li>
            <a href="https://github.com/jossydeleon" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jdl_developer" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
