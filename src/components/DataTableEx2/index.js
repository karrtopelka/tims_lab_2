import { TableCaption } from '@chakra-ui/table';
import { Tr } from '@chakra-ui/table';
import { Tbody } from '@chakra-ui/table';
import { Td } from '@chakra-ui/table';
import { Th } from '@chakra-ui/table';
import { Thead } from '@chakra-ui/table';
import { Table } from '@chakra-ui/table';
import React from 'react';
import { DATA, columnsExerciseTwo } from '../../features/dataTableEx2';

const DataTableEx2 = () => {
  return (
    <Table size="md" variant="simple" mt="2" mb="2">
      <TableCaption placement="top">
        Розподіл кількості залежно від обсягу реалізації X
      </TableCaption>
      <Thead>
        <Tr>
          {columnsExerciseTwo.map((column) => (
            <Th key={column.property}>{column.header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {Object.values(DATA[0]).map((row, i) => (
            <Td key={i}>{row}</Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  );
};

export default DataTableEx2;
