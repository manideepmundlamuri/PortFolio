import React from 'react'
import './Work.css'
import WorkCard from '../workcard/WorkCard'
import WorrkCardData from '../WorrkCardData'
const Work = () => {
    return (
        <>
            <div className="work-container">
                <h1 className="project-heading">Projects</h1>
                <div className="project-container">
                    {WorrkCardData.map((val,index)=>{
                        return (
                            <WorkCard
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            live={val.live}
                            source={val.source}
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Work
