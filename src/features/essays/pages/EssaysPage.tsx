// src/features/essays/pages/EssaysPage.tsx
import { useEssays } from '../hooks/useEssays';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const EssaysPage = () => {
  const { essays, loading, error } = useEssays();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={essays}
      notFoundMessage='Рефераты не найдены'
    >
      <section>
        <h1 className='text-3xl font-bold mb-4'>Рефераты</h1>
        <ul>
          {essays.map((essay) => (
            <li key={essay.number}>
              <a href={essay.pdfUrl} target='_blank' rel='noopener noreferrer'>
                Реферат №{essay.number}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};
