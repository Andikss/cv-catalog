import { CatalogTitle } from '@/Components';
import { Box, Flex, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const Companies = () => {
  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '80px' }} overflow="hidden">
      <CatalogTitle
        label="Terpercaya"
        title="Dipercaya Oleh Perusahaan"
        description="Kami, Toploker.com telah menjalin hubungan kerjasama dengan banyak perusahaan dan telah dipercaya lebih dari 100.000++ perusahaan"
      />

      <Box position="relative" width="100%" height="80px" mt="60px">
        <Flex
          position="absolute"
          width="200%" // Adjusted width to ensure seamless scrolling
          height="100%"
          alignItems="center"
          animation={`${scrollAnimation} 30s linear infinite`}
        >
          {/* Duplicate the logos for seamless scrolling */}
          <Flex flexShrink={0} alignItems="center" gap="40px">
            <Image src="/assets/companies/aci.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/aice.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/artline.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/bank-nussuma.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/mmi.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/pondok-digital.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/zerone.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
          </Flex>
          <Flex flexShrink={0} alignItems="center" gap="40px" ml="40px">
            <Image src="/assets/companies/aci.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/aice.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/artline.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/bank-nussuma.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/mmi.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/pondok-digital.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
            <Image src="/assets/companies/zerone.png" height="60px" filter="grayscale(100%)" _hover={{ filter: 'grayscale(0%)' }} mr={4} />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
