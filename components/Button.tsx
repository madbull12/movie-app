import React from 'react'

interface IButton {
    addBookmark?:()=>void
}

const Button = ({ addBookmark }: IButton) => {
  return (
    <button  className='w-10 h-10 flex items-center justify-center rounded-full backdrop-opacity-10 backdrop-invert bg-white/30'>

    </button>
  )
}

export default Button