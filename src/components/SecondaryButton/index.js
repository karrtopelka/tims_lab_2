import { Button } from '@chakra-ui/button';
import React from 'react';

const SecondaryButton = ({ children, onClick, disabled, ...rest }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      borderWidth="1px"
      borderColor="transparent"
      _hover={{
        borderColor: 'teal.400',
        background: '#E2E8F0',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
