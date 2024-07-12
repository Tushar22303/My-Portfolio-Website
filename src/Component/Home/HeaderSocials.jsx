import React from 'react'
import { FaGithub, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <>
            <div className="home__socials">
                <a href="https://www.instagram.com/" className='home__social-link' target='_blank'>
                    <FaInstagramSquare />
                </a>
                <a href="https://www.twitter.com/" className='home__social-link' target='_blank'>
                    <FaTwitter />
                </a>
                <a href="https://github.com/Tushar22303" className='home__social-link' target='_blank'>
                    <FaGithub />
                </a>
            </div>
        </>
    )
}

export default HeaderSocials