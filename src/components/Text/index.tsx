import type { FC } from 'react'

import type { TText } from './types'
import classNames from 'classnames'

const Text: FC<TText> = ({ tagName = 'p', text = '', className = '' }) => {
  const Tag = tagName

  return <Tag className={classNames({ [className]: className })}>{text}</Tag>
}

export default Text
