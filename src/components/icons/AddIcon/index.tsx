import type { FC } from 'react'

import type { TIconProps } from 'types'

const AddIcon: FC<TIconProps> = ({ color, size }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 152 152' fill='none'>
    <circle cx='76' cy='76' r='50.2401' transform='rotate(45 76 76)' stroke='white' strokeWidth='7' />
    <path d='M54.2979 73.4468L97.7021 73.4467L97.7021 78.5531L54.2979 78.5532L54.2979 73.4468Z' fill={color} />
    <path d='M73.4468 97.7021L73.4469 54.2979L78.5532 54.2979L78.5532 97.7021L73.4468 97.7021Z' fill={color} />
  </svg>
)

export default AddIcon
