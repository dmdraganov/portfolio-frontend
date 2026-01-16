import { useState, useEffect } from 'react';
import { Site } from '@/shared/types';

export const useSites = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSites = async () => {
      try {
        const response = await fetch('/data/sites.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Site[] = await response.json();
        setSites(data);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchSites();
  }, []);

  return { sites, loading, error };
};

export const useSite = (name: string) => {
  const [site, setSite] = useState<Site | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!name) {
      setLoading(false);
      return;
    }
    const fetchSite = async () => {
      try {
        const response = await fetch('/data/sites.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Site[] = await response.json();
        const foundSite = data.find((s) => s.name === name);
        setSite(foundSite);
      } catch (e) {
        setError(e as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchSite();
  }, [name]);

  return { site, loading, error };
};
