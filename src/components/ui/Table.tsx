import React from 'react';

export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  emptyText?: string;
  className?: string;
  striped?: boolean;
  hover?: boolean;
}

export function Table<T = any>({
  columns,
  data,
  loading = false,
  emptyText = 'No data available',
  className = '',
  striped = true,
  hover = true,
}: TableProps<T>) {
  const baseStyles = 'w-full';
  const stripedClass = striped ? 'even:bg-gray-50 dark:even:bg-gray-700/50' : '';
  const hoverClass = hover ? 'hover:bg-gray-50 dark:hover:bg-gray-700/50' : '';

  if (loading) {
    return (
      <div className={`${baseStyles} ${className}`}>
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={`${baseStyles} ${className}`}>
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          {emptyText}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseStyles} ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`py-4 px-4 text-left font-medium text-gray-700 dark:text-gray-300 ${
                    column.align === 'center' ? 'text-center' : 
                    column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ width: column.width }}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 dark:border-gray-700 ${stripedClass} ${hoverClass}`}
              >
                {columns.map((column) => {
                  const value = column.dataIndex ? record[column.dataIndex] : record;
                  const content = column.render ? column.render(value, record, index) : value;
                  
                  return (
                    <td
                      key={column.key}
                      className={`py-4 px-4 ${
                        column.align === 'center' ? 'text-center' : 
                        column.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
