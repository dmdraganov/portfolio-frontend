import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className='bg-background text-foreground min-h-screen flex flex-col'>
      <header className='bg-card'>
        <nav className='container p-4 mx-auto flex justify-between items-center'>
          <Link to='/' className='text-xl font-bold'>
            Архимаги
          </Link>
          <div>
            <Link to='/practices' className='mr-4'>
              Практические
            </Link>
            <Link to='/labs' className='mr-4'>
              Лабораторные
            </Link>
            <Link to='/practice-pages' className='mr-4'>
              Практические страницы
            </Link>
            <Link to='/sites' className='mr-4'>
              Сайты
            </Link>
            <a
              href='/referat.docx'
              className='mr-4'
              target='_blank'
              rel='noreferrer'
            >
              Реферат
            </a>
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
