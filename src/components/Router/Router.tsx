import React from 'react'
import {
  Router as RouterProvider, Switch,
} from 'react-router-dom'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { DashboardPage } from '@wrapped/pages/DashboardPage'
import { BookPage } from '@wrapped/pages/BookPage'
import { history } from '@wrapped/components/Router/History'


export const Router = () => {
  console.log('render router')
  return (
    <RouterProvider history={history}>
      <Switch>
        {renderRoutes(Routes)}
      </Switch>
    </RouterProvider>
  )
}


interface IRouteConfig extends RouteConfig {
  title: string
  path: string
}

export const Routes: IRouteConfig[] = [
  {
    path: '/',
    title: 'dashboard',
    exact: true,
    component: DashboardPage,
  },
  {
    path: '/books',
    title: 'books',
    exact: true,
    component: BookPage,
  },
]
