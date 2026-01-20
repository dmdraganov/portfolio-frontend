// src/features/sites/pages/SitesPage.tsx
import { useSites } from '../hooks/useSites';
import { Link } from 'react-router-dom';
import { StateRenderer } from '@/shared/ui/StateRenderer';

const SitesPage = () => {
  const { sites, loading, error } = useSites();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={sites}
      notFoundMessage='Сайты не найдены'
    >
      <section className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>Сайты</h1>
        <ul>
          {sites.map((site) => (
            <li key={site.name}>
              <Link to={`/sites/${encodeURIComponent(site.name)}`}>
                {site.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};

export default SitesPage;
