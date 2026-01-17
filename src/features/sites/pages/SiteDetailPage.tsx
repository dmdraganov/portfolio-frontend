// src/features/sites/pages/SiteDetailPage.tsx
import { Link, useParams } from 'react-router-dom';
import { useSite } from '../hooks/useSites';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const SiteDetailPage = () => {
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
        <section>
          <Link
            to='/sites'
            className='mb-4 inline-block text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded'
          >
            &larr; Назад к сайтам
          </Link>
          <h1 className='text-3xl font-bold mb-4'>{site.name}</h1>
          <p>
            <a
              href={site.repositoryUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              Репозиторий
            </a>
          </p>
          <p>
            <a href={site.figmaUrl} target='_blank' rel='noopener noreferrer'>
              Макет в Figma
            </a>
          </p>

          <h2 className='text-2xl font-bold my-4'>Страницы</h2>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr>
                <th className='border-b p-4'>Cтраницы сайта (ссылки)</th>
                <th className='border-b p-4'>
                  Референсы (фотографии страниц/элементов других сайтов)
                </th>
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
                  <td className='border-b p-4'>
                    <div className='flex flex-wrap gap-4'>
                      {page.references.map((ref, index) => (
                        <img
                          key={index}
                          src={ref}
                          alt={`Референс ${index + 1} для ${page.name}`}
                          className='w-48 h-auto object-cover rounded-md'
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </StateRenderer>
  );
};
