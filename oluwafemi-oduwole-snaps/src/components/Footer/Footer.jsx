import React from "react";
import "./Footer.scss";

import facebook from "../../assets/images/Facebook.svg";
import instagram from "../../assets/images/Instagram.svg";
import twitter from "../../assets/images/X_twitter.svg";
import pinterest from "../../assets/images/Pinterest.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="brand"> Snaps </div>
      <div className="footer__menu">
        <a href="/photographers" className="footer__link">
          For photographers
        </a>
        <a href="/hire" className="footer__link">
          Hire talent
        </a>
        <a href="/inspiration" className="footer__link">
          Inspiration
        </a>
      </div>

      <div className="footer__menu">
        <a href="/about" className="footer__link">
          About
        </a>
        <a href="/careers" className="footer__link">
          Careers
        </a>
        <a href="/support" className="footer__link">
          Support
        </a>
      </div>

      <div className="footer__social">
        <img className="facebook" src={facebook} alt="facebook logo" />
        <img className="twitter" src={twitter} alt="twitter/x logo" />
        <img className="instagram" src={instagram} alt="instagram logo" />
        <img className="pinterest" src={pinterest} alt="pinterest logo" />
      </div>

      <div className="footer__legal">
        <p>© 2024 Snaps</p>
        <div className="footer__terms">
          <p>·</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
