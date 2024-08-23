import PropTypes from 'prop-types';
import { Box, Text } from '@chakra-ui/react';

export const Detail = ({ title, description, icon: Icon }) => {
  return (
    <Box
      p={4}
      width="100%"
      borderRadius="md"
      transition="background-color 0.3s"
      _hover={{ backgroundColor: 'teal.100' }} 
    >
      {Icon && <Icon fontSize="x-large" color='teal' />}
      <Text fontWeight="bold" mt={4} mb={2}>
        {title}
      </Text>
      <Text opacity={0.7} fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.elementType,
};