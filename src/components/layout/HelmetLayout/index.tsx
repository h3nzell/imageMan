import type { FC } from 'react'
import { Helmet } from 'react-helmet'

import type { HelmetLayoutProps } from './types'

const HelmetLayout: FC<HelmetLayoutProps> = ({ children, title }) => (
  <div className='w-full'>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
)

export default HelmetLayout
