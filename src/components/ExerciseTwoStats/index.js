import { Heading } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectEmpirichneTwo,
  selectKritichneTwo,
  selectNSumTwo,
} from '../../features/exTwo/inputs2';
import Statter from '../../components/Statter';
import { columnsExerciseTwoNew } from '../../features/dataTableEx2';
import { eachNi } from '../../features/exTwo/eachNi';

const ExerciseTwoStats = () => {
  const nSumTwo = useSelector(selectNSumTwo);
  const empirichneTwo = useSelector(selectEmpirichneTwo);
  const kritichneTwo = useSelector(selectKritichneTwo);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w="full"
      p="2"
      my="10"
    >
      <Heading textAlign="center">Статистика</Heading>
      <Divider my="2" />
      <Statter label="Кінці інтервалів відомі:" value="[0 - 12]" />
      <Divider my="2" />
      <Statter
        label="Pi"
        value={`1/${columnsExerciseTwoNew.length - 1} => ${parseFloat(
          (1 / (columnsExerciseTwoNew.length - 1)).toFixed(5),
        )}`}
      />
      <Divider my="2" />
      <Statter
        label="Кількість классів (r+1)"
        value={columnsExerciseTwoNew.length - 1}
      />
      <Divider my="2" />
      <Statter label="Сума вибірки" value={nSumTwo} />
      <Divider my="2" />
      <Statter
        label={
          <>
            <i>i</i> буде
          </>
        }
        value={`від 1 до 12`}
      />
      <Divider my="2" />
      <Statter
        label="npi"
        value={`${nSumTwo} / ${columnsExerciseTwoNew.length - 1} =>
        ${parseFloat(
          (nSumTwo / (columnsExerciseTwoNew.length - 1)).toFixed(2),
        )}`}
      />
      <Statter label="Емпіричне значення статистики" value={empirichneTwo} />
      <Divider my="2" />
      <Statter label="Всі ni > 5?" value={eachNi()} />
      <Statter
        label="npi >= 10?"
        value={
          nSumTwo / (columnsExerciseTwoNew.length - 1) >= 10 ? 'Так' : 'Ні'
        }
      />
      <Divider my="2" />
      <Statter label="Критичне значення статистики" value={kritichneTwo} />
      <Divider my="2" />
      <Heading as="h2" size="lg">
        {empirichneTwo > kritichneTwo
          ? `Рівномірний закон відхиляється ${empirichneTwo} > ${kritichneTwo}`
          : 'Рівномірний закон підтверджується'}
      </Heading>
      <Divider my="2" />
    </Box>
  );
};

export default ExerciseTwoStats;
