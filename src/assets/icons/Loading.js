import React from 'react'

const SvgLoading = props => (
  <svg
    style={{
      margin: 'auto',
      background: '#fff',
    }}
    width={214}
    height={214}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
    {...props}
  >
    <circle
      cx={50}
      cy={50}
      r={31}
      strokeWidth={6}
      stroke="#fe718d"
      strokeDasharray="48.69468613064179 48.69468613064179"
      fill="none"
      strokeLinecap="round"
      transform="rotate(53.082 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
)

export default SvgLoading
