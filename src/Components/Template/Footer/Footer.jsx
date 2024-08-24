import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { FooterItem, SocialMedia } from '@/Components';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '100px' }} pt="100px" pb="50px" position="relative">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box height="200px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={2}>
          <FooterItem
            href='https://toploker.com'
            label='Tentang Toploker.com'
          />
          <FooterItem
            href='https://toploker.com/jobfair/daftar'
            label='Virtual Jobfair'
          />
          <FooterItem
            href='https://toploker.com/tips/list-tips'
            label='Tips Karir'
          />
          <FooterItem
            href='https://toploker.com/panduan/all'
            label='Faq'
          />
        </Box>
        <Box height="200px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={3}>
          <FooterItem label="Social Media"/>
  
          <Flex gap={2}>
            <SocialMedia
              icon={FaInstagram}
              label="Instagram"
            />
            <SocialMedia
              icon={FaTiktok}
              label="TikTok"
            />
            <SocialMedia
              icon={FaYoutube}
              label="YouTube"
            />
            <SocialMedia
              icon={FaWhatsapp}
              label="WhatsApp"
            />
          </Flex>
  
          <FooterItem
            href="https://andikss.github.io"
            label="Contact Developer"
          />
        </Box>
        <Box height="200px" width={{ base: "100%", md: "50%" }} display="flex" flexDirection="column" gap={2}>
          <FooterItem label="Alamat Kami"/>

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