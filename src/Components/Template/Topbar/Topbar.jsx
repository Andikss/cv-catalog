import { Flex, IconButton, Box, Collapse, useDisclosure } from '@chakra-ui/react';
import { Catalog, Company, Logo, Vacancy, Testimonial, CV } from './Child';
import { CgClose } from 'react-icons/cg';
import { MdList } from 'react-icons/md';

export const Topbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    event.stopPropagation();
  
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth',
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
      py={2}
      pl={2}
      pr={2}
      boxShadow="md"
      zIndex="1000"
      borderBottomRadius="30px"
      borderTopRadius="30px"
      flexDirection="column"
      alignItems="center"
    >
      <Flex justifyContent="space-between" alignItems="center" width="100%">
        <Logo />
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          icon={isOpen ? <CgClose /> : <MdList />}
          variant="ghost"
          aria-label="Toggle Navigation"
          justifyContent="center"
          borderRadius="50px"
        />
        <Flex
          direction="row"
          alignItems="center"
          gap={5}
          display={{ base: 'none', md: 'flex' }}
        >
          <Catalog scroll={handleSmoothScroll} />
          <Vacancy scroll={handleSmoothScroll} />
          <Company scroll={handleSmoothScroll} />
          <Testimonial scroll={handleSmoothScroll} />
          <CV/>
        </Flex>
      </Flex>

      {/* Mobile */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          alignItems="center"
          width="90vw" 
          height="90dvh"
          gap={5}
          mt={4}
        >
          <Catalog scroll={handleSmoothScroll} />
          <Vacancy scroll={handleSmoothScroll} />
          <Company scroll={handleSmoothScroll} />
          <Testimonial scroll={handleSmoothScroll} />
          <CV/>
        </Box>
      </Collapse>
    </Flex>
  );
};
