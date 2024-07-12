import React from 'react'
import './Service.css'
import Image1 from '../../assest/Images/UI.png'
import Image2 from '../../assest/Images/Frontend.png'
import Image3 from '../../assest/Images/Web.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI design",
        description:
            "User Interface (UI) designing involves creating layouts, selecting colors, defining typography, and ensuring that the overall design aligns with the brand identity while providing an intuitive user experience.",
    },
    {
        id: 2,
        image: Image2,
        title: "Frontend Development",
        description:
            "Frontend development involves creating the user-facing part of a website or web application, focusing on layout, design, and interactivity. It encompasses the use of HTML for structure, CSS for styling, and JavaScript for dynamic functionality. ",
    },
    {
        id: 3,
        image: Image3,
        title: "Web Designing",
        description:
            "Web designing is the process of creating the visual and interactive aspects of websites. It involves planning, conceptualizing, and arranging content and elements to deliver an engaging and user-friendly experience.",
    },
];

const Service = () => {
    return (
        <>
            <section className="section container services" id='services'>
                <h2 className="section__title">Services</h2>

                <div className="services__container grid">
                    {
                        data.map(({ id, image, title, description }) => {
                            return (
                                <div className='services__card' key={id}>
                                    <img src={image} alt="" className='services__images' />

                                    <h3 className="services__title">{title}</h3>
                                    <p className='services__description'>{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Service