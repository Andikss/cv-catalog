import { Center, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export const Stat = ({ total, title, description }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(total, 10);
    if (start === end) return;

    const duration = 100;
    const stepTime = Math.abs(Math.floor(duration / end));
    let current = start;
    const increment = () => {
      current += 1;
      setCount(current);
      if (current < end) {
        setTimeout(increment, stepTime);
      }
    };
    increment();
  }, [total]);

  return (
    <Center flexDirection="column">
      <Text color="teal" fontSize="xxx-large" fontWeight="600" mb={2}>
        {count}+
      </Text>
      <Text fontWeight="550" fontSize="large">
        {title}
      </Text>
      <Text opacity="0.7" textAlign="center">
        {description}
      </Text>
    </Center>
  );
};

Stat.propTypes = {
  total: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
