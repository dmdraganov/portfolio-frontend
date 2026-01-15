import React, { useState, useMemo } from 'react';
import Card from '../../../shared/ui/Card';
import { useWorks } from '../hooks/useWorks';

const workTypeMap: Record<string, string> = {
  practice: 'Практические',
  lab: 'Лабораторные',
  educational: 'Учебные',
};

interface WorkTypePageProps {
  workType: 'practice' | 'lab';
  title: string;
}

const WorkTypePage: React.FC<WorkTypePageProps> = ({ workType, title }) => {
  const { works: worksData } = useWorks();
  const [filterWorkNumber, setFilterWorkNumber] = useState('');

  const filteredWorks = useMemo(() => {
    let filtered = worksData.filter((work) => work.type === workType);

    if (filterWorkNumber) {
      filtered = filtered.filter((work) =>
        work.workNumber.toString().includes(filterWorkNumber)
      );
    }

    return filtered;
  }, [worksData, workType, filterWorkNumber]);

  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>{title}</h1>
      <div className='flex gap-4 mb-4 items-center'>
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
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredWorks.map((work) => {
          const workType = workTypeMap[work.type];
          return (
            <Card
              key={work.id}
              title={workType + '  №' + work.workNumber}
              linkTo={`/works/${work.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default WorkTypePage;
