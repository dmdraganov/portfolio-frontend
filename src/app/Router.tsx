import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from '../features/home/HomePage';
import WorksListPage from '../features/works/pages/WorksListPage';
import WorkDetailPage from '../features/works/pages/WorkDetailPage';
import SitesListPage from '../features/sites/pages/SitesListPage';
import SiteDetailPage from '../features/sites/pages/SiteDetailPage';
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'works',
        element: <WorksListPage />,
      },
      {
        path: 'works/:id',
        element: <WorkDetailPage />,
      },
      {
        path: 'sites',
        element: <SitesListPage />,
      },
      {
        path: 'sites/:id',
        element: <SiteDetailPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
