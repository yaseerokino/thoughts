import React, { HTMLProps } from 'react'

interface MySVGComponentProps extends HTMLProps<SVGSVGElement> {
  isActive: boolean
}

export const MoonIcon: React.FC<MySVGComponentProps> = ({ className, isActive }) => {
  return (
    <svg
      className={`${className} icon ${isActive && 'icon-active'}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.32031 11.6836C3.32031 16.6542 7.34975 20.6836 12.3203 20.6836C16.1075 20.6836 19.3483 18.3445 20.6768 15.0321C19.6402 15.4487 18.5059 15.6835 17.3203 15.6835C12.3497 15.6835 8.32031 11.6541 8.32031 6.68354C8.32031 5.5035 8.55165 4.36271 8.96453 3.33008C5.65605 4.6604 3.32031 7.89924 3.32031 11.6836Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}