import React from 'react'
import './About.css'
import about_image from '../../assest/Images/avatar-2.svg'
import AboutBox from './AboutBox'

const About = () => {
    return (
        <>
            <section className="about container section" id="about">
                <h2 className="section__title">About Me</h2>

                <div className="about__container grid">
                    <img src={about_image} alt="photo" className='about__img' />

                    <div className="about__data grid">
                        <div className="about__info">
                            <p className="about__description">I am Tushar Prajapati, web developer from Ahmedabad, India. I have rich experience in website design and building and customization, also I am good at HTML, CSS and JS.</p>
                            <a href="" className='btn'>Download CV</a>
                        </div>


                        <div className="about__skills grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>Development</h3>
                                    <span className='skills__number'>50%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage  development'></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>UI/UX Designing</h3>
                                    <span className='skills__number'>80%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage ui__design'></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>Web Designing</h3>
                                    <span className='skills__number'>80%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage web__designing'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <AboutBox />
            </section>
        </>
    )
}

export default About