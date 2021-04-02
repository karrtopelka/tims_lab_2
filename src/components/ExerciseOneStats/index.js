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
} from '../../features/inputs';

const ExerciseOneStats = () => {
  const nSum = useSelector(selectNSum);
  const a = useSelector(selectA);
  const sigma = useSelector(selectSigma);
  const p = useSelector(selectP);

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
        <Statter label="Емпіричне значення статистики" value={sigma} />
      </Box>
    </Box>
  );
};

export default ExerciseOneStats;
