
import type { FunctionComponent, ReactNode } from 'react';
import { StyledTable } from './Table.styled';

export type TableProps = {
  children?: ReactNode;
  items: {
    id: Number | string;
    data: any;
  }[];
  headers: ReactNode[];
}

export const Table: FunctionComponent<TableProps> = ({
  children,
  headers,
  items,
}) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers.map((node, i) => (
            <th key={node?.toString()}>
              {node}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, data }) => (
          <tr key={id.toString()}>
            {Object.keys(data).map((key: string) => key !== 'id' && (
              <td key={`${id}-${key}`}>
                {data[key] || <>&nbsp;</>}
              </td>
            ))}
          </tr>
        ))}
        {children}
      </tbody>
    </StyledTable>
  );
};