// src/features/works/pages/PracticesPage.tsx
import { useWorks } from '../hooks/useWorks';

export const PracticesPage = () => {
  const { practices, loading, error } = useWorks();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Практические работы</h1>
      <ul>
        {practices.flatMap((work) =>
          work.reportUrls.map((url, index) => (
            <li key={`${work.number}-${index}`}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Практическая работа №{work.number}
              </a>
            </li>
          )),
        )}
      </ul>
    </section>
  );
};
