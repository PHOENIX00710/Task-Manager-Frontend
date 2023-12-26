import React from 'react'

const Task = (props) => {
  return (
    <div className='task'>
      <div className='task-content'>
        <h3 className='task-title'>{props.title}</h3>
        <span>{props.description}</span>
      </div>
      <button 
        className='del-btn'
        onClick={(e)=>props.deleteFunction(props.title,props.description)}    
      >
        x
      </button>
    </div>
  )
}

export default Task