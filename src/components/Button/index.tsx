import type { FC } from 'react'
import classNames from 'classnames'
import { noop } from 'lodash'

import type { TButtonProps } from './types'

const Button: FC<TButtonProps> = ({
  children = '',
  className = '',
  onClick = noop,
  type = 'button',
  LeftIcon = null,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(
      'flex items-center justify-center gap-2 rounded-xl text-white font-semibold text-sm  bg-gradient-to-r from-orange-400 to-red-500 py-[10px] px-4',
      { [className]: className }
    )}
  >
    {LeftIcon && LeftIcon}
    {children}
  </button>
)

export default Button
