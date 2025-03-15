import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
// import JobDetails from '../pages/JobDetails'
// import AddJob from '../pages/AddJob'
import ErrorPage from '../pages/ErrorPage'
// import MyPostedJobs from '../pages/MyPostedJobs'
// import UpdateJob from '../pages/UpdateJob'
import PrivateRoute from './PrivateRoute'
import AddMarathon from '../pages/AddMarathon'
import Marathon from '../pages/Marathon'
import MyMarathonsList from '../pages/MyMarathonsList'
import MyApplyList from '../pages/MyApplyList'
import MarathonDetails from '../pages/MarathonDetails'
import Dashboard from '../pages/Dashboard'
import UpdateMarathon from '../pages/UpdateMarathon'
import MarathonRegister from '../pages/MarathonRegister'
import RegistrationUpadate from '../pages/RegistrationUpadate'
import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import AboutUs from '../components/AboutUs'
import HomeMarathon from '../components/HomeMarathon'
// import MyBids from '../pages/MyBids'
// import BidRequests from '../pages/BidRequests'
// import AllJobs from '../pages/AllJobs'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/marathon',
        element:<Marathon></Marathon>
      },
      {
        path: '/marathon-details/:id',
        element: <PrivateRoute>
          <MarathonDetails></MarathonDetails>
        </PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
          // index:true,
          {
            path: 'add-marathon',
            element: <PrivateRoute>
              <AddMarathon></AddMarathon>
            </PrivateRoute>
          },
          {
            path: 'my-marathons-list',
            element: <PrivateRoute>
              <MyMarathonsList></MyMarathonsList>
            </PrivateRoute>
          },
          {
            path: 'my-apply-list',
            element: <PrivateRoute>
              <MyApplyList></MyApplyList>
            </PrivateRoute>
          },
          {
            path: 'update-marathon/:id',
            element: <PrivateRoute>
              <UpdateMarathon></UpdateMarathon>
            </PrivateRoute>
          },
          {
            path: 'register-marathon/:id',
            element: <PrivateRoute>
              <MarathonRegister></MarathonRegister>
            </PrivateRoute>
          },
          {
            path: 'update-apply/:id',
            element: <PrivateRoute>
              <RegistrationUpadate></RegistrationUpadate>
            </PrivateRoute>
          },

        ]
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
    ],
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/faq",
    element:<FAQ/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },{
    path:"/latest",
    element:<HomeMarathon/>
  }
])

export default router
