import { Text } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/layout';
import React from 'react';

const FreqChartTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        backgroundColor="white"
        borderColor="teal.300"
        borderWidth="1px"
        textAlign="center"
      >
        <Text color="gray.700" py="1" px="2">
          {label}
        </Text>
        <Text color="teal.600" py="1" px="2">
          val : {payload[0].value}
        </Text>
      </Box>
    );
  }

  return null;
};

export default FreqChartTooltip;
