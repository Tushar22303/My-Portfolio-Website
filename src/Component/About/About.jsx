import React from 'react'
import './About.css'
import photo_2 from '../../assest/Images/photo2.JPG'

const About = () => {
    return (
        <>
            <section className="about container section" id="about">
                <h2 className="section__title">About Me</h2>

                <div className="about__container grid">
                    <img src={photo_2} alt="avatar-2" className='about__img' />

                    <div className="about__data grid">
                        <div className="about__info">
                            <p className="about__description">I am Tushar Prajapati, web developer from Ahmedabad, India. I have rich experience in website design and building and customization, also I am good at HTML, CSS, JS, Bootstrap and React JS. Also known about the UI Design in Software Like Figma. Done the Certification course from <a href="https://sutraanalytics.com/" target='_blank'>Sutra Analytics PVT LTd.</a></p>
                            <a href="#home" className='btn' download="#">Download CV</a>
                        </div>


                        <div className="about__skills grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>Frontend Development</h3>
                                    <span className='skills__number'>60%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage  development'></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>UI Designing</h3>
                                    <span className='skills__number'>70%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage ui__design'></span>
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className='skills__name'>Web Designing</h3>
                                    <span className='skills__number'>70%</span>
                                </div>

                                <div className="skills__bars">
                                    <span className='skills__percentage web__designing'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About