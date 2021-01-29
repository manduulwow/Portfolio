import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ scroller }) => {
    const [splitNav, setSplitNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleClick = (section) => {
        scroller.scrollTo(section, {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: 1
        });
    }

    useEffect(() => {
        setShowNav(true);
        setTimeout(() => {
            setSplitNav(true);
        }, 1000);
    }, []);

    return(
        <div className={`navigation-container ${showNav ? '' : 'hideNav'}`} >
            <div className={`${splitNav ? '' : 'nav1'} nav`} onClick={() => handleClick('1')}><span>1</span></div>
            <div className={`nav2 nav`} onClick={() => handleClick('2')}><span>2</span></div>
            <div className={`${splitNav ? '' : 'nav3'} nav`} onClick={() => handleClick('3')}><span>3</span></div>
        </div>
    )
}

export default Navigation;