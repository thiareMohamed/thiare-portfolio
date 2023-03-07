import React from 'react'
import ThiarePhoto from '../assets/images/ThiarePhoto.jfif'

function CardProject(props) {
    const value = props.value;
  return (
    <div className='border border-sky-500 rounded-xl p-4 space-y-5 w-72 hover:bg-sky-500/30'>
      <h3 className='text-xl font-bold'>{value.title}dsa</h3>
      <p className='text-xs text-gray-500'>{value.description}</p>
      <div className='space-x-3'>
        {value.stacks.map((stack) => (
          <span className="bg-sky-500/30 text-sky-400 text-sm font-bold p-2 rounded-xl">{stack}</span>
        ))}
      </div>
      <img src={ThiarePhoto} alt='Image' className='rounded'/>
    </div>
  )
}

export default CardProject
