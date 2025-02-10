import React from "react";
export interface Column<T> {
  header: string;
  accessor: keyof T;
  render?: (value: any, row: T) => React.ReactNode;
}
interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  title?: string;
  actions?: (row: T) => React.ReactNode;
}
function Table<T>({ columns, data, title, actions }: TableProps<T>) {
  return (
    <div className="w-full bg-white rounded-lg border">
      {title && (
        <div className="px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              {columns.map((column) => (
                <th
                  key={column.header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                {columns.map((column) => {
                  const value = row[column.accessor];
                  return (
                    <td
                      key={column.accessor as string}
                      className="px-6 py-4 whitespace-nowrap"
                    >
                      {column.render
                        ? column.render(value, row)
                        : (value as React.ReactNode)}
                    </td>
                  );
                })}
                {actions && (
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
