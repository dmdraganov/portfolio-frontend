// src/features/works/pages/LabsPage.tsx
import { useLabs } from '../hooks/useLabs';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const LabsPage = () => {
  const { labs, loading, error } = useLabs();

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
          {labs.map((work) => (
            <li key={work.number}>
              <a href={work.reportUrl} target='_blank' rel='noopener noreferrer'>
                Лабораторная работа №{work.number}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};
