import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Root from '../components/Root'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,

        children: [{
            path: '/',
            loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
        }]
    }
])
export default router