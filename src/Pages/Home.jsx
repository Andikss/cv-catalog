import { Box, Card, CardBody, Image, Stack } from '@chakra-ui/react';
import { Stats, Catalog, Details, Portfolio, Companies } from '@/Features/Home';
import { Topbar, Footer } from '@/Components';

const Home = () => {
  return (
    <Box position="relative">
      <Topbar />

      <Box width="100%" height="auto">
        <Image src="assets/banner.jpg" width="100%" height="440px" />

        <Box p={{ base: 2, sm: 2, md: 6, xl: 6 }}>
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
                <Catalog/>
                <Portfolio/>
                <Companies/>
              </Stack>
            </CardBody>
          </Card>

          <Footer/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
