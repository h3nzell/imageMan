import type { FC } from 'react'

export type TRoutePageType = {
  path: string
  element: FC
  title: string
}

export enum ERoutePaths {
  Home = '/',
}
