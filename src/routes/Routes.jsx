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
        element: <PrivateRoute>
          <Marathon></Marathon>
        </PrivateRoute>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path: '/add-marathon',
        element: <PrivateRoute>
          <AddMarathon></AddMarathon>
        </PrivateRoute>
      },
      {
        path: '/my-marathons-list',
        element: <PrivateRoute>
          <MyMarathonsList></MyMarathonsList>
        </PrivateRoute>
      },
      {
        path: '/my-apply-list',
        element: <PrivateRoute>
          <MyApplyList></MyApplyList>
        </PrivateRoute>
      },
      {
        path:'/marathon-details/:id',
        element:<PrivateRoute>
          <MarathonDetails></MarathonDetails>
        </PrivateRoute>
      },
      {
        path:'/update-marathon/:id',
        element:<PrivateRoute>
          <UpdateMarathon></UpdateMarathon>
        </PrivateRoute>
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
])

export default router
