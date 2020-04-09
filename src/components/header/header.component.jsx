import React from "react";

import image from '../../images/image.png'


import './header.styles.scss'
const Header = () => (
  <div className="header">
    <img src={image} alt = 'COVID-19'></img>
  </div>
);

export default Header;
