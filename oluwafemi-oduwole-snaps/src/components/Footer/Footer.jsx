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
        <p className="footer__link">For photographers</p>
        <p className="footer__link">Hire talent</p>
        <p className="footer__link">Inspiration</p>
      </div>

      <div className="footer__menu">
        <p className="footer__link">About</p>
        <p className="footer__link">Careers</p>
        <p className="footer__link">Support</p>
      </div>

      <div className="footer__social">
        <img className="facebook" src={facebook} alt="facebook logo" />
        <img className="twitter" src={twitter} alt="twitter/x logo" />
        <img className="instagram" src={instagram} alt="instagram logo" />
        <img className="pinterest" src={pinterest} alt="pinterest logo" />
      </div>

      <div className="footer__legal">
        <p>© 2024 Snaps </p>
        <div className="footer__terms">
          <p>.</p>
          <p>Terms</p>
          <p> Privacy</p>
          <p>Cookies</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
