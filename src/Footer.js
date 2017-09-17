import React from 'react';
import './css/Footer.css';
import f from './svg/f.svg';
import g from './svg/g+.svg';
import vk from './svg/vk.svg';
import lIn from './svg/in.svg';

const Footer = () => (
    <div className="footer-wrapp"> 
        <footer>
            <div className="socials">
                <a className="linkedin" target="_blanc" href="https://www.linkedin.com/in/shkvo/">
                    <img src={lIn} alt="linkedin" />
                </a>
                <a className="facebook" target="_blanc" href="https://www.facebook.com/dima.shkvo">
                    <img src={f} alt="facebook" />
                </a>
                <a className="vk" target="_blanc" href="https://vk.com/shkvoo">
                    <img src={vk} alt="vk" />
                </a>
                <a className="google" target="_blanc" href="https://plus.google.com/u/1/101098979884832608778">
                    <img src={g} alt="google+" />
                </a>
            </div>
        </footer>
    </div>
    
)

export default Footer;