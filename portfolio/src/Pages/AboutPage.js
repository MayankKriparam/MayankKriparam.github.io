import React from 'react'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title';


function AboutPage(){
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skill-container">
                <SkillsSection skill={'Reactjs'} progress={'40%'} />
            </div>
        </div>
    )
}

export default AboutPage;