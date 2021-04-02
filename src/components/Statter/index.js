import { Text } from '@chakra-ui/layout';
import { StatLabel } from '@chakra-ui/stat';
import { StatNumber } from '@chakra-ui/stat';
import { Stat } from '@chakra-ui/stat';
import React from 'react';

const Statter = ({ label, value, symbol, ...rest }) => {
  return (
    <Stat {...rest}>
      <StatLabel fontSize="xl">{label}</StatLabel>
      <StatNumber fontSize={typeof value === 'number' ? '3xl' : 'lg'}>
        {typeof value === 'number' ? (
          value
        ) : (
          <>
            {value.map((val, i) => (
              <Text key={val}>
                P{i + 1} = {val}
              </Text>
            ))}
          </>
        )}
      </StatNumber>
    </Stat>
  );
};

export default Statter;
