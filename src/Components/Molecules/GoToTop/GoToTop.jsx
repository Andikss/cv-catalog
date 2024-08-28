import { Box, IconButton, Tooltip, keyframes } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Define a floating animation
  const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `;

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="80px"
      zIndex="1000"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(20px)'}
      transition="opacity 0.4s ease-in-out, transform 0.4s ease-in-out"
      animation={`${floatAnimation} 3s ease-in-out infinite`}
      pointerEvents={isVisible ? 'auto' : 'none'}
    >
      <Tooltip hasArrow label="Kembali Keatas" placement='left'>
        <IconButton
          icon={<FaArrowUp />}
          isRound
          size="lg"
          background="#4b8bfa"
          color="white"
          aria-label="Go to Top"
          onClick={scrollToTop}
          _hover={{ background: 'blue.600' }}
        />
      </Tooltip>
    </Box>
  );
};
