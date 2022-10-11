import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Quizes from '../components/Quizes'
import Root from '../components/Root'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            path: '/',
            loader: async () => fetch(' https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
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