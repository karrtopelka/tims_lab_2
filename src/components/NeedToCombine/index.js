import { Heading } from '@chakra-ui/layout';
import { TableCaption } from '@chakra-ui/table';
import { Thead } from '@chakra-ui/table';
import { Th } from '@chakra-ui/table';
import { Td } from '@chakra-ui/table';
import { Tbody } from '@chakra-ui/table';
import { Tr } from '@chakra-ui/table';
import { Table } from '@chakra-ui/table';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCombined } from '../../features/inputs';

const NeedToCombine = () => {
  const need = useSelector(selectCombined);

  return (
    <>
      <Heading size="md">
        {need.length
          ? 'Треба обьєднувати (один або быльше з nPi <= 10)'
          : 'Не треба обьєднувати'}
      </Heading>
      {need && (
        <Table>
          <TableCaption placement="top">Об'єднані інтервали</TableCaption>
          <Thead>
            <Tr>
              <Th>Інтервал</Th>
              <Th>ni</Th>
              <Th>Pi</Th>
            </Tr>
          </Thead>
          <Tbody>
            {need.map((i) => (
              <Tr key={i[0]}>
                <Td>
                  {i[0]} - {i[1]}
                </Td>
                <Td>{i[2]}</Td>
                <Td>{i[3]}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default NeedToCombine;
