import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <section className="container contact section" id='contact'>
                <h2 className="section__title">Get In Touch</h2>

                <div className="contact__container grid">
                    <div className="contact__info">
                        <h3 className="contact__title">Let's talk about everything!</h3>
                        <p className="contact__details">Don't like forms? Send me an email. 👋</p>
                    </div>

                    <form action="" className='contact__form'>
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input type="text" placeholder='Enter Your Name' className='contact__form-input' />
                            </div>
                            <div className="contact__form-div">
                                <input type="email" placeholder='Enter Your Email' className='contact__form-input' />
                            </div>
                        </div>
                        <div className="contact__form-div">
                            <input type="text" placeholder='Enter Your Subject' className='contact__form-input' />
                        </div>
                        <div className="contact__form-div contact-form-area">
                            <textarea name="" id="" rows="10" cols="30" className='contact__form-input' placeholder='Write Your Message'></textarea>
                        </div>

                        <button className="btn">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact