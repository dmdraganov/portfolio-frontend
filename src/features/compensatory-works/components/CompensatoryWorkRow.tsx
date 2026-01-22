// src/features/compensatory-works/components/CompensatoryWorkRow.tsx
import { CompensatoryWork } from '@/shared/types';
import { useCode } from '../hooks/useCode';
import { StateRenderer } from '@/shared/ui/StateRenderer';

type CompensatoryWorkRowProps = {
  work: CompensatoryWork;
};

const CompensatoryWorkRow = ({ work }: CompensatoryWorkRowProps) => {
  const { code, loading, error } = useCode(work.codeUrl);

  const handleExecute = () => {
    try {
      // Using new Function() is a bit safer than eval, but still a security risk.
      new Function(code)();
    } catch (e) {
      alert(`Error executing code: ${e}`);
    }
  };

  return (
    <tr className='border-b border-secondary'>
      <td className='p-4'>{work.number}</td>
      <td className='p-4'>{work.text}</td>
      <td className='p-4'>
        <StateRenderer loading={loading} error={error} data={code}>
          <pre className='border border-primary bg-background-secondary p-3 rounded-lg'>
            <code>{code}</code>
          </pre>
        </StateRenderer>
      </td>
      <td className='p-4'>
        <button
          onClick={handleExecute}
          className='bg-primary p-2 rounded-sm hover:bg-secondary hover:cursor-pointer transition-colors'
        >
          Выполнить
        </button>
      </td>
    </tr>
  );
};

export default CompensatoryWorkRow;
