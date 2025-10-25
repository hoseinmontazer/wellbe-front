import { createBrowserRouter } from 'react-router';
import PrivateRoutes from './PrivateRoutes';
import Layout from './Layout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'auth', Component: AuthPage },
      {
        Component: PrivateRoutes,
        children: [
          { path: 'profile', Component: ProfilePage },
          
        ],
      },
    ],
  },
]);

export default router;
