import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './routes/Error.jsx'
import App from './App.jsx'
import Login from './routes/Login.jsx'
import Authentication_phone from './routes/Authentication_phone.jsx'
import Register from './routes/Register.jsx'
import Authentication_email from './routes/Authentication_email.jsx'
import Initial from './routes/Initial.jsx'
import Follow_up from './routes/Follow_up.jsx'
import Assessment from './routes/Assessment.jsx'
import Settings from './routes/Settings.jsx'
import Profile from './routes/Profile.jsx'

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error/>,

    children: [
      {path:'/', element: <App/>},
      {path:'/Login', element: <Login/>},
      {path:'/Authentication_phone', element: <Authentication_phone/>},
      {path:'/Register', element: <Register/>},
      {path:'/Authentication_email', element: <Authentication_email/>},
      {path:'/Initial', element: <Initial/>},
      {path:'/Follow_up', element: <Follow_up/>},
      {path:'/Assessment', element: <Assessment/>},
      {path:'/Settings', element: <Settings/>},
      {path:'/Profile', element: <Profile/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
