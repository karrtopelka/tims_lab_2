import { Flex } from '@chakra-ui/layout';
import { Heading } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';

const Home = () => {
  return (
    <Flex h="full" alignItems="center" justify="center" direction="column">
      <Heading as="h1" size="2xl" p="12">
        Choose exercise
      </Heading>
      <Flex w="full" justify="center">
        <Link to="/ex1">
          <PrimaryButton w="xs" m="2" size="lg">
            Exercise 1
          </PrimaryButton>
        </Link>
        <Link to="/ex2">
          <PrimaryButton w="xs" m="2" size="lg">
            Exercise 2
          </PrimaryButton>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Home;
