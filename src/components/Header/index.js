import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import SwitchThemeButton from '../SwitchThemeButton';

const Header = () => {
  return (
    <Flex align="center" zIndex="100" p="4" justify="space-evenly">
      <Link to="/">
        <Logo />
      </Link>
      <SwitchThemeButton />
    </Flex>
  );
};

export default Header;
