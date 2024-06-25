import React from 'react'
import './Pricing.css'
import image1 from '../../assest/Images/price-1.svg'
import image2 from '../../assest/Images/price-2.svg'
import image3 from '../../assest/Images/price-3.svg'

const Pricing = () => {
    return (
        <>
            <section className="pricing container section" id="pricing">
                <h2 className="section__title">Pricing Plans</h2>

                <div className="pricing__container grid">
                    <div className="pricing__item">
                        <img src={image1} alt="" className='pricing__img' />
                        <h3 className='pricing__plan'>Basic</h3>
                        <p className="pricing__title">A Simple option but powerful to manage your business</p>
                        <p className="pricing__support">Email support</p>
                        <h3 className="price">
                            <em>$</em> 9 <span>Month</span>
                        </h3>
                        <a href="" className='btn'>Get Started</a>
                    </div>
                    <div className="pricing__item best">
                        <span className="badge">Recommended</span>
                        <img src={image2} alt="" className='pricing__img' />
                        <h3 className='pricing__plan'>Premium</h3>
                        <p className="pricing__title">Unlimited product including app integration and more features</p>
                        <p className="pricing__support"> Mon-Fri support</p>
                        <h3 className="price">
                            <em>$</em> 15 <span>Month</span>
                        </h3>
                        <a href="" className='btn'>Get Started</a>
                    </div>
                    <div className="pricing__item">
                        <img src={image3} alt="" className='pricing__img' />
                        <h3 className='pricing__plan'>Ultimate</h3>
                        <p className="pricing__title">A wise option for large companies and individuals</p>
                        <p className="pricing__support">24/7 support</p>
                        <h3 className="price">
                            <em>$</em> 19 <span>Month</span>
                        </h3>
                        <a href="" className='btn'>Get Started</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing