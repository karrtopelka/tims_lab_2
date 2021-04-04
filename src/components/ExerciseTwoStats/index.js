import { Heading } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectEmpirichneTwo,
  selectKritichneTwo,
  selectNSumTwo,
} from '../../features/exTwo/inputs2';
import Statter from '../../components/Statter';
import { columnsExerciseTwoNew } from '../../features/dataTableEx2';
import { eachNi } from '../../features/exTwo/eachNi';
import { Select } from '@chakra-ui/select';

const obj = {
  0.99: 3.05,
  0.975: 3.82,
  0.95: 4.57,
  0.9: 5.58,
  0.1: 17.28,
  0.05: 19.68,
  0.025: 21.92,
  0.01: 24.73,
};

const ExerciseTwoStats = () => {
  const nSumTwo = useSelector(selectNSumTwo);
  const empirichneTwo = useSelector(selectEmpirichneTwo);
  const kritichneTwo = useSelector(selectKritichneTwo);
  const [option, setOption] = useState('0.99');

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
      <Divider my="5" />
      <Select
        placeholder="Виберіть альфа"
        defaultValue="0.99"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="0.99">0.99</option>
        <option value="0.975">0.975</option>
        <option value="0.95">0.950</option>
        <option value="0.9">0.9</option>
        <option value="0.1">0.1</option>
        <option value="0.05">0.05</option>
        <option value="0.025">0.025</option>
        <option value="0.01">0.01</option>
      </Select>
      <Heading as="h2" size="lg">
        {empirichneTwo > obj[option]
          ? `Рівномірний закон відхиляється ${empirichneTwo} > ${kritichneTwo}`
          : 'Рівномірний закон підтверджується'}
      </Heading>
    </Box>
  );
};

export default ExerciseTwoStats;
