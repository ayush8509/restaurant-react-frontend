import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">G-316, First floor Sec-63 Noida, Uttar Pradesh, India. Pin: 201301</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Sat: 10:00 am - 08:00 pm</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}>Phone</p>
        <p className="p__opensans">91-8802591895</p>
        <p className="p__opensans">+91-9971443238</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '1rem 0' }}>Email</p>

        <p className="p__opensans">sales@laxmideewanfragrances.com</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;