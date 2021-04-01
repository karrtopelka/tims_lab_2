import { Heading } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import DataTable from '../../components/DataTable';
import ExerciseOneStats from '../../components/ExerciseOneStats';
import FreqChart from '../../components/FreqChart';

const ExerciseOne = () => {
  return (
    <Flex direction="column" alignItems="center" w="5xl" mx="auto">
      <Heading m="9" p="1" as="h1" size="xl" borderBottom="1px solid #38B2B7">
        ЗАДАЧА 3 (варіанти 12-16)
      </Heading>
      <Text fontSize="xl" w="80%" p="2">
        Для вдосконалення організації праці на підприємствах торгівлі були
        зiбpaнi дані про peaлiзaцію за місяць товарів у магазинах міста.
        Розподіл кількості 𝑛𝑖 магазинів залежно від обсягу реалізації 𝑋 наведено
        в таблиці
      </Text>
      <Flex justify="center" p="2">
        <DataTable />
      </Flex>
      <Box w="75%" mx="auto" p="2">
        <FreqChart />
      </Box>
      <Box>
        <ExerciseOneStats />
      </Box>
    </Flex>
  );
};

export default ExerciseOne;
