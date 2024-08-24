import { Box, Flex, Image, Link, Text, Tooltip } from '@chakra-ui/react';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa6';

export const Footer = () => {
  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '100px' }} pt="100px" pb="50px" position="relative">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box height="200px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={2}>
          <Link href='https://toploker.com' fontWeight="bold" fontSize="md" color="#344767">
            Tentang Toploker.com
          </Link>
          <Link href='https://toploker.com/jobfair/daftar' fontWeight="bold" fontSize="md" color="#344767">
            Virtual Jobfair
          </Link>
          <Link href='https://toploker.com/tips/list-tips' fontWeight="bold" fontSize="md" color="#344767">
            Tips Karir
          </Link>
          <Link href='https://toploker.com/panduan/all' fontWeight="bold" fontSize="md" color="#344767">
            Faq
          </Link>
        </Box>
        <Box height="200px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={3}>
          <Text fontWeight="bold" fontSize="md" color="#344767">
            Social Media
          </Text>
  
          <Flex gap={2}>
            <Tooltip hasArrow label="Instagram">
              <Link href=''>
                <Box width="40px" height="40px" display="flex" alignItems="center" justifyContent="center" borderRadius="50%" background="gray.200">
                  <FaInstagram fontSize="large"/>
                </Box>
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="TikTok">
              <Link href=''>
                <Box width="40px" height="40px" display="flex" alignItems="center" justifyContent="center" borderRadius="50%" background="gray.200">
                  <FaTiktok fontSize="large"/>
                </Box>
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="YouTube">
              <Link href=''>
                <Box width="40px" height="40px" display="flex" alignItems="center" justifyContent="center" borderRadius="50%" background="gray.200">
                  <FaYoutube fontSize="large"/>
                </Box>
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="Whatsapp">
              <Link href=''>
                <Box width="40px" height="40px" display="flex" alignItems="center" justifyContent="center" borderRadius="50%" background="gray.200">
                  <FaWhatsapp fontSize="large"/>
                </Box>
              </Link>
            </Tooltip>
          </Flex>
  
          <Text fontWeight="bold" fontSize="md" color="#344767">
            Contact <Link href='https://andikss.github.io' target='_blank'>Developer</Link>
          </Text>
        </Box>
        <Box height="200px" width={{ base: "100%", md: "50%" }} display="flex" flexDirection="column" gap={2}>
          <Text fontWeight="bold" fontSize="md" color="#344767">
            Alamat Kami
          </Text>
          <Link href='https://maps.app.goo.gl/AXLdd1w1pj9Yyuc2A'>
            Jl. Majapahit No.304 RT 002 RW 008 Palebon Pedurungan Semarang - Jawa Tengah
          </Link>
        </Box>
      </Flex>
    
      <Box position="absolute" bottom="12px" left="12px" display="flex" gap={3}>
        <Image src='assets/favicon.png' height="40px" mb={2} mixBlendMode="multiply"/>
        <Image src='assets/logo.png' height="40px" mb={3} mixBlendMode="multiply"/>
      </Box>
    </Box>
  );
};