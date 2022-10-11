import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Utilities/routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer position='top-center' autoClose={500}></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </>)



}

export default App;
