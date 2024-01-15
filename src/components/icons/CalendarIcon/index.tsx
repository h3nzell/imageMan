import type { FC } from 'react'

import type { TIconProps } from 'types'

const CalendarIcon: FC<TIconProps> = ({ color, size }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 17 17' fill='none'>
      <g clipPath='url(#clip0_1_18)'>
        <path
          d='M15.0078 1.32812H14.2109V0H12.8828V1.32812H4.11719V0H2.78906V1.32812H1.99219C0.893695 1.32812 0 2.22182 0 3.32031V15.0078C0 16.1063 0.893695 17 1.99219 17H15.0078C16.1063 17 17 16.1063 17 15.0078V3.32031C17 2.22182 16.1063 1.32812 15.0078 1.32812ZM15.6719 15.0078C15.6719 15.374 15.374 15.6719 15.0078 15.6719H1.99219C1.62602 15.6719 1.32812 15.374 1.32812 15.0078V6.24219H15.6719V15.0078ZM15.6719 4.91406H1.32812V3.32031C1.32812 2.95415 1.62602 2.65625 1.99219 2.65625H2.78906V3.98438H4.11719V2.65625H12.8828V3.98438H14.2109V2.65625H15.0078C15.374 2.65625 15.6719 2.95415 15.6719 3.32031V4.91406Z'
          fill={color}
        />
        <path d='M3.85156 7.63672H2.52344V8.96484H3.85156V7.63672Z' fill={color} />
        <path d='M6.50781 7.63672H5.17969V8.96484H6.50781V7.63672Z' fill={color} />
        <path d='M9.16406 7.63672H7.83594V8.96484H9.16406V7.63672Z' fill={color} />
        <path d='M11.8203 7.63672H10.4922V8.96484H11.8203V7.63672Z' fill={color} />
        <path d='M14.4766 7.63672H13.1484V8.96484H14.4766V7.63672Z' fill={color} />
        <path d='M3.85156 10.293H2.52344V11.6211H3.85156V10.293Z' fill={color} />
        <path d='M6.50781 10.293H5.17969V11.6211H6.50781V10.293Z' fill={color} />
        <path d='M9.16406 10.293H7.83594V11.6211H9.16406V10.293Z' fill={color} />
        <path d='M11.8203 10.293H10.4922V11.6211H11.8203V10.293Z' fill={color} />
        <path d='M3.85156 12.9492H2.52344V14.2773H3.85156V12.9492Z' fill={color} />
        <path d='M6.50781 12.9492H5.17969V14.2773H6.50781V12.9492Z' fill={color} />
        <path d='M9.16406 12.9492H7.83594V14.2773H9.16406V12.9492Z' fill={color} />
        <path d='M11.8203 12.9492H10.4922V14.2773H11.8203V12.9492Z' fill={color} />
        <path d='M14.4766 10.293H13.1484V11.6211H14.4766V10.293Z' fill={color} />
      </g>
      <defs>
        <clipPath id='clip0_1_18'>
          <rect width={size} height={size} fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CalendarIcon
