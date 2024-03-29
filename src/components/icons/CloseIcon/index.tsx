import type { FC } from 'react'

import type { TIconProps } from 'types'

const CloseIcon: FC<TIconProps> = ({ color = '', size }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.6997 6.29687C18.0902 6.68743 18.0901 7.32059 17.6995 7.71108L7.70704 17.7017C7.31648 18.0922 6.68331 18.0921 6.29283 17.7016C5.90234 17.311 5.9024 16.6778 6.29296 16.2874L16.2855 6.29673C16.676 5.90625 17.3092 5.9063 17.6997 6.29687Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z'
      fill={color}
    />
  </svg>
)

export default CloseIcon
