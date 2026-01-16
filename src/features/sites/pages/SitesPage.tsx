// src/features/sites/pages/SitesPage.tsx
import { useSites } from '../hooks/useSites';
import { Link } from 'react-router-dom';

export const SitesPage = () => {
  const { sites, loading, error } = useSites();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Сайты</h1>
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
  );
};
