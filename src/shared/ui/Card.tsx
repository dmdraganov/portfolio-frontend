import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  children?: React.ReactNode;
  linkTo: string;
}

const Card: React.FC<CardProps> = ({ title, linkTo, children }) => {
  return (
    <div className='bg-card rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105'>
      <div className='flex-grow'>
        <h2 className='text-xl font-bold mb-2'>{title}</h2>
        {children}
      </div>
      <Link to={linkTo} className='text-accent hover:underline mt-4 self-start'>
        Подробнее
      </Link>
    </div>
  );
};

export default Card;
