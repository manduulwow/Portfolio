import React, { useState, useEffect } from 'react';
import './About.css';
import DA from './img/DA.png';
import ABLE from './img/able.jpg';
import reactLogo from './img/logos_react.svg';
import reduxLogo from './img/logos_redux.svg';
import mobxLogo from './img/logos_mobx.svg';
import nodeLogo from './img/logos_node.svg';
import pythonLogo from './img/logos_python.svg';
import jsLogo from './img/logos_js.svg';
import spaceImage from './img/space2.jpg';
import spaceImage2 from './img/space4.jpg';
import { scroller, animateScroll } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";
import VizSensor from 'react-visibility-sensor';

import MyInfo from './MyInfo/MyInfo';
import Navigation from './Navigation/Navigation';

const About = () => {
    const [section, setSection] = useState(0);
    const [showIntroText, setShowIntroText] = useState(false);
    const [showSection, setShowSection] = useState({
        dentsu: false,
        able: false
    })
    const [navColor, setNavColor] = useState('');
    const scrollDown = () => {
        scroller.scrollTo('1', {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 1
        });
    }

    const isVisible = (visible, type, sectionIndex) => {
        // const colors = ['#FDFEFE', '#165697', '#fd3236'];
        setNavColor('#40E0D0');
        if (visible) {
            setShowSection({ ...showSection, [type]: true });
            setSection(sectionIndex);
        }
    }

    useEffect(() => {
        animateScroll.scrollToTop();
        let timer1 = setTimeout(() => setShowIntroText(true), 1000);
        return () => {
            clearTimeout(timer1);
        };
    }, []);

    return <div id="about-container" >
        <VizSensor onChange={(visible) => isVisible(visible, 'start', 0)} partialVisibility={'top'} minTopValue={400} offset={300}>
            <section name="0" className="intro">
                <div className={`text ${showIntroText ? '' : 'hideIntro'}`}>
                    Hello, I'm <span className="highlight">Manduul Enkhee</span>
                    <br></br>
                I'm Fullstack/Frontend Engineer
            </div>
                <div className={`intro-btn btn ${showIntroText ? '' : 'hideIntro'}`} onClick={scrollDown}>
                    My Experience
                <i><FiArrowRight size={25} /></i>
                </div>
            </section>
        </VizSensor>
        <VizSensor onChange={(visible) => isVisible(visible, 'dentsu', 1)} partialVisibility={'top'} minTopValue={300} offset={100}>
            <section name="1" className="dentsu-section" id="dentsu">
                <div className={`box-left box about-img info-box ${showSection.dentsu ? '' : 'left-side'}`}>
                    <img src={spaceImage} alt="spaceImage" />
                </div>
                <div className={`box-right info-box box ${showSection.dentsu ? '' : 'right-side'}`}>
                    <div className="logo-container">
                        <img src={DA} alt="Dentsu" className="company-logo box-img" />
                    </div>
                    <div className="text-container">
                        <h1>Dentsu Data Artist Mongolia <span>2018 - 2019</span></h1>
                        <p>Dentsu Data Artist Mongol LLC is a Mongolian branch of Data Artist LLC, a subsidiary of Dentsu INC, the world's one of the top marketing and advertising company.</p>
                        <p style={{ fontSize: '0.9em' }}>Technologies Used:</p>
                        <div className="tech-logo-container">
                            <div className="logo-box">
                                <a href="https://reactjs.org/">
                                    <div className="svg-container">
                                        <img src={reactLogo} alt="react-logo" />
                                    </div>
                                    <div className="tech-name">React</div>
                                </a>
                            </div>
                            <div className="logo-box">
                                <a href="https://redux.js.org/">
                                    <div className="svg-container">
                                        <img src={reduxLogo} alt="react-logo" />
                                    </div>
                                    <div className="tech-name">Redux</div>
                                </a>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={mobxLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Mobx</div>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={nodeLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Express <br></br>JS</div>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={pythonLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Python</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </VizSensor>
        <div style={{ height: 1, background: 'linear-gradient(to right, red, purple)', width: '80%', margin: 'auto' }}></div>
        <VizSensor onChange={(visible) => isVisible(visible, 'able', 2)} partialVisibility={'top'} minTopValue={300} offset={100}>
            <section name="2" className="ablesoft-section">
                <div className={`box-left box info-box ${showSection.able ? '' : 'left-side'}`}>
                    <div className="logo-container" style={{ width: '40%', height: '35%' }} >
                        <img src={ABLE} alt="Dentsu" className="company-logo" />
                    </div>
                    <div className="text-container">
                        <h1>AbleSoft LLC<span style={{ left: 12, bottom: 3 }}>2016 - 2018</span></h1>
                        <p>AbleSoft LLC is a software company that specialize in building integrated operation, control and management systems also online software web platforms for organizations.</p>
                        <p style={{ fontSize: '0.9em' }}>Technologies Used:</p>
                        <div className="tech-logo-container">
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={reactLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">React</div>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={reduxLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Redux</div>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={nodeLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Express <br></br>JS</div>
                            </div>
                            <div className="logo-box">
                                <div className="svg-container">
                                    <img src={jsLogo} alt="react-logo" />
                                </div>
                                <div className="tech-name">Javascript</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`box-right about-img box info-box ${showSection.able ? '' : 'right-side'}`}>
                    <img src={spaceImage2} alt="spaceImage" className="box-img" />
                </div>
            </section>
        </VizSensor>
        <section style={{ backgroundColor: 'transparent', height: '50vh' }}>

        </section>
        <section id="myinfo" name="3">
            <MyInfo setSection={setSection} section={section} />
        </section>

        <Navigation color={navColor} scroller={scroller} section={section} setSection={setSection} />
    </div >
}

export default About;