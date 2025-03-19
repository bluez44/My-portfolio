import React from 'react'

import '../styles/GradientCircle.css'

function GradientCircle({ width = 100, height = 100 }) {
  return (
    <div className='circle' style={{width: `${width}px`, height: `${height}px`}}>

    </div>
  )
}

export default GradientCircle