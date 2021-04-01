import { useColorMode } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { columnsExerciseOne, DATA } from '../../features/dataTableEx1';
import FreqChartTooltip from '../FreqChartTooltip';
import PrimaryButton from '../PrimaryButton';

const FreqChart = () => {
  const { colorMode } = useColorMode();
  const [type, setType] = useState('line');
  const ff = [];
  for (let i = 1; i < 11; i++) {
    let obj = {};
    obj['name'] = columnsExerciseOne[i].header;
    obj['val'] = DATA[0][`p${i}`];
    ff.push(obj);
  }

  return (
    <Box>
      <ResponsiveContainer width="100%" height={400}>
        {type === 'line' ? (
          <AreaChart
            width={750}
            height={400}
            data={ff}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke={colorMode === 'light' ? '#ddd' : '#dddddd15'}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={(props) => <FreqChartTooltip {...props} />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="val"
              stroke="#38B2B7"
              fill={colorMode === 'light' ? '#38B2B740' : '#38B2B7'}
              activeDot={{ r: 3 }}
            />
          </AreaChart>
        ) : (
          <BarChart
            width={750}
            height={400}
            data={ff}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              stroke={colorMode === 'light' ? '#ddd' : '#dddddd15'}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={(props) => <FreqChartTooltip {...props} />} />
            <Legend />
            <Bar dataKey="val" fill="#38B2B7" />
          </BarChart>
        )}
      </ResponsiveContainer>
      <Box
        alignSelf="center"
        width="large"
        pad="medium"
        justify="center"
        align="center"
        mt="2"
      >
        <PrimaryButton
          onClick={() => setType(type === 'line' ? 'bar' : 'line')}
        >
          Change chart type
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default FreqChart;
