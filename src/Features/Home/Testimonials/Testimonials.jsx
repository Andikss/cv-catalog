import { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Text, Stack, Icon, Avatar, IconButton, Image, Link } from '@chakra-ui/react';
import { CatalogTitle } from '@/Components';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonialsData from './data.json';

// Define the CSS animations for the buttons
const buttonStyles = {
  animation: `moveLeft 2s ease-in-out infinite alternate`,
  '@keyframes moveLeft': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-10px)' }
  }
};

const buttonStylesRight = {
  animation: `moveRight 2s ease-in-out infinite alternate`,
  '@keyframes moveRight': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(10px)' }
  }
};

export const Testimonials = () => {
  const testimonials = testimonialsData;
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box width="100%" height="auto" px={{ base: 2, md: '80px' }} overflow="hidden" id="testimonials">
      <CatalogTitle
        label="Testimoni"
        title="Review Pelanggan"
        description="Lihat apa kata pelanggan kami tentang layanan pembuatan CV dan surat lamaran kerja kami."
      />

      <Box p={6} position="relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={4} textAlign="center">
              <Stack spacing={4} align="center">
                <Avatar
                  borderRadius="full"
                  size="md"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontStyle="italic" mb={2}>{testimonial.review}</Text>
                <Stack direction="row" spacing={1} justify="center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="yellow.400" />
                  ))}
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>

        {/* Custom Navigation Buttons */}
        <IconButton
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={handlePrev}
          aria-label="Previous"
          zIndex={1}
          variant="ghost"
          colorScheme="gray"
          icon={<FaChevronLeft />}
          fontSize="lg"
          sx={buttonStyles}  
        />

        <IconButton
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={handleNext}
          aria-label="Next"
          zIndex={1}
          variant="ghost"
          colorScheme="gray"
          icon={<FaChevronRight />}
          fontSize="lg"
          sx={buttonStylesRight} 
        />
      </Box>

      <Box
        position="relative"
        borderRadius="md" 
        width="100%"
      >
        <Image
          src='assets/content/review.webp'
          alt='Review'
          zIndex={1}
          width="full"
          objectFit="contain" 
        />
  
        <Box
          position="absolute"
          bottom={{ base: "30px", md: "30px" }}
          right="0" 
          zIndex={3}
          textAlign="center"
          color="white"
          width="73%"
        >
          <Text fontWeight="bold" fontSize={{ base: "xs", md: "x-large" }}>
            Cek Review Testimoni di Instagram Kami
          </Text>
          <Link href="https://instagram.com/jasadesaincv.top" fontSize={{ base: "xs", md: "md" }} isExternal>
            <i>@jasadesaincv.top</i>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
