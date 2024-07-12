import React from 'react'
import './Blog.css'
import Image1 from '../../assest/Images/blog-1.svg'
import Image2 from '../../assest/Images/blog-2.svg'
import Image3 from '../../assest/Images/blog-3.svg'
import Image4 from '../../assest/Images/amazon clone.jpg'
import Image5 from '../../assest/Images/3d-dice-studio.jpg'

const Blog = () => {
    return (
        <>
            <section className="blog container section" id="projects">
                <h2 className="section__title">
                    Projects
                </h2>

                <div className="blog__container grid">
                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image1} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">Food Application in React JS "Grillella"</h3>
                            <div className="blog__meta">
                                <span>13 July, 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image2} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">TO DO List using Javascript and React js</h3>
                            <div className="blog__meta">
                                <span>27 June, 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image3} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">Multiple WebPages using HTML,CSS and Boostrtap</h3>
                            <div className="blog__meta">
                                <span>Till 22 May, 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image4} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">Amazon Clone using HTML and CSS</h3>
                            <div className="blog__meta">
                                <span>25 June, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image3} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">WildLife Project using React js</h3>
                            <div className="blog__meta">
                                <span>18 May, 2024</span>
                            </div>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__thumb">
                            <a href="#home">
                                <img src={Image5} alt="" className="blog__img" />
                            </a>
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">Learning project like Tic Tac Toe Game in JS</h3>
                            <div className="blog__meta">
                                <span>5 May, 2024</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog