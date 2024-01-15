import type { FC } from 'react'

import { Text } from 'components'

import type { TToastTextsProps } from './types'

const ToastTexts: FC<TToastTextsProps> = ({ color, title, description }) => (
  <div>
    <p style={{ color: color }} className='m-0 font-semibold text-xs leading-4  capitalize'>
      <Text tagName='span' text={title} />
    </p>
    {description && <span className='text-primary20 capitalize text-base font-light leading-6 '>{description}</span>}
  </div>
)

export default ToastTexts
