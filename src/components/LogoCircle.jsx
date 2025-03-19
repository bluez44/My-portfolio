import React from 'react'
import '../styles/LogoCircle.css'

function LogoCircle({ width, height, LogoSrc }) {
  return (
    <div className='p-3 bg-[#251C31] rounded-circle d-inline-block'>
        <img src={LogoSrc} alt="logo" width={width} height={height}/>
    </div>
  )
}

export default LogoCircle