import { Button } from '@chakra-ui/button';
import React from 'react';

const PrimaryButton = ({ children, onClick, disabled, ...rest }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      backgroundColor="teal.300"
      borderWidth="1px"
      borderColor="transparent"
      _hover={
        !disabled && {
          color: 'teal.400',
          background: 'white',
          borderColor: 'teal.400',
        }
      }
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
