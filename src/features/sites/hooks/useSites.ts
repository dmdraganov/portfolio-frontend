import { useData } from '@/shared/hooks/useData';
import { useConfig } from '@/shared/hooks/useConfig';
import { Site, SitePage, WorkCollection } from '@/shared/types';
import { getWorkUrl } from '@/shared/utils/url';
import { useMemo } from 'react';

type JsonSitePage = Omit<SitePage, 'url'> & { path: string };
type JsonSite = Omit<Site, 'pages'> & { pages: JsonSitePage[] };

export const useSites = () => {
  const { config, loading: configLoading, error: configError } = useConfig();
  const {
    data: worksCollection,
    loading: worksLoading,
    error: worksError,
  } = useData<WorkCollection<JsonSite>>('/data/sites.json');

  const sites = useMemo((): Site[] => {
    if (!worksCollection || !config) {
      return [];
    }
    return worksCollection.items.map((site) => ({
      ...site,
      pages: site.pages.map((page) => ({
        ...page,
        url: getWorkUrl(config.worksRoot, worksCollection.basePath, page.path),
        references: page.references.map((ref) =>
          getWorkUrl(config.worksRoot, worksCollection.basePath, ref)
        ),
      })),
    }));
  }, [worksCollection, config]);

  return {
    sites,
    loading: configLoading || worksLoading,
    error: configError || worksError,
  };
};

export const useSite = (name: string) => {
  const { sites, loading, error } = useSites();
  const site = useMemo(() => sites.find((s) => s.name === name), [sites, name]);

  return { site, loading, error };
};
