import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">G-316, First floor Sec-63 Noida, Uttar Pradesh, India. Pin: 201301</p>
        <p className="p__opensans">91-8802591895</p>
        <p className="p__opensans">+91-9971443238</p>
               
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday to Saturday:</p>
        <p className="p__opensans">10:00 am - 08:00 pm</p>
        <p className="p__opensans">sales@laxmideewanfragrances.com</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2015 Laxmi Deewan Fragnances. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;