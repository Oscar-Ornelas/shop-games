import React from 'react';
import apiLogo from '../imgs/rawgapilogo.PNG';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-nav">
          <h1 className="logo footer-logo">ShopGames</h1>
          <div className="footer-nav-content">
            <ul className="footer-nav-list">
              <li className="footer-nav-item" onClick={() => window.scrollTo(0, 0)}>Home</li>
            </ul>
          </div>
        </div>

        <div className="footer-info">
          <p className="footer-info-item">Portfolio:
            <a className="footer-info-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://oscar-ornelas.github.io/portfolio-app"
              >
              oscar-ornelas.github.io/portfolio-app
            </a>
          </p>
          <p className="footer-info-item">Phone: <span>512-831-8142</span></p>
        </div>
      </div>

      <div className="api-info">
        <div className="api-logo-container">
          <p className="api-info-subtitle">Data provided by:</p>
          <img className="api-logo" src={apiLogo} alt="Rawg api logo"/>
        </div>

        <div className="api-contact">
          <ul className="api-contact-list">
            <li className="api-contact-item">
              <a className="api-contact-link" href="https://www.facebook.com/rawgtheworld/"><i className="fab fa-facebook-square"></i></a>
            </li>
            <li className="api-contact-item">
              <a className="api-contact-link" href="https://twitter.com/rawgtheworld"><i className="fab fa-twitter"></i></a>
            </li>
            <li className="api-contact-item">
              <a className="api-contact-link" href="https://api.rawg.io/docs/"><i className="fas fa-code"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
