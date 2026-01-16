// src/features/courseworks/pages/CourseworksPage.tsx
import { useCourseworks } from '../hooks/useCourseworks';

export const CourseworksPage = () => {
  const { courseworks, loading, error } = useCourseworks();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Курсовые работы</h1>
      <ul>
        {courseworks.map((work) => (
          <li key={work.title}>
            <a href={work.pdfUrl} target="_blank" rel="noopener noreferrer">
              {work.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
