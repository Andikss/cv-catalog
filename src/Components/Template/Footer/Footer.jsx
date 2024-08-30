import { Box, Flex, Image, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, Text } from '@chakra-ui/react';
import { FooterItem, SocialMedia } from '@/Components';
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '100px' }} pt="100px" pb="50px" position="relative">
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Box height={{ base: "auto", md: "200px" }} mb="40px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={2}>
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
        <Box height={{ base: "auto", md: "200px" }} mb="40px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={3}>
          <FooterItem label="Social Media"/>
  
          <Flex gap={2}>
            <SocialMedia
              link="https://instagram.com/toplokercom"
              icon={FaInstagram}
              label="Instagram"
            />
            <SocialMedia
              link="https://tiktok/@toploker.com"
              icon={FaTiktok}
              label="TikTok"
            />
            <SocialMedia
              link="https://www.youtube.com/@LowonganKerjaTop"
              icon={FaYoutube}
              label="YouTube"
            />
            <SocialMedia
              link="https://"
              icon={FaWhatsapp}
              label="WhatsApp"
            />
          </Flex>
  
          <Text>Ikuti kami di sosial media</Text>
        </Box>
        <Box height={{ base: "auto", md: "200px" }} mb="40px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={2}>
          <FooterItem label="Developer"/>

          {/* GitHub Popover */}
          <Popover placement="bottom-start" trigger="hover">
            <PopoverTrigger>
              <Link _hover={{ textDecoration: 'none' }}>
                <Text _hover={{ textDecoration: 'underline' }}>Contact Developer</Text>
              </Link>
            </PopoverTrigger>
            <PopoverContent width="fit-content" p={4}>
              <PopoverArrow />
              <PopoverHeader textAlign="center">Andika Dwi Saputra</PopoverHeader>
              <PopoverBody>
                <Flex direction="column" align="start" gap={3}>
                  <Flex width="100%" justifyContent="center">
                    <Image
                      src="https://avatars.githubusercontent.com/Andikss"
                      alt="Andika Dwi Saputra"
                      borderRadius="full"
                      boxSize="80px"
                    />
                  </Flex>
                  <Link href="https://github.com/Andikss" isExternal>
                    <Flex align="center" gap={2}>
                      <FaGithub />
                      <Text>Visit GitHub Profile</Text>
                    </Flex>
                  </Link>
                  <Link href="https://github.com/Andikss" isExternal>
                    <Flex align="center" gap={2}>
                      <FaGithub />
                      <Text>Visit Portfolio</Text>
                    </Flex>
                  </Link>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box height={{ base: "auto", md: "200px" }} mb="40px" width={{ base: "100%", md: "25%" }} display="flex" flexDirection="column" gap={2}>
          <FooterItem label="Copyright"/>

          <Link href='https://toploker.com' target='_blank'>
            &copy;Toploker.com@2024
          </Link>
        </Box>
      </Flex>
    
      <Box position="absolute" bottom="12px" left="12px" display="flex" gap={3}>
        <Image src='assets/logo/favicon.png' height="40px" mb={2} mixBlendMode="multiply"/>
        <Image src='assets/logo/logo.webp' height="40px" mb={3} mixBlendMode="multiply"/>
      </Box>
    </Box>
  );
};
