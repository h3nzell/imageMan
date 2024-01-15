import type { FC } from 'react'

import { Text } from 'components'
import { RoutesWrapper } from 'libraries/router'

import logo from '../../../assets/images/logo.png'

const PageLayout: FC = () => (
  <main className='w-full flex flex-col gap-24 h-screen max-md:h-auto max-'>
    <header className='w-full bg-header-bg h-80 bg-cover gap-8 max-sm:gap-4 bg-no-repeat bg-center flex items-center justify-center relative '>
      <img width='67' height='67' className='max-sm:w-9 max-sm:h-9' src={logo} alt='Background' />
      <Text className='text-6xl max-sm:text-5xl font-semibold text-white' text='ImageMan' />
    </header>

    <RoutesWrapper />
  </main>
)

export default PageLayout
