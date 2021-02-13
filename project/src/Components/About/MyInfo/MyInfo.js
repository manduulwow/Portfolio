import React, { useState } from 'react';
import './MyInfo.css';
import Avatar from './img/1.jpg';
import VizSensor from 'react-visibility-sensor';

const MyInfo = ({setSection}) => {
    const [moveGraph, setMoveGraph] = useState(null);
    const [leftSide, setLeftSide] = useState('left-side');
    const [rightSide, setRightSide] = useState('right-side'); 
    const isVisible = (visible) => {
        if (visible) {
            setMoveGraph({
                js: 'js',
                react: 'react',
                html: 'html',
                css: 'css',
                nodejs: 'node',
                python: 'python',
                java: 'java',
                ui: 'ui'
            })
            setLeftSide('');
            setRightSide('');
            setSection(3);
        }
    }

    return (
        <VizSensor onChange={isVisible} minTopValue={300} partialVisibility>
            <div id="Manduul">
                <div className="info-wrap">
                    <div className={`info-left info-box ${leftSide}`}>
                        <div className="img-wrap">
                            <img src={Avatar} alt="avatar"/>
                        </div>
                        <div className="info-text">
                            <h1>Who is this guy?</h1>
                            <p>I'm a Frontend/Fullstack Developer.</p>
                            <p>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.</p>
                            <p>I like problem solving and <a style={{ textDecoration: 'none', fontWeight: 'bold' }} target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Competitive_programming">Competitive programming</a></p>
                        </div>
                    </div>
                    <div className={`info-right info-box ${rightSide}`}>
                        <div className="graph-wrap">
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['js'] : ''}`}>
                                    <div className="graph-label"><span>Javascript</span></div>
                                </div>
                                <span className="graph-span">90%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['react'] : ''}`}>
                                    <div className="graph-label"><span>React</span></div>
                                </div>
                                <span className="graph-span">90%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['html'] : ''}`}>
                                    <div className="graph-label"><span>HTML</span></div>
                                </div>
                                <span className="graph-span">85%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['css'] : ''}`}>
                                    <div className="graph-label"><span>CSS</span></div>
                                </div>
                                <span className="graph-span">80%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['nodejs'] : ''}`}>
                                    <div className="graph-label"><span>Node.js</span></div>
                                </div>
                                <span className="graph-span">70%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['python'] : ''}`}>
                                    <div className="graph-label"><span>Python</span></div>
                                </div>
                                <span className="graph-span">60%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['java'] : ''}`}>
                                    <div className="graph-label"><span>Java</span></div>
                                </div>
                                <span className="graph-span">60%</span>
                            </div>
                            <div className="graph-row">
                                <div className={`graph ${(moveGraph) ? moveGraph['ui'] : ''}`}>
                                    <div className="graph-label"><span>UI Design</span></div>
                                </div>
                                <span className="graph-span">60%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VizSensor>
    )
}

export default MyInfo;