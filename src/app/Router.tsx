import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from '../features/home/HomePage';
import PracticeWorksPage from '../features/works/pages/PracticeWorksPage';
import LabWorksPage from '../features/works/pages/LabWorksPage';
import PracticePagesPage from '../features/works/pages/EducationalWorksPage';
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
        path: '/practices',
        element: <PracticeWorksPage />,
      },
      {
        path: '/labs',
        element: <LabWorksPage />,
      },
      {
        path: '/practice-pages',
        element: <PracticePagesPage />,
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
