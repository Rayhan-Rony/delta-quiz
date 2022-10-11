import { createBrowserRouter } from 'react-router-dom'
import Blog from '../components/Blog'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Quizes from '../components/Quizes'
import Root from '../components/Root'
import Statistics from '../components/Statistics'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        // loader: async () => fetch(' https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                loader: async () => fetch(' https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/statistics',
                loader: async () => fetch(' https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics>
            },
            {
                path: '/home',
                loader: async () => fetch(' https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/quize/:quizeId',
                loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`),
                element: <Quizes></Quizes>
            }
        ]
    }
])
export default router