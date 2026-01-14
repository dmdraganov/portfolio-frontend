import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className='bg-background text-foreground min-h-screen flex flex-col'>
      <header className='bg-card'>
        <nav className='container p-4 mx-auto flex justify-between items-center'>
          <Link to='/' className='text-xl font-bold'>
            Портфолио
          </Link>
          <div>
            <Link to='/' className='mr-4'>
              Главная
            </Link>
            <Link to='/works' className='mr-4'>
              Работы
            </Link>
            <Link to='/sites'>Сайты</Link>
          </div>
        </nav>
      </header>
      <main className='container mx-auto p-4 flex-grow'>
        <Outlet />
      </main>
      <footer className='bg-card p-4 text-center'>
        <p>&copy; 2026</p>
      </footer>
    </div>
  );
};

export default MainLayout;
