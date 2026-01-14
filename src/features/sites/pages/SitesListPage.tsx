import React from 'react';
import Card from '../../../shared/ui/Card';
import { useSites } from '../hooks/useSites';

const SitesListPage: React.FC = () => {
  const { sites: sitesData, loading, error } = useSites();

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Список сайтов</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {sitesData.map((site) => (
          <Card key={site.id} title={site.title} linkTo={`/sites/${site.id}`}>
            <a
              href={site.repositoryUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:underline'
            >
              Репозиторий
            </a>
            <br />
            <a
              href={site.figmaUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent hover:underline'
            >
              Figma
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SitesListPage;
