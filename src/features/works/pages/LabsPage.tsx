// src/features/works/pages/LabsPage.tsx
import { useLabs } from '../hooks/useLabs';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const LabsPage = () => {
  const { labs, loading, error } = useLabs();

  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Лабораторные работы</h1>
      <StateRenderer
        loading={loading}
        error={error}
        data={labs}
        notFoundMessage='Лабораторные работы не найдены'
      >
        <div className='flex flex-col gap-4'>
          {labs.map((work) => (
            <LinkButton key={work.number} href={work.reportUrl}>
              Лабораторная работа №{work.number}
            </LinkButton>
          ))}
        </div>
      </StateRenderer>
    </section>
  );
};

export default LabsPage;
