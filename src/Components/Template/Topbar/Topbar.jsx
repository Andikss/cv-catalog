import { useState } from 'react';
import { Flex, Heading, Link, Collapse, IconButton } from '@chakra-ui/react';
import { BiBuilding } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { GrCatalog } from 'react-icons/gr';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => setIsOpen(!isOpen);

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
        <Heading size="md" display={{ base: 'block', md: 'none' }}>Toploker</Heading>
        <IconButton
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          icon={isOpen ? <HiX /> : <HiMenuAlt3 />}
          variant="outline"
          onClick={handleToggle}
          display={{ base: 'flex', md: 'none' }}
          border="none"
        />
      </Flex>

      <Collapse in={isOpen} style={{ width: '100%' }} display={{ base: 'flex', md: 'none' }}>
        <Flex
          direction="column"
          gap={3}
          mt={4}
          width="100%"
          alignItems="center"
          display={{ base: 'flex', md: 'none' }}
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
      </Collapse>

      {/* Desktop view */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        display={{ base: 'none', md: 'flex' }}
        width="100%"
      >
      <Heading size="md">Toploker</Heading>
      <Flex
        direction="row"
        alignItems="center"
        gap={3} 
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
  );
};
