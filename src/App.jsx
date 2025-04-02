import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'

import HomePage from './pages/HomePage'
import AllJobsPage from './pages/AllJobsPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import FetchApiId from './components/hooks/FetchApiId'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element ={ <Layout /> } >
      <Route index element= { <HomePage /> } />
      <Route path='/jobs' element= { <AllJobsPage /> } />
      <Route path='/about' element= { <AboutPage />  } />
      <Route path='/users/:id' element= { <FetchApiId />  } />
      <Route path='*' element= { <ErrorPage /> } />
    </Route>
  )
)

function App()  {
  return (
    <RouterProvider router={ router } />
  )
}



export default App