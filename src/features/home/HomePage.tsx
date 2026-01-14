import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className='text-center py-20'>
      <h1 className='text-4xl font-bold mb-4'>Добро пожаловать в портфолио!</h1>
      <p className='text-lg text-muted-foreground mb-8'>
        Здесь собраны учебные и практические работы, а также готовые сайты.
      </p>
      <div className='flex flex-wrap gap-4 justify-center'>
        <Link
          to='/works'
          className='bg-primary hover:bg-primary-hover text-foreground font-bold py-2 px-4 rounded whitespace-'
        >
          Смотреть работы
        </Link>
        <Link
          to='/sites'
          className='bg-secondary hover:bg-secondary-hover text-foreground font-bold py-2 px-4 rounded whitespace-nowrap'
        >
          Смотреть сайты
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
