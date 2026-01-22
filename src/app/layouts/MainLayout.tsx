import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='font-inter text-foreground min-h-dvh'>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <div
        className={`relative transition-all duration-200 ${
          isSidebarOpen ? 'ml-64' : 'ml-18'
        }`}
      >
        <main className='p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
