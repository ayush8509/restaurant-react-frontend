import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="LOVE AFFECTION AND PERFECTION WITH LAXMI DEEWAN FRAGRANCES" />
      <h1 className="app__header-h1">The Hub Of Best Fragnances</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>We Love Adoration, We Crave Affection And We Dream Of Perfection. Here comes the wide range of product contrived with the finest concoction of love, Devotion care and endearment which leads to the perfection and excellence. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;