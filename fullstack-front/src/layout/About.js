import React from 'react'
import "./about.css";

export default function About() {
    return (
        <div>
            <div className='about'>
                <div className='about__bg'></div>
                <div className='container'>
                    <h1 className='about__title'>Vita Med</h1>
                    <div className='about__description'>С заботой о самом важном</div>
                </div>
            </div>
            <div className='container mb-1'></div>
        </div>
    )
}
