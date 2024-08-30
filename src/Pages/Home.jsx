import { Box, Card, CardBody, Image, Stack, useBreakpointValue } from '@chakra-ui/react';
import { Stats, Catalog, Details, Portfolio, Companies, Testimonials, Popup } from '@/Features/Home';
import { Topbar, Footer, Whatsapp, GoToTop } from '@/Components';
import { PopupProvider } from '@/Context/Home';

const Home = () => {
  const bannerImage = useBreakpointValue({
    base: "assets/content/banner-mobile.webp",
    md: "assets/content/banner.webp",
  });

  return (
    <PopupProvider>
      <Box id='base' position="relative">
        <Topbar />

        <Box width="100%" height="auto" position="relative">
          <Image 
            src={bannerImage}
            width="100%" 
            height="440px" 
            objectFit="cover" 
            objectPosition="center" 
            alt="Banner"
          />

          <Box p={{ base: 2, sm: 2, md: 6, xl: 6 }} position="relative" zIndex={1}>
            <Card
              pb="100px"
              boxShadow="0 10px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.05)"
              border="none"
              height="auto"
              marginTop="-100px"
              bg="linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0px, rgba(255, 255, 255) 90px)"
            >
              <CardBody>
                <Stack justifyContent="center" alignItems="center" gap="100px" width="100%">
                  <Stats/>
                  <Details/>
                  <Testimonials/>
                  <Catalog/>
                  <Portfolio/>
                  <Companies/>
                </Stack>
              </CardBody>
            </Card>

            <Footer/>
          </Box>
        </Box>

        {/* Floating Button */}
        <GoToTop />
        <Whatsapp />

        {/* Popup */}
        <Popup/>
      </Box>
    </PopupProvider>
  );
};

export default Home;
