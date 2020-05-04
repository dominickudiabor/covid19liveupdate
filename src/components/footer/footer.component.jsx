import React from 'react';

import './footer.styles.scss'


const date = new Date().getFullYear();
const  Footer = () => (
    <div className = 'footer'>
{`©${date} Dominic Travis Kudiabor`}
    </div>
)

export default Footer;