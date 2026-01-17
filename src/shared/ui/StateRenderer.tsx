import React from 'react';

type StateRendererProps<T> = {
  loading: boolean;
  error: Error | null;
  data: T | T[] | undefined | null;
  children: React.ReactNode;
  loadingMessage?: string;
  errorMessage?: string;
  notFoundMessage?: string;
};

export const StateRenderer = <T,>({
  loading,
  error,
  data,
  children,
  loadingMessage = 'Загрузка...',
  errorMessage = 'Ошибка при загрузке данных',
  notFoundMessage = 'Данные не найдены',
}: StateRendererProps<T>) => {
  if (loading) {
    return <p>{loadingMessage}</p>;
  }

  if (error) {
    return (
      <p>
        {errorMessage}: {error.message}
      </p>
    );
  }

  const dataExists = Array.isArray(data) ? data.length > 0 : data;

  if (!dataExists) {
    return <p>{notFoundMessage}</p>;
  }

  return <>{children}</>;
};
