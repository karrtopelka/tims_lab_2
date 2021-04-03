import { Heading } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import NeedToCombine from '../NeedToCombine';
import Statter from '../Statter';
import {
  selectA,
  selectNSum,
  selectP,
  selectSigma,
  selectEmpirichne,
  selectKritichne,
} from '../../features/inputs';

const ExerciseOneStats = () => {
  const nSum = useSelector(selectNSum);
  const a = useSelector(selectA);
  const sigma = useSelector(selectSigma);
  const p = useSelector(selectP);
  const empirichne = useSelector(selectEmpirichne);
  const kritichne = useSelector(selectKritichne);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w="full"
      p="2"
      mb="10"
    >
      <Heading textAlign="center">Статистика</Heading>
      <Divider my="2" />
      <Box p="2">
        <Statter label="Сума вибірки" value={nSum} />
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
        </Heading>
      </Box>
    </Box>
  );
};

export default ExerciseOneStats;
