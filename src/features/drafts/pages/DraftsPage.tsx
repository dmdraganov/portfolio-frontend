// src/features/drafts/pages/DraftsPage.tsx
import { useDrafts } from '../hooks/useDrafts';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const DraftsPage = () => {
  const { drafts, loading, error } = useDrafts();

  return (
    <section className='container mx-auto'>
      <h1 className='text-5xl font-bold mb-4'>Наработки</h1>
      <StateRenderer
        loading={loading}
        error={error}
        data={drafts}
        notFoundMessage='Наработки не найдены'
      >
        <div className='flex flex-col gap-4'>
          {drafts.map((draft) => (
            <LinkButton key={draft.title} href={draft.url}>
              {draft.title}
            </LinkButton>
          ))}
        </div>
      </StateRenderer>
    </section>
  );
};

export default DraftsPage;
