import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import { useSite } from '../hooks/useSite';

const SiteDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { site } = useSite(Number(id));

  if (!site) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Link
        to='/sites'
        className='text-accent hover:underline mb-4 inline-block'
      >
        &larr; Назад к списку сайтов
      </Link>
      <h1 className='text-3xl font-bold mb-2'>{site.title}</h1>
      <div className='bg-card rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-4'>Страницы</h2>
        <ul>
          {site.pages.map((page, index) => (
            <li key={index}>
              <a
                href={page.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-accent hover:underline'
              >
                {page.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className='text-2xl font-bold mt-6 mb-4'>Ссылки</h2>
        <a
          href={site.repositoryUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-accent hover:underline block'
        >
          Репозиторий
        </a>
        <a
          href={site.figmaUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-accent hover:underline block mt-2'
        >
          Figma
        </a>
      </div>
    </div>
  );
};

export default SiteDetailPage;
