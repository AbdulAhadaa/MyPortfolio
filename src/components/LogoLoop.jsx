import React from 'react'
import './LogoLoop.css'

const LogoLoop = () => {
  return (
    <div className="logo-loop-container">
      <svg
        viewBox="0 0 100 100"
        width="80"
        height="80"
        className="logo-loop-svg"
      >
        <g className="logo-loop-item">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fontSize="40"
            fontWeight="bold"
            fill="white"
            fontFamily="Arial, sans-serif"
          >
            N
          </text>
        </g>
      </svg>
    </div>
  )
}

export default LogoLoop
