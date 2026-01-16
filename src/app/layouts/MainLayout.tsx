import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='bg-background text-foreground min-h-screen'>
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <div
        className={`relative transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
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
