// src/features/practical-pages/pages/PracticalPagesPage.tsx
import { usePracticalPages } from '../hooks/usePracticalPages';
import { StateRenderer } from '@/shared/ui/StateRenderer';

const PracticalPagesPage = () => {
  const { practicalPages, loading, error } = usePracticalPages();
  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={practicalPages}
      notFoundMessage='Практические страницы не найдены'
    >
      <section className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>Практические страницы</h1>
        <ul>
          {practicalPages.map((page) => (
            <li key={page.labNumber}>
              <a href={page.url} target='_blank' rel='noopener noreferrer'>
                К лабораторной работе №{page.labNumber}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};

export default PracticalPagesPage;
