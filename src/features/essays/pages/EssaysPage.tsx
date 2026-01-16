// src/features/essays/pages/EssaysPage.tsx
import { useEssays } from '../hooks/useEssays';

export const EssaysPage = () => {
  const { essays, loading, error } = useEssays();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Рефераты</h1>
      <ul>
        {essays.map((essay) => (
          <li key={essay.number}>
            <a href={essay.pdfUrl} target="_blank" rel="noopener noreferrer">
              Реферат №{essay.number}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
