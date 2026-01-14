import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFoundPage from '../../NotFoundPage/NotFoundPage';
import { useWork } from '../hooks/useWork';

const workTypeMap: Record<string, string> = {
  practice: 'Практические',
  lab: 'Лабораторные',
  educational: 'Учебные',
};

const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { work, loading, error } = useWork(Number(id));

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (!work) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <Link
        to='/works'
        className='text-accent hover:underline mb-4 inline-block'
      >
        &larr; Назад к списку работ
      </Link>
      <h1 className='text-3xl font-bold mb-2'>{work.title}</h1>
      <p className='text-muted-foreground mb-4'>Автор: {work.author}</p>
      <div className='bg-card rounded-lg p-6'>
        <p>
          <span className='font-bold'>Номер работы:</span> {work.workNumber}
        </p>
        <p>
          <span className='font-bold'>Тип:</span>{' '}
          {workTypeMap[work.type] || work.type}
        </p>
        <p className='mt-4'>{work.description}</p>
        {work.codeUrl && (
          <a
            href={work.codeUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-accent hover:underline mt-4 inline-block'
          >
            Ссылка на код
          </a>
        )}
        {work.reportUrl && (
          <a
            href={work.reportUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-accent hover:underline mt-2 inline-block'
          >
            Ссылка на отчет
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkDetailPage;
