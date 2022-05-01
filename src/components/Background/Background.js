import React from 'react';
import './SideScroll.js';

const Background = () => {
    return (
        <>
         <div className="outercontainer" id="scrl1">
        
            <div className="innercontainer">
                
                <a href="#item1" className='hero1'>HERO</a>
                <div id='item1'></div>
                <div className="item1">a</div>

                <a href="#item2" className='hero2'>ABOUT ME</a>
                <div id='item2'></div>
                <div className="item2">ABOUT ME</div>

                <a href="#item3" className='hero3'>SKILLS</a>
                <div id='item3'></div>
                <div className="item3">SKILLS</div>

                <a href="#item4" className='hero4'>PROJECTS</a>
                <div id='item4'></div>
                <div className="item4">PROJECTS</div>
                
                <a href="#item5" className='hero5'>CONTACT</a>
                <div id='item5'></div>
                <div className="item5" >CONTACT</div>
               
            </div>
        </div>
        
        </>
    )
 
};

export default Background;