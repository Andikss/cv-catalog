import { useState, useEffect } from 'react';
import { Box, Heading, Image, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Text, ListItem, Button, Flex, List, Divider } from '@chakra-ui/react';
import { CgChevronLeft } from 'react-icons/cg';
import { BiCart } from 'react-icons/bi';
import { usePopup } from '@/Context/Home'; 

export const Logo = () => { 
  const { isPopoverOpen, openPopover, closePopover } = usePopup();
  const [step, setStep] = useState(1);

  useEffect(() => {
    const hasShownPopover = localStorage.getItem('hasShownPopover');

    if (!hasShownPopover) {
      const timer = setTimeout(() => {
        openPopover();
        localStorage.setItem('hasShownPopover', 'true'); 
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [openPopover]);

  const handleToggle = () => {
    if (isPopoverOpen) {
      closePopover();
    } else {
      openPopover();
    }
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      closePopover();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Popover isOpen={isPopoverOpen} onClose={closePopover} placement="bottom-start">
        <PopoverTrigger>
          <Image 
            src='assets/logo/favicon.webp' 
            height="40px" 
            onClick={handleToggle} 
            cursor="pointer"
          />
        </PopoverTrigger>
        <PopoverContent shadow="lg" padding={3} borderRadius="30px">
          <PopoverArrow />
          <PopoverBody>
            {step === 1 && (
              <>
                <Text fontWeight="bold" mb={3}>Keterangan Pembuatan CV:</Text>
                <List spacing={1} mb={4}>
                  <ListItem>Template ATS-Friendly dapat digunakan untuk semua pilihan paket.</ListItem>
                  <Divider/>
                  <ListItem>Pembuatan CV maksimal 1x24 jam.</ListItem>
                  <Divider/>
                  <ListItem>Biaya tambahan Rp5.000 untuk tambahan Lampiran pada Paket Regular dan Paket Premium.</ListItem>
                </List>
              </>
            )}
            {step === 2 && (
              <>
                <Text fontWeight="bold" mb={3}>Keterangan Pemesanan:</Text>
                <List spacing={1}>
                  <ListItem>Pemesanan dapat dilakukan di hari dan jam operasional Top Loker (Senin s.d. Sabtu pukul 08.00-16.30 WIB).</ListItem>
                  <Divider/>
                  <ListItem>Jika pemesanan dilakukan pukul 16.00 WIB ke atas, penyelesaian akan dilakukan secepat mungkin atau dilanjutkan esok hari.</ListItem>
                  <Divider/>
                  <ListItem>Khusus hari Sabtu, jika pemesanan dilakukan pukul 16.00 WIB, penyelesaian akan dilanjutkan pada hari Senin sesuai jam operasional.</ListItem>
                </List>
              </>
            )}
            <Flex justifyContent={step > 1 ? 'start' : 'end'} mt={4}>
              {step > 1 ? (
                <Button onClick={handlePrev} background="#4b8bfa" color="white" _hover={{ background: 'blue.600' }} leftIcon={<CgChevronLeft/>} size="sm">
                  Sebelumnya
                </Button>
              ) : (
                <Button leftIcon={<BiCart/>} onClick={handleNext} background="#4b8bfa" color="white" _hover={{ background: 'blue.600' }} size="sm">
                  Pemesanan
                </Button>
              )}
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Heading size="md" color="#344767">DESAIN CV TOP</Heading>
    </Box>
  );
};
