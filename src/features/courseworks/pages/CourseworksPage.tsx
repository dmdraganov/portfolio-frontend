import { useCourseworks } from '../hooks/useCourseworks';
import { StateRenderer } from '@/shared/ui/StateRenderer';
import LinkButton from '@/shared/ui/LinkButton';

const CourseworksPage = () => {
  const { courseworks, loading, error } = useCourseworks();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={courseworks}
      notFoundMessage='Курсовые работы не найдены'
    >
      <section className='container mx-auto'>
        <h1 className='text-5xl font-bold mb-4'>Курсовые работы</h1>
        <div className='flex flex-col gap-4'>
          {courseworks.map((work) => (
            <LinkButton key={work.title} href={work.pdfUrl}>
              {work.title}
            </LinkButton>
          ))}
        </div>
      </section>
    </StateRenderer>
  );
};

export default CourseworksPage;
