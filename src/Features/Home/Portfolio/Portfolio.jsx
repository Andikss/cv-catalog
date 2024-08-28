import { CatalogTitle } from '@/Components';
import { Box, Image, Link, Text } from '@chakra-ui/react';

export const Portfolio = () => {
  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '80px' }}>
      <CatalogTitle
        label="Tingkatkan Kesempatan"
        title="Dengan CV Buatan Kami"
        description="CV professional akan membuat kesempatan anda diterima untuk masuk di perusahaan lebih besar"
      />

      <Box 
        position="relative" 
        width="100%" 
        minH={{ base: "320px", md: "320px" }}
        maxH={{ base: "auto", md: "320px" }}
        borderRadius="20px" 
        overflow="hidden" 
        mt={10}
        mb={4}
      >
        {/* Title and description text */}
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          backdropFilter="blur(5px)"
          height="100%"
          position="absolute" 
          top="0" 
          left="0" 
          zIndex="1" 
          color="white" 
          p={{ base: 4, md: 6 }}
        >
          <Text fontSize={{ base: "lg", md: "x-large" }} fontWeight="bold">
            Daftar Pekerjaan
          </Text>
          <Text fontSize={{ base: "xl", md: "xxx-large" }} fontWeight="bold">
            Dengan CV Professional
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }} my={2}>
            HRD akan melihat anda lebih baik jika anda memiliki CV professional yang mudah dibaca oleh sistem.
            Dengan bantuan kami, anda akan mendapatkan kesempatan tersebut.
            Gunakan portal <Link filter="brightness(1.3)" href='https://toploker.com' isExternal>Toploker.com</Link> untuk membantu anda mendapatkan pekerjaan impian anda.
          </Text>

          <Link fontWeight="bold" href='https://toploker.com' isExternal>
            Kunjungi Toploker.com
          </Link>
        </Box>

        <Image 
          src='assets/banner-1.webp' 
          objectFit="cover" 
          width="100%" 
          height="100%"
        />
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          width="100%" 
          height="100%" 
          bg="rgba(0, 0, 0, 0.3)"
          borderRadius="20px"
          pointerEvents="none"
          _before={{
            content: `""`,
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 70%)",
            borderRadius: "20px",
          }}
        />
      </Box>
    </Box>
  );
};
