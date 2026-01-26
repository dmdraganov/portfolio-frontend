// src/features/compensatory-works/pages/CompensatoryWorksPage.tsx
import { useCompensatoryWorks } from '../hooks/useCompensatoryWorks';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import CompensatoryWorkRow from '../components/CompensatoryWorkRow';

const CompensatoryWorksPage = () => {
  const { compensatoryWorks, loading, error } = useCompensatoryWorks();

  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Отработки</h1>
      <StateRenderer
        loading={loading}
        error={error}
        data={compensatoryWorks}
        notFoundMessage='Отработки не найдены'
      >
        <table className='w-full text-left border-collapse'>
          <thead className='bg-background-secondary'>
            <tr className='border-b border-foreground'>
              <th className='p-4 rounded-tl-xl'>№</th>
              <th className='p-4'>Задание</th>
              <th className='p-4'>Код</th>
              <th className='p-4'>Действие</th>
            </tr>
          </thead>
          <tbody>
            {compensatoryWorks.map((work) => (
              <CompensatoryWorkRow key={work.number} work={work} />
            ))}
          </tbody>
        </table>
      </StateRenderer>
    </section>
  );
};

export default CompensatoryWorksPage;
