import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import DataTableEx2 from '../../components/DataTableEx2';
import FreqChartEx2 from '../../components/FreqChartEx2';
import ExerciseTwoStats from '../../components/ExerciseTwoStats';

const ExerciseTwo = () => {
  return (
    <Flex direction="column" alignItems="center" w="5xl" mx="auto">
      <Heading m="9" p="1" as="h1" size="xl" borderBottom="1px solid #38B2B7">
        ЗАДАЧА 8 (варіанти 12-16)
      </Heading>
      <Text fontSize="xl" w="80%" p="2">
        У деякій місцевості було зiбpaнодані про народжуваність дітей впродовж
        року. Розподіл кількості новонароджених 𝑛𝑖 залежно від місяця року
        відображено в таблиці.
      </Text>
      <Flex justify="center" p="2">
        <DataTableEx2 />
      </Flex>
      <Box w="75%" mx="auto" p="2">
        <FreqChartEx2 />
      </Box>
      <Box w="75%" mx="auto" p="2">
        <ExerciseTwoStats />
      </Box>
    </Flex>
  );
};

export default ExerciseTwo;
