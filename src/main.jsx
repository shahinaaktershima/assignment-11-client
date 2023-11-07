import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main.jsx';
import Home from './component/Home/Home.jsx';
import ErrorPage from './ErrorPage';
import Registration from './component/usersetup/Registration';
import Login from './component/usersetup/Login';
import AuthProvider from './component/usersetup/AuthProvider';
import Details from './component/Home/Details';
import AppliedJobs from './component/jobs/AppliedJobs';
import AddAjob from './component/jobs/AddAjob';
import MyJobs from './component/jobs/MyJobs';
import Update from './component/jobs/Update';
import AllJobs from './component/jobs/AllJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path:'/',
      element:<Home></Home>
    },{
      path:'/register',
      element:<Registration></Registration>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/details/:id',
      element:<Details></Details>,
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
    }
    ,
    {
      path:'/appliedjobs',
      element:<AppliedJobs></AppliedJobs>
    },
    {
      path:'/addajob',
      element:<AddAjob></AddAjob>
    },
  {
   path:'/myjobs',
   element:<MyJobs></MyJobs>
  },
  {
    path:'/update/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:5000/createdJobs/${params.id}`)
  }
  ,
  {
    path:'/allJobs',
    element:<AllJobs></AllJobs>
  }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
  </div>
)
