import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'
const WorkCard = (props) => {
  return (
    <>
    <div className="work-container">
      <div className="project-container">
        <div className="project-card">
          <img src={props.imgsrc} alt="image" />
          <h2 className="project-title">{props.title}</h2>
          <div className="project-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.live} target='_blank' className='btn'>Live</NavLink>
              <NavLink to={props.source} target='_blank' className='btn'>Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default WorkCard
