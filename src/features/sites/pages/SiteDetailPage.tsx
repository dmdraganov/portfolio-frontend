// src/features/sites/pages/SiteDetailPage.tsx
import { Link, useParams } from 'react-router-dom';
import { useSite } from '../hooks/useSites';
import { StateRenderer } from '@/shared/ui/StateRenderer';

const SiteDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const { site, loading, error } = useSite(name || '');

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={site}
      notFoundMessage='Сайт не найден'
    >
      {site && (
        <section className='container mx-auto'>
          <Link
            to='/sites'
            className='mb-4 inline-block text-primary hover:text-accent'
            title='Назад к сайтам'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </Link>
          <h1 className='text-5xl font-bold mb-4'>{site.name}</h1>
          <div className='flex gap-4 mb-4'>
            <a
              href={site.repositoryUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              Репозиторий
            </a>
            <a
              href={site.figmaUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              Макет в Figma
            </a>
          </div>

          <h2 className='text-2xl font-semibold my-4'>Страницы</h2>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr>
                <th className='border-b p-4'>Cтраницы сайта</th>
                {site.referenceColumns.map((columnName) => (
                  <th key={columnName} className='border-b p-4'>
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {site.pages.map((page) => (
                <tr key={page.name}>
                  <td className='border-b p-4 align-top'>
                    <a
                      href={page.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:underline'
                    >
                      {page.name}
                    </a>
                  </td>
                  {site.referenceColumns.map((_, colIndex) => (
                    <td key={colIndex} className='border-b p-4 align-top'>
                      {page.references[colIndex] && (
                        <img
                          src={page.references[colIndex]}
                          alt={`Reference for ${page.name} column ${colIndex + 1}`}
                          className='w-48 h-auto object-cover rounded-md'
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </StateRenderer>
  );
};

export default SiteDetailPage;
