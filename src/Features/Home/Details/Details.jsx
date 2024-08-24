import { Box, Button, Card, CardBody, Flex, Grid, Link, Text } from "@chakra-ui/react";
import { FaClockRotateLeft, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Detail } from "@/Components";
import { GiPortal } from "react-icons/gi";
import { MdDiscount, MdFilePresent } from "react-icons/md";

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
        flex={1}
        minH="inherit"
        background="gray.400"
        position="relative"
        borderRadius="15px"
        overflow="hidden"
        shadow="xl"
      >
        <CardBody
          display="flex" 
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          position="relative"
          borderRadius="15px"
          height="100%" 
          px={3}
          color="white"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bgImage="url('assets/banner-2.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            zIndex="1" 
            filter="brightness(70%)"
          />
          <Box zIndex={1} mb={3}>
            <MdFilePresent fontSize="xxx-large"/>
          </Box>
          <Text fontSize="xx-large" fontWeight="700" textAlign="center" zIndex="1">
            Dapatkan CV Terbaik
          </Text>
          <Text mb={7} fontSize="md" textAlign="center" zIndex="1">
            Kami akan memberikanmu CV terbaik untuk mendapatkan pekerjaan impianmu
          </Text>

          <Button leftIcon={<FaWhatsapp />} zIndex="1" as={Link} href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}>
            Hubungi Kami
          </Button>
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
          description="Anda tidak perlu susah payah melakukan editing CV dengan software editing seperti Photoshop dan lainnya, kami akan membuatkan CV terbaik untuk kamu mendapatkan pekerjaan yang paling kamu impikan."
        />
        <Detail
          icon={MdFilePresent}
          title="CV Professional"
          description="Tidak perlu takut diabaikan oleh HRD dikarenakan CV kamu tidak menarik dan professional. Kami akan menciptakan CV professional yang akan menarik para HRD untuk menerima kamu sebagai kandidat baru bagi perusahaan"
        />
        <Detail
          icon={MdDiscount}
          title="Harga Terjangkau"
          description="Khawatir kami akan menguras isi dompetmu? tenang saja.. kami tahu persis bahwa kamu adalah seorang pencari kerja, hanya mulai dari Rp.xxxxxxx saja kami akan tetap memberikan CV terbaik untuk kamu."
        />
        <Detail
          icon={GiPortal}
          title="Portal Terpercaya"
          description="Kami menyediakan portal loker Nomor #1 di Indonesia, setelah kamu mendapatkan CV dari kami, akan kami fasilitasi portal untuk anda melanjutkan perjalanan karir anda dalam mencari pekerjaan."
        />
      </MotionGrid>
    </MotionFlex>
  );
};
