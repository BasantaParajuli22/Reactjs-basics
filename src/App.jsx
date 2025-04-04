import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'

import HomePage from './pages/HomePage'
import AllJobsPage from './pages/AllJobsPage'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
import FetchApiId from './components/apis/FetchApiId'
import ViewProducts from './components/apis/ViewProducts'
import ViewProduct from './components/apis/ViewProduct'
import ProductManagement from './components/ProductManagement'
import UpdateProduct from './components/apis/UpdateProduct'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element ={ <Layout /> } >
      <Route index element= { <HomePage /> } />
      <Route path='/jobs' element= { <AllJobsPage /> } />
      <Route path='/about' element= { <AboutPage />  } />
      <Route path='/users/:id' element= { <FetchApiId />  } />
      <Route path='/products' element= { <ViewProducts />  } />
      <Route path='/products/:id' element= { <ViewProduct />  } />
      <Route path="/products/update/:id" element={<UpdateProduct />} />
      <Route path='/products/new' element= { <ProductManagement />  } />

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