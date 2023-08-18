import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import CourseDetails from './components/CourseDetails';

const AppLayOut = () => {

  return(
    <div>
    <Header/>
    <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path:'/',
  element:<AppLayOut/>,
  children:[{
    path:"/",
    element:<Home/>
  },{
    path:"courses/:id",
  element:<CourseDetails/>
  }]
}]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
