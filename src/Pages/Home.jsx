import { Box, Card, CardBody, Image } from '@chakra-ui/react';
import { Topbar } from '../Components';

const Home = () => {
  return (
    <Box>
      <Topbar/>

      <Box width="100%" height="auto">
        <Image src="assets/banner.jpg" width="100%" height="440px"/>

        <Box p={{ base: 2, sm: 2, md: 6, xl: 6 }}>
          <Card height="200vh" marginTop="-100px" bg="linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0px, rgba(255, 255, 255) 90px)">
            <CardBody>

            </CardBody>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
