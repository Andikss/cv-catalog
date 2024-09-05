import { Flex, IconButton, Box, keyframes } from '@chakra-ui/react';
import { Catalog, Company, Logo, Vacancy, Testimonial, CV } from './Child';
import { MdClose, MdList } from 'react-icons/md';
import { useEffect, useState } from 'react';

export const Topbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    event.stopPropagation();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setIsOpen(false)

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    document.body.style.height = isOpen ? '100vh' : 'auto';

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isOpen]);

  // Define the keyframes for the open animation
  const spreadAnimation = keyframes`
    0% {
      position: absolute;
      transform: scale(0);
      border-bottom-left-radius: 100%;
    }
    100% {
      transform: scale(1);
      border-radius: 0%;
    }
  `;

  // Define the keyframes for the close animation
  const shrinkAnimation = keyframes`
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      position: absolute;
      transform: scale(0);
      border-bottom-left-radius: 100%;
    }
  `;

  return (
    <>
      {/* Desktop */}
      <Flex
        display={{ base: 'none', md: 'flex' }}
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
          <Flex direction="row" alignItems="center" gap={5} display={{ base: 'none', md: 'flex' }}>
            <Catalog scroll={handleSmoothScroll} />
            <Vacancy scroll={handleSmoothScroll} />
            <Testimonial scroll={handleSmoothScroll} />
            <Company scroll={handleSmoothScroll} />
            <CV />
          </Flex>
        </Flex>
      </Flex>

      {/* Mobile */}
      <IconButton
        zIndex={9999}
        position="fixed"
        top={3}
        right={3}
        borderRadius="50%"
        backgroundColor={isVisible ? "#4b8bfa" : "#FFF"}
        display={{ base: 'flex', md: 'none' }}
        shadow={isOpen ? "none" : "lg"}
        icon={isOpen ? <MdClose /> : <MdList />}
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Fullscreen Mobile Menu with Animation */}
      <Box
        bg="white"
        width="100vw"
        height="100vh"
        display={{ base: isOpen || !isOpen ? 'flex' : 'none', md: 'none' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        top="0"
        left="0"
        zIndex={9998}
        animation={isOpen ? `${spreadAnimation} 0.4s ease-in-out forwards` : `${shrinkAnimation} 0.4s ease-in-out forwards`}
        transformOrigin="top right"
        pt="140px"
        pb={8}
        px={8}
      >
        <Flex direction="column" alignItems="start" justifyContent="space-between" gap={6} height="100%" width="100%">
          <Box position="absolute" top={4} left={4}>
            <Logo/>
          </Box>
          <Flex direction="column" gap={6}>
            <Catalog scroll={handleSmoothScroll} />
            <Vacancy scroll={handleSmoothScroll} />
            <Testimonial scroll={handleSmoothScroll} />
            <Company scroll={handleSmoothScroll} />
          </Flex>

          <CV />
        </Flex>
      </Box>
    </>
  );
};
