import React, { useState, useEffect } from 'react';
import './About.css';
import DA from './img/DA.png';
import ABLE from './img/able.jpg';
import { scroller, animateScroll } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";
import VizSensor from 'react-visibility-sensor';

import MyInfo from './MyInfo/MyInfo';
import Navigation from './Navigation/Navigation';

const About = () => {
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [showSection, setShowSection] = useState({
        dentsu: false,
        able: false
    })
    const [navColor, setNavColor] = useState('');
    const scrollDown = () => {
        setIsScrolledDown(true);
        scroller.scrollTo('1', {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 1
        });
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const isVisible = (visible, type) => {
        const colors = ['#48C9B0', '#FFC300', '#FF5733'];
        setNavColor(colors[getRandomInt(3)]);
        if (visible) {
            setShowSection({ ...showSection, [type]: true });
        }
    }

    useEffect(() => {
        animateScroll.scrollToTop();
    }, []);

    return <div id="about-container" >
        <section name="0" className="intro">
            <div className="text">
                Hello, I'm <span className="highlight">Manduul Enkhee</span>
                <br></br>
                I'm Fullstack/Frontend Engineer
            </div>
            <div className="intro-btn btn" onClick={scrollDown}>
                My Experience
                <i><FiArrowRight size={25} /></i>
            </div>
        </section>
        <VizSensor onChange={(visible) => isVisible(visible, 'dentsu')} partialVisibility minTopValue={300} >
            <section name="1" className="dentsu-section" id="dentsu">
                <div className={`box-left box info-box ${showSection.dentsu ? '' : 'left-side'}`}>
                    <div className="img-container">
                        <a href="https://www.data-artist.com/en/company/" target="_blank" rel="noreferrer">
                            <img src={DA} alt="company-logo" className="company-logo" />
                        </a>
                    </div>
                </div>
                <div className={`box-right info-box box ${showSection.dentsu ? '' : 'right-side'}`}>
                    <div className="text-box dentsu-text-box">
                        <a style={{ textDecoration: 'none', color: '#616161' }} href="https://www.data-artist.com/en/company/" target="_blank" rel="noreferrer"><h1>Dentsu Data Artist Mongol</h1></a>
                        <p style={{ paddingLeft: 11, marginTop: 45 }}>Dentsu Data Artist Mongol LLC is a Mongolian branch of Data Artist LLC, a subsidiary of Dentsu INC, the world's one of the top marketing and advertising company.</p>
                        <p>My role at Dentsu Data Artist </p>
                        <ul className="role">
                            <li>Developing Front-End website architecture.</li>
                            <li>Designing user interactions on web pages.</li>
                            <li>Creating databases for functionality</li>
                            <li>Ensuring responsiveness of applications.</li>
                            <li>Designing and developing APIs.</li>
                        </ul>

                        <p>TECHNOLOGIES</p>
                        <ul style={{ listStyle: 'none', paddingLeft: 11 }} className="tech">
                            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">REACT</a>, </li>
                            <li><a href="https://redux.js.org/" target="_blank" rel="noreferrer">REDUX</a>, </li>
                            <li><a href="https://mobx.js.org/react-integration.html" target="_blank" rel="noreferrer">MOBX</a>, </li>
                            <li><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">JAVASCRIPT</a>, </li>
                            <li><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">NODEJS</a>, </li>
                            <li><a href="https://expressjs.com/" target="_blank" rel="noreferrer">EXPRESSJS</a>, </li>
                            <li><a href="https://www.python.org/" target="_blank" rel="noreferrer">PYTHON</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </VizSensor>
        <div style={{ height: 1, background: 'linear-gradient(to right, red, purple)', width: '80%', margin: 'auto' }}></div>
        <VizSensor onChange={(visible) => isVisible(visible, 'able')} partialVisibility minTopValue={300} >
            <section name="2" className="ablesoft-section">
                <div className={`box-left box info-box ${showSection.able ? '' : 'left-side'}`}>
                    <div className="text-box dentsu-text-box">
                        <a style={{ textDecoration: 'none', color: '#616161' }} href="https://web.able.mn/company" target="_blank" rel="noreferrer"><h1>AbleSoft</h1></a>
                        <p style={{ paddingLeft: 11, marginTop: 45 }}>AbleSoft LLC is a software company that specialize in building integrated operation, control and management
systems or online software web platforms for organizations.</p>
                        <p>My role at AbleSoft</p>
                        <ul className="role">
                            <li>Implemented complex query for SQL Databases.</li>
                            <li>Migrated JQuery, PHP code base to Node and ReactJS.</li>
                            <li>Responsible for creating new services and features.</li>
                            <li>Ensuring responsiveness of applications.</li>
                            <li>Worked closely with the design team and delivered an efficient user interface.</li>
                        </ul>
                        <p>TECHNOLOGIES</p>
                        <ul style={{ listStyle: 'none', paddingLeft: 11 }} className="tech">
                            <li><a href="https://reactjs.org/" target="_blank" rel="noreferrer">REACT</a>, </li>
                            <li><a href="https://redux.js.org/" target="_blank" rel="noreferrer">REDUX</a>, </li>
                            <li><a href="https://www.javascript.com/" target="_blank" rel="noreferrer">JAVASCRIPT</a>, </li>
                            <li><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">NODEJS</a>, </li>
                            <li><a href="https://expressjs.com/" target="_blank" rel="noreferrer">EXPRESSJS</a>, </li>
                            <li><a href="https://www.php.net/" target="_blank" rel="noreferrer">PHP</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`box-right box info-box ${showSection.able ? '' : 'right-side'}`}>
                    <div className="img-container">
                        <a href="https://web.able.mn/company" target="_blank" rel="noreferrer">
                            <img src={ABLE} alt="company-logo" className="company-logo" />
                        </a>
                    </div>
                </div>
            </section>
        </VizSensor>
        <section style={{ backgroundColor: 'transparent', height: '50vh' }}>

        </section>
        <section id="myinfo" name="3">
            <MyInfo />
        </section>

        <Navigation color={navColor} scroller={scroller} isScrolledDown={isScrolledDown} />
    </div>
}

export default About;