import { Card, CardBody, Flex, Grid } from "@chakra-ui/react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { Detail } from "../../../Components";

export const Details = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      alignItems="stretch"
      justifyContent="center"
      width="100%"
      maxW="container.xl"
      minH="500px" 
      gap={6}
      p={{ base: 4, md: 6 }}
    >
      <Card
        background="gray.400"
        flex={1}
        minH="inherit" 
      >
        <CardBody>
          {/* Content for the Card goes here */}
        </CardBody>
      </Card>

      <Grid
        flex={2}
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <Detail
          icon={FaClockRotateLeft}
          title="Menghemat Waktu"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nihil rem at, doloribus nisi totam minus quisquam ducimus molestias aspernatur earum aut ex modi ad facilis ea vitae quasi laboriosam!"
        />
        <Detail
          icon={FaClockRotateLeft}
          title="Menghemat Waktu"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nihil rem at, doloribus nisi totam minus quisquam ducimus molestias aspernatur earum aut ex modi ad facilis ea vitae quasi laboriosam!"
        />
        <Detail
          icon={FaClockRotateLeft}
          title="Menghemat Waktu"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nihil rem at, doloribus nisi totam minus quisquam ducimus molestias aspernatur earum aut ex modi ad facilis ea vitae quasi laboriosam!"
        />
        <Detail
          icon={FaClockRotateLeft}
          title="Menghemat Waktu"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nihil rem at, doloribus nisi totam minus quisquam ducimus molestias aspernatur earum aut ex modi ad facilis ea vitae quasi laboriosam!"
        />
      </Grid>
    </Flex>
  );
};