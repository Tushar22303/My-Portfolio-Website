import React from 'react'
import { FaFire, FaUserFriends, FaIdBadge } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const AboutBox = () => {
    return (
        <>
            <div className="about__boxes grid">
                <div className="about__box">
                    <FaFire className='about__icon' />

                    <div>
                        <h3 className='about__title'>198</h3>
                        <span className='about__subtitle'>Project Completed</span>
                    </div>
                </div>

                <div className="about__box">
                    <GiCoffeeCup className='about__icon' />

                    <div>
                        <h3 className='about__title'>5670</h3>
                        <span className='about__subtitle'>Cup of Coffee</span>
                    </div>
                </div>

                <div className="about__box">
                    <FaUserFriends className='about__icon' />

                    <div>
                        <h3 className='about__title'>427</h3>
                        <span className='about__subtitle'>Satisfied Client</span>
                    </div>
                </div>

                <div className="about__box">
                    <FaIdBadge className='about__icon' />

                    <div>
                        <h3 className='about__title'>35</h3>
                        <span className='about__subtitle'>Nominees winner</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBox