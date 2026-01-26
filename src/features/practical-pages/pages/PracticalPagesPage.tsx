// src/features/practical-pages/pages/PracticalPagesPage.tsx
import { usePracticalPages } from '../hooks/usePracticalPages';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const PracticalPagesPage = () => {
  const { practicalPages, loading, error } = usePracticalPages();
  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Практические страницы</h1>
      <StateRenderer
        loading={loading}
        error={error}
        data={practicalPages}
        notFoundMessage='Практические страницы не найдены'
      >
        <div className='flex flex-col gap-4'>
          {practicalPages.map((page) => (
            <LinkButton key={page.labNumber} href={page.url}>
              К лабораторной работе №{page.labNumber}
            </LinkButton>
          ))}
        </div>
      </StateRenderer>
    </section>
  );
};

export default PracticalPagesPage;
