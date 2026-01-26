// src/features/sites/pages/SitesPage.tsx
import { useSites } from '../hooks/useSites';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const SitesPage = () => {
  const { sites, loading, error } = useSites();

  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Сайты</h1>
      <StateRenderer
        loading={loading}
        error={error}
        data={sites}
        notFoundMessage='Сайты не найдены'
      >
        <div className='flex flex-col gap-4'>
          {sites.map((site) => (
            <LinkButton
              key={site.name}
              to={`/sites/${encodeURIComponent(site.name)}`}
            >
              {site.name}
            </LinkButton>
          ))}
        </div>
      </StateRenderer>
    </section>
  );
};

export default SitesPage;
