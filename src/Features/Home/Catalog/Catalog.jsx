import { Box, Grid, Image, Spinner, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { CatalogTitle, ImageViewer } from "@/Components";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import jsonData from '@/Assets/data.json';

export const Catalog = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".image-item",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
    );
  }, []);

  const handleImageClick = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    onOpen();
  };

  // Use jsonData.data directly instead of the data state
  if (!jsonData.data.length) {
    return <Spinner colorScheme="orange" size="md" />;
  }

  return (
    <Box width="100%" id="catalog">
      <CatalogTitle 
        label="Pilihan Terbaik"
        title="Pilihan CV Terbaik"
        description="Kami memiliki berbagai pilihan CV professional terbaik untukmu dengan paket yang menyesuaikan isi kantongmu"
      />

      <Stack height="auto" spacing={6} mt="80px" px={{ base: 2, md: '80px' }}>
        {jsonData.data.map((packet) => (
          <Box id={`packet-${packet.id}`} key={packet.id} width="100%" display="flex" flexDirection={{ base: "column", md: "row" }} mb={5}>
            <Box width={{ base: '100%', md: '25%' }}>
              <Box position="sticky" top="100px">
                <Box position="relative">
                  <Text fontWeight="900" fontSize="xx-large" color="#344767">
                    {packet.name || 'No Name'}
                  </Text>
                  <Box position="absolute" bottom={1} left={0} width="60px" borderTop="4px solid" borderColor="#344767"></Box>
                </Box>
                <Text mt={2} fontSize="md" color="gray.600" pr={3}>
                  {packet.description}
                  {packet.description && (<span style={{ color: 'orange' }}> Dalam Format PNG / PDF</span>)}
                </Text>
              </Box>
            </Box>

            <Grid
              width={{ base: '100%', md: '75%' }}
              templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={12}
              marginTop={4}
              alignItems="center"
              justifyContent="center"
            >
              {packet.cv?.map((item, index) => (
                <Box
                  key={item.id}
                  position="relative"
                  width="100%"
                  background="gray.200"
                  height="auto"
                  borderRadius="md"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  shadow="md"
                  transition="transform 0.3s ease, box-shadow 0.3s ease"
                  _hover={{
                    transform: 'scale(1.1)',
                    boxShadow: 'lg'
                  }}
                  onClick={() => handleImageClick(packet.cv, index)}
                  cursor="pointer"
                >
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    transition="transform 0.3s ease"
                  >
                    <Image
                      src={`${import.meta.env.VITE_API_BASE_URL}${item.url}`}
                      alt={`Image ${item.id}`}
                      maxH={{ base: "auto", md: "400px" }}
                      flex={1}
                      objectFit="contain"
                      borderRadius="md"
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                      }}
                      style={{ opacity: 0 }}
                    />
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        ))}
      </Stack>

      <ImageViewer images={selectedImages} isOpen={isOpen} onClose={onClose} initialIndex={currentIndex} />
    </Box>
  );
};
