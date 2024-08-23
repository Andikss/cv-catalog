import { Flex, Heading } from '@chakra-ui/react';

export const Topbar = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      top="24px"
      left="50%"               
      transform="translateX(-50%)" 
      width="94%"
      bg="rgba(240, 240, 240, 0.8)" 
      color="gray.600"
      py={4}
      px={8}
      boxShadow="md"
      zIndex="1000"
      borderRadius="15px"
    >
      <Heading size="md">Toploker</Heading>
    </Flex>
    );
};