// src/features/essays/pages/EssaysPage.tsx
import { useEssays } from '../hooks/useEssays';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const EssaysPage = () => {
  const { essays, loading, error } = useEssays();

  return (
    <section className='container mx-auto'>
        <h1 className='text-5xl font-bold mb-4'>Рефераты</h1>
        <StateRenderer
          loading={loading}
          error={error}
          data={essays}
          notFoundMessage='Рефераты не найдены'
        >
          <div className='flex flex-col gap-4'>
            {essays.map((essay) => (
              <LinkButton key={essay.number} href={essay.pdfUrl}>
                Реферат №{essay.number}
              </LinkButton>
            ))}
          </div>
        </StateRenderer>
      </section>
  );
};

export default EssaysPage;
