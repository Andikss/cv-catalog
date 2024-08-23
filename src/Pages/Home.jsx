import { Box, Card, CardBody, Image, Stack } from '@chakra-ui/react';
import { Topbar } from '../Components';
import { Stats, Details } from '../Features/Home';

const Home = () => {
  return (
    <Box>
      <Topbar />

      <Box width="100%" height="auto">
        <Image src="assets/banner.jpg" width="100%" height="440px" />

        {/* Stats Section */}
        <Box p={{ base: 2, sm: 2, md: 6, xl: 6 }}>
          <Card
            shadow="xl"
            border="none"
            height="auto"
            marginTop="-100px"
            bg="linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0px, rgba(255, 255, 255) 90px)"
          >
            <CardBody>
              <Stack justifyContent="center" alignItems="center">
                <Stats/>

                <Details/>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
