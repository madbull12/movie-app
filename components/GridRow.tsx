import React from 'react'

const GridRow = ({ children }:{ children:React.ReactNode}) => {
  return (
    <div className="row  scrollbar-thumb-gray-800 mt-4 scrollbar-thin scrollbar-track-gray-none rounded scrollbar-thumb-rounded-md" >
        {children}
    </div>
  )
}

export default GridRow