// src/features/courseworks/pages/CourseworksPage.tsx
import { useCourseworks } from '../hooks/useCourseworks';
import { StateRenderer } from '@/shared/ui/StateRenderer';

export const CourseworksPage = () => {
  const { courseworks, loading, error } = useCourseworks();

  return (
    <StateRenderer
      loading={loading}
      error={error}
      data={courseworks}
      notFoundMessage='Курсовые работы не найдены'
    >
      <section>
        <h1 className='text-3xl font-bold mb-4'>Курсовые работы</h1>
        <ul>
          {courseworks.map((work) => (
            <li key={work.title}>
              <a href={work.pdfUrl} target='_blank' rel='noopener noreferrer'>
                {work.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </StateRenderer>
  );
};
