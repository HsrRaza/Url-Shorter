import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '../RootLayout.jsx'
import { homeRoute } from './homePage'
import { authRoute } from './auth.route'
import { dashboardRoute } from './dashboard'

export const rootRoute = createRootRoute({
    component: RootLayout,
})



export const routeTree = rootRoute.addChildren([
    homeRoute,
    authRoute,
    dashboardRoute
])