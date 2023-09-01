import React from "react";
import FooterStyle from "../styles/FooterStyle.css";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div class="pg-footer">
      <footer class="footer">
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div className="footer-content-row">
            <div class="footer-content-column">
              <div class="footer-logo">
                <a class="footer-logo-link" href="#">
                  <img src={Logo} alt="Mavericks Logo" />
                </a>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-call-to-action">
                <a
                  class="footer-call-to-action-button"
                  href="#"
                  target="_self"
                >
                  {" "}
                  Contáctanos{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="https://github.com/pablogonzalezdelaparra/mavericks-frontend" target="_blank">
                {" "}
                © 2023 | Mavericks{" "} 
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
