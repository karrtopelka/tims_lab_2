import { Heading } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const ExerciseTwoStatsHeading = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w="full"
      p="2"
      my="10"
    >
      <Heading textAlign="center">Статистика (Рівномірний закон)</Heading>
      <Divider my="2" />
      <Box p="2">
        <Text>
          Оскільки я хочу використовувати рівномірний закон, який діє на
          інтервалах, то я переробив значення, тобто таблиця з якою я буду
          працювати виглядає так
        </Text>
      </Box>
    </Box>
  );
};

export default ExerciseTwoStatsHeading;
