import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Root from '../components/Root'
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        loader: () => fetch(''),
        children: [{
            path: '/',
            element: <Home></Home>
        }]
    }
])
export default router