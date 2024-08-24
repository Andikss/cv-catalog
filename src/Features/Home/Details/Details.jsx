import { Card, CardBody, Flex, Grid } from "@chakra-ui/react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Detail } from "@/Components";

const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);

export const Details = () => {
  return (
    <MotionFlex
      direction={{ base: 'column', md: 'row' }}
      alignItems="stretch"
      justifyContent="center"
      width="100%"
      maxW="container.xl"
      minH="400px"
      gap={6}
      p={{ base: 0, md: 6 }}
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.5, ease: "easeOut" }} 
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

      <MotionGrid
        flex={2}
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap={6}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}  
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
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
      </MotionGrid>
    </MotionFlex>
  );
};
