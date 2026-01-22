// src/features/works/pages/PracticesPage.tsx
import { usePractices } from '../hooks/usePractices';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const PracticesPage = () => {
  const { practices, loading, error } = usePractices();

  return (
    <section className='container mx-auto'>
        <h1 className='text-5xl font-bold mb-4'>Практические работы</h1>
        <StateRenderer
          loading={loading}
          error={error}
          data={practices}
          notFoundMessage='Практические работы не найдены'
        >
          <div className='flex flex-col gap-4'>
            {practices.map((work) => (
              <LinkButton key={work.number} href={work.reportUrl}>
                Практическая работа №{work.number}
              </LinkButton>
            ))}
          </div>
        </StateRenderer>
      </section>
  );
};

export default PracticesPage;
