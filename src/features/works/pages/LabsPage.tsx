// src/features/works/pages/LabsPage.tsx
import { useWorks } from '../hooks/useWorks';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const LabsPage = () => {
  const { labs, loading, error } = useWorks();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={labs}
      notFoundMessage='Лабораторные работы не найдены'
    >
      <section>
        <h1 className='text-3xl font-bold mb-4'>Лабораторные работы</h1>
        <ul>
          {labs.flatMap((work) =>
            work.reportUrls.map((url, index) => (
              <li key={`${work.number}-${index}`}>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  Лабораторная работа №{work.number}
                </a>
              </li>
            ))
          )}
        </ul>
      </section>
    </StateRenderer>
  );
};
