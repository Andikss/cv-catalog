import { useState } from 'react';
import { Flex, Heading, Link, Collapse, Box, Image, Button } from '@chakra-ui/react';
import { BiBuilding, BiStar } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { GrCatalog } from 'react-icons/gr';
import { MdFilePresent, MdMail, MdPayment } from 'react-icons/md';
import { HiRectangleStack } from 'react-icons/hi2';

export const Topbar = () => {
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);


  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 120, // Adjust for fixed topbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <Flex
      as="header"
      position="fixed"
      top="24px"
      left="50%"
      transform="translateX(-50%)"
      width="94%"
      bg="rgba(240, 240, 240, 0.8)"
      color="#344767"
      py={4}
      px={8}
      boxShadow="md"
      zIndex="1000"
      borderRadius="15px"
      flexDirection="column"
      alignItems="center"
    >
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Box flexDirection="row" alignItems="center" gap={2} display={{ base: 'flex', md: 'none' }}>
          <Image src='assets/favicon.png' height="40px"/>
          <Heading size="md">DESAIN CV TOP</Heading>
        </Box>
        <Flex
        justifyContent="space-between"
        alignItems="center"
        display={{ base: 'none', md: 'flex' }}
        width="100%"
      >
        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
          <Image src='assets/favicon.png' height="40px"/>
          <Heading size="md">DESAIN CV TOP</Heading>
        </Box>
        <Flex
          direction="row"
          alignItems="center"
          gap={3} 
        >
          <Box
            position="relative"
            onMouseEnter={() => setIsCatalogHovered(true)}
            onMouseLeave={() => setIsCatalogHovered(false)}
          >
            <Link
              display="flex"
              alignItems="center"
              gap={1}
              href="#catalog"
              onClick={(e) => handleSmoothScroll(e, 'catalog')}
            >
              <GrCatalog /> Katalog
            </Link>
            <Collapse in={isCatalogHovered} animateOpacity>
              <Box 
                position="absolute" 
                top="100%" 
                left="0" 
                mt={2} 
                bg="white" 
                boxShadow="md" 
                borderRadius="md" 
                zIndex="10" 
                minW="200px" 
                display="flex" 
                flexDirection="column"
              >
                <Button 
                  as={Link}
                  href='#packet-mail'
                  variant="ghost" 
                  leftIcon={<MdMail />} 
                  textAlign="start" 
                  justifyContent="flex-start" 
                >
                  Surat Lamaran
                </Button>
                <Button 
                  as={Link}
                  href='#packet-cv'
                  variant="ghost" 
                  leftIcon={<MdFilePresent />} 
                  textAlign="start" 
                  justifyContent="flex-start" 
                >
                  CV ATS
                </Button>
                <Button 
                  as={Link}
                  href='#packet-regular'
                  variant="ghost" 
                  leftIcon={<HiRectangleStack />} 
                  textAlign="start" 
                  justifyContent="flex-start" 
                >
                  Paket Regular
                </Button>
                <Button 
                  as={Link}
                  href='#packet-premium'
                  variant="ghost" 
                  leftIcon={<BiStar />} 
                  textAlign="start" 
                  justifyContent="flex-start" 
                >
                  Paket Premium
                </Button>
                <Button 
                  as={Link}
                  href='#packet-platinum'
                  variant="ghost" 
                  leftIcon={<MdPayment />} 
                  textAlign="start" 
                  justifyContent="flex-start" 
                >
                  Paket Platinum
                </Button>
              </Box>
            </Collapse>
          </Box>
          <Link
            display="flex"
            alignItems="center"
            gap={1}
            href="#companies"
            onClick={(e) => handleSmoothScroll(e, 'companies')}
          >
            <BiBuilding /> Perusahaan
          </Link>
          <Link
            display="flex"
            alignItems="center"
            gap={1}
            href='https://andikss.github.io'
            target='_blank'
          >
            <BsGithub />
            Developer
          </Link>
        </Flex>
      </Flex>
      </Flex>
    </Flex>
  );
};
