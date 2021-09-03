import React from 'react'
//import about from '../img/spiderman.jpg';


function ImageSection(){
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt="" />
            </div> */}
            <div className="about-info">
                <h4>I am<span> Mayank Kriparam </span></h4>
                <p className="about-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste earum animi eos in vitae reprehenderit reiciendis officiis dolorum odio mollitia.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Mayank Kriparam</p>
                        <p>: 21</p>
                        <p>: India</p>
                        <p>: Hindi, English</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;