import React, { useState, useMemo } from 'react';
import type { Work } from '../types';
import Card from '../../../shared/ui/Card';
import { useWorks } from '../hooks/useWorks';

const workTypeMap: Record<string, string> = {
  practice: 'Практические',
  lab: 'Лабораторные',
  educational: 'Учебные',
};

const WorksListPage: React.FC = () => {
  const { works: worksData, loading, error } = useWorks();
  const [filterWorkType, setFilterWorkType] = useState('all');
  const [filterWorkNumber, setFilterWorkNumber] = useState('');
  const [filterAuthor, setFilterAuthor] = useState('all');

  const workTypes = useMemo(() => {
    const uniqueTypes = new Set(worksData.map((work) => work.type));
    return ['all', ...Array.from(uniqueTypes)];
  }, [worksData]);

  const authors = useMemo(() => {
    const uniqueAuthors = new Set(worksData.map((work) => work.author));
    return [
      'all',
      ...Array.from(uniqueAuthors).sort((a, b) => a.localeCompare(b)),
    ];
  }, [worksData]);

  const filteredWorks = useMemo(() => {
    let filtered = worksData;

    if (filterWorkType !== 'all') {
      filtered = filtered.filter((work) => work.type === filterWorkType);
    }

    if (filterWorkNumber) {
      filtered = filtered.filter((work) =>
        work.workNumber.toString().includes(filterWorkNumber)
      );
    }

    if (filterAuthor !== 'all') {
      filtered = filtered.filter((work) => work.author === filterAuthor);
    }

    return filtered;
  }, [worksData, filterWorkType, filterWorkNumber, filterAuthor]);

  const worksByAuthor = useMemo(() => {
    const grouped: Record<string, Work[]> = {};
    filteredWorks.forEach((work) => {
      if (!grouped[work.author]) {
        grouped[work.author] = [];
      }
      grouped[work.author].push(work);
    });
    return grouped;
  }, [filteredWorks]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Список работ</h1>
      <div className='flex gap-4 mb-4 items-center'>
        <select
          value={filterWorkType}
          onChange={(e) => setFilterWorkType(e.target.value)}
          className='p-2 bg-input rounded'
        >
          {workTypes.map((type) => (
            <option key={type} value={type}>
              {type === 'all' ? 'Все типы' : workTypeMap[type] || type}
            </option>
          ))}
        </select>
        <div className='relative'>
          <input
            type='number'
            placeholder='Фильтр по номеру'
            value={filterWorkNumber}
            onChange={(e) => setFilterWorkNumber(e.target.value)}
            className='p-2 bg-input rounded'
            min='1'
          />
        </div>
        <select
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
          className='p-2 bg-input rounded'
        >
          {authors.map((author) => (
            <option key={author} value={author}>
              {author === 'all' ? 'Все авторы' : author}
            </option>
          ))}
        </select>
      </div>
      {Object.entries(worksByAuthor)
        .sort()
        .map(([author, works]) => (
          <section key={author} className='mb-8'>
            <h2 className='text-xl font-bold mb-4'>{author}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {works.map((work) => (
                <Card
                  key={work.id}
                  title={work.title}
                  linkTo={`/works/${work.id}`}
                >
                  <p>Номер работы: {work.workNumber}</p>
                  <p>Тип: {workTypeMap[work.type] || work.type}</p>
                </Card>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
};
export default WorksListPage;
