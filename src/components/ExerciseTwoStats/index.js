import { Heading } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const ExerciseTwoStats = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w="full"
      p="2"
      mb="10"
    >
      <Heading textAlign="center">Статистика (Рівномірний закон)</Heading>
      <Divider my="2" />
      <Box p="2">
        {/* <Statter label="Сума вибірки" value={nSum} />
        <Divider my="2" />
        <Statter label="a (Математичне сподівання)" value={a} />
        <Divider my="2" />
        <Statter label="&#963; (сігма &#8730;D)" value={sigma} />
        <Divider my="2" />
        <Statter label="P (Теоретична ймовірність)" value={p} symbol="P" />
        <Divider my="2" />
        <NeedToCombine />
        <Divider my="2" />
        <Statter label="Емпіричне значення статистики" value={empirichne} />
        <Divider my="2" />
        <Statter label="Критичне значення статистики" value={kritichne} />
        <Divider my="2" />
        <Heading as="h2" size="lg">
          {empirichne > kritichne
            ? `Нормальний закон відхиляється ${empirichne} > ${kritichne}`
            : 'Нормальний закон підтверджується'}
        </Heading> */}
      </Box>
    </Box>
  );
};

export default ExerciseTwoStats;
