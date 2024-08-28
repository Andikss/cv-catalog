import { Box, IconButton, keyframes, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export const Whatsapp = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  `;

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex="1000"
      animation={`${floatAnimation} 3s ease-in-out infinite`}
    >
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Tooltip hasArrow label="Hubungi kami" placement='left'>
          <IconButton
            icon={<FaWhatsapp />}
            isRound
            size="lg"
            colorScheme="whatsapp"
            aria-label="Chat with us on WhatsApp"
            fontSize="x-large"
          />
        </Tooltip>
      </a>
    </Box>
  );
};