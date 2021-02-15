import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Navigation = ({ scroller, color, section, setSection }) => {
    const [spinNav, setSpinNav] = useState(false);
    const [moveNav, setMoveNav] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const scrollUp = () => {
        if (section > 0) {
            setSection(section - 1);
            scroller.scrollTo(section - 1, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -1
            });
        }
    }

    const scrollDown = () => {
        if (section < 3) {
            // setSection(section + 1);
            scroller.scrollTo(section + 1, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: 1
            });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setShowNav(true);
            setSpinNav(true);
        }, 500);

        setTimeout(() => {
            setMoveNav(true);
        }, 1500);
    }, []);

    return (
        <div className={`navigation-container ${showNav ? '' : 'hideNav'}`}>
            <AiOutlineLeft onClick={scrollUp} size={35} color={color} className={`nav-top nav ${spinNav ? '' : 'nav-1'}`} style={{ transform: moveNav ? 'rotate(90deg) translateX(-30vh)' : '' }} />
            <div className={`indicators ${moveNav ? '' : 'hide-indicator'}`}>
                <div style={{ backgroundColor: color, opacity: (section === 0) ? 1 : 0.2 }}></div>
                <div style={{ backgroundColor: color, opacity: (section === 1) ? 1 : 0.2 }}></div>
                <div style={{ backgroundColor: color, opacity: (section === 2) ? 1 : 0.2 }}></div>
                <div style={{ backgroundColor: color, opacity: (section === 3) ? 1 : 0.2 }}></div>
            </div>
            <AiOutlineRight onClick={scrollDown} size={35} color={color} className={`nav-bottom nav ${spinNav ? '' : 'nav-2'}`} style={{ transform: moveNav ? 'rotate(90deg) translateX(30vh)' : '' }} />
        </div>
    )
}

export default Navigation;