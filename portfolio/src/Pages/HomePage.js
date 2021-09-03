import React from 'react'
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage(){
    return(
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Mayank Kriparam.</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem sequi dignissimos laborum ad sint non explicabo veniam quibusdam, amet animi
                    repudiandae quis sed nam sapiente odio aspernatur? Aspernatur, harum modi!
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;