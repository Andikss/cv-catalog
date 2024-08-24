import { Box, Grid, Image, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CatalogTitle, ImageViewer } from "../../../Components";
import { gsap } from "gsap";

export const Catalog = () => {
  const [data, setData] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".image-item",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
    );
  }, [data]);

  const handleImageClick = (images) => {
    setSelectedImages(images);
    onOpen();
  };

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box width="100%">
      <CatalogTitle />

      <Stack height="auto" spacing={6} mt="80px" px={{ base: 2, md: '80px' }}>
        {Object.keys(data).map((category) => (
          <Box key={category} width="100%" display="flex" flexDirection={{ base: "column", md: "row" }} mb={5}>
            <Box width={{ base: '100%', md: '25%' }}>
              <Text fontWeight="900" fontSize="xx-large" position="sticky" top="100px">
                {category}
              </Text>
            </Box>

            <Grid
              width={{ base: '100%', md: '75%' }}
              templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
              gap={12}
              marginTop={4}
              alignItems="center"
              justifyContent="center"
            >
              {Object.values(data[category]).flat().map((item) => (
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
                  onClick={() => handleImageClick(Object.values(data[category]).flat())}
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
                      src={`https://ads.andikads.my.id${item.url}`}
                      alt={`Image ${item.id}`}
                      maxH="400px"
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

      <ImageViewer images={selectedImages} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
