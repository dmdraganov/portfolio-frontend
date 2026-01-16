import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from '../features/NotFoundPage/NotFoundPage';
import { PracticesPage } from '@/features/works/pages/PracticesPage';
import { LabsPage } from '@/features/works/pages/LabsPage';
import { PracticalPagesPage } from '@/features/practical-pages/pages/PracticalPagesPage';
import { SitesPage } from '@/features/sites/pages/SitesPage';
import { SiteDetailPage } from '@/features/sites/pages/SiteDetailPage';
import { CourseworksPage } from '@/features/courseworks/pages/CourseworksPage';
import { EssaysPage } from '@/features/essays/pages/EssaysPage';

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
        element: <SiteDetailPage />,
      },
      {
        path: '/courseworks',
        element: <CourseworksPage />,
      },
      {
        path: '/essays',
        element: <EssaysPage />,
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
