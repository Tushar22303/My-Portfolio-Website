import React from 'react'
import './Home.css'
import photo from '../../assest/Images/photo.JPG'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
    return (
        <>
            <section className="home container" id='home'>
                <div className="intro">
                    <img src={photo} alt="avatar-1" className='home__img' />
                    <h1 className='home__name'>Tushar Prajapati</h1>
                    <span className='home__education'>UI Designer, Web Designer and Frontend Developer</span>
                    <HeaderSocials />

                    <a href="#contact" className="btn">Hire Me</a>

                    <ScrollDown />
                </div>
                <Shapes />
            </section>
        </>
    )
}

export default Home