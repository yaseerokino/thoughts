import React, { SVGProps } from 'react'

const AlertIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M10 6V11M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default AlertIcon
