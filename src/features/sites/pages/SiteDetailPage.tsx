// src/features/sites/pages/SiteDetailPage.tsx
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSite } from '../hooks/useSites';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import Modal from '@/shared/ui/Modal'; // Import the new Modal component
import ArrowIcon from '@/assets/icons/arrow.svg?react';

const SiteDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const { site, loading, error } = useSite(name || '');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageUrl(null);
  };

  return (
    <>
      <section className='container mx-auto'>
        <Link
          to='/sites'
          className='flex gap-1 mb-4 items-center text-primary hover:text-accent'
          title='Назад к сайтам'
        >
          <ArrowIcon className='h-6 w-6' />
          <span>Назад</span>
        </Link>
        <h1 className='text-5xl font-bold mb-4'>{name}</h1>
        <StateRenderer
          loading={loading}
          error={error}
          data={site}
          notFoundMessage='Сайт не найден'
        >
          {site && (
            <>
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
              <h2 className='text-2.5xl font-semibold my-4'>Страницы</h2>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr>
                    <th className='border-b p-4'>Cтраница сайта</th>
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
                            <button
                              onClick={() =>
                                openModal(page.references[colIndex])
                              }
                              className='text-foreground hover:text-primary hover:cursor-pointer'
                            >
                              Показать фото
                            </button>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </StateRenderer>
      </section>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={currentImageUrl}
      />
    </>
  );
};

export default SiteDetailPage;
