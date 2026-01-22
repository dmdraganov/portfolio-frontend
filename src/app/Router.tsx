import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';
import PracticesPage from '@/features/works/pages/PracticesPage';
import LabsPage from '@/features/works/pages/LabsPage';
import PracticalPagesPage from '@/features/practical-pages/pages/PracticalPagesPage';
import SitesPage from '@/features/sites/pages/SitesPage';
import CourseworksPage from '@/features/courseworks/pages/CourseworksPage';
import EssaysPage from '@/features/essays/pages/EssaysPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to='/practices' replace />,
      },
      {
        path: '/practices',
        element: <PracticesPage />,
      },
      {
        path: '/labs',
        element: <LabsPage />,
      },
      {
        path: '/practical-pages',
        element: <PracticalPagesPage />,
      },
      {
        path: 'sites',
        element: <SitesPage />,
      },
      {
        path: 'sites/:name',
        lazy: async () => {
          const module = await import('../features/sites/pages/SiteDetailPage');
          return { Component: module.default };
        },
      },
      {
        path: '/courseworks',
        element: <CourseworksPage />,
      },
      {
        path: '/essays',
        element: <EssaysPage />,
      },
      {
        path: '/drafts',
        lazy: async () => {
          const module = await import('../features/drafts/pages/DraftsPage');
          return { Component: module.default };
        },
      },
      {
        path: '/compensatory-works',
        lazy: async () => {
          const module =
            await import('../features/compensatory-works/pages/CompensatoryWorksPage');
          return { Component: module.default };
        },
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
