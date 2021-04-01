import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import React from 'react';
import SecondaryButton from '../SecondaryButton';

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SecondaryButton onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </SecondaryButton>
  );
};

export default SwitchThemeButton;
