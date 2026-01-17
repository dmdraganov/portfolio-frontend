// src/features/practical-pages/pages/PracticalPagesPage.tsx
import { usePracticalPages } from '../hooks/usePracticalPages';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const PracticalPagesPage = () => {
  const { practicalPages, loading, error } = usePracticalPages();
  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={practicalPages}
      notFoundMessage='Практические страницы не найдены'
    >
      <section>
        <h1 className='text-3xl font-bold mb-4'>Практические страницы</h1>
        <ul>
          {practicalPages.map((lab) => (
            <li key={lab.labNumber}>
              К лабораторной работе №{lab.labNumber}
              <ul>
                {lab.pages.map((page) => (
                  <li key={page.name}>
                    <a
                      href={page.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {page.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};
