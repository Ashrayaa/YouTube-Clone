import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-5 rounded-xl hover:text-white hover:bg-black active:bg-black py-2 m-2 bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button