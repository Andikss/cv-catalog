import { Flex } from '@chakra-ui/react';
import { Catalog, Company, Developer, Logo } from './Child';

export const Topbar = () => {
  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Flex as="header" position="fixed" top="24px" left="50%" transform="translateX(-50%)" width="94%" bg="rgba(240, 240, 240, 0.8)" color="#344767" py={4} px={8} boxShadow="md" zIndex="1000" borderRadius="15px" flexDirection="column" alignItems="center">
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Flex justifyContent="space-between" alignItems="center" display="flex" width="100%">
          <Logo/>
          <Flex direction="row" alignItems="center" gap={3}>
            <Catalog scroll={handleSmoothScroll}/>
            <Company scroll={handleSmoothScroll}/>
            <Developer/>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
