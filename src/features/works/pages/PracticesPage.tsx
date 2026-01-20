// src/features/works/pages/PracticesPage.tsx
import { usePractices } from '../hooks/usePractices';
import { StateRenderer } from '@/shared/ui/StateRenderer';

const PracticesPage = () => {
  const { practices, loading, error } = usePractices();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={practices}
      notFoundMessage='Практические работы не найдены'
    >
      <section className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>Практические работы</h1>
        <ul>
          {practices.map((work) => (
            <li key={work.number}>
              <a href={work.reportUrl} target='_blank' rel='noopener noreferrer'>
                Практическая работа №{work.number}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};

export default PracticesPage;
