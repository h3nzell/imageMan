import { lazy } from 'react'

import { ERoutePaths, type TRoutePageType } from './types'

const Home = lazy(() => import('pages/Home'))

const routesList: TRoutePageType[] = [
  {
    element: Home,
    path: ERoutePaths.Home,
    title: 'Home Page',
  },
]

export default routesList
