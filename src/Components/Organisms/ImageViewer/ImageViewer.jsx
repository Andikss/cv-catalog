import { useState, useEffect } from 'react';
import { Box, Image, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useToast, Tooltip, Link } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaDownload, FaWhatsapp } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';

export const ImageViewer = ({ images, isOpen, onClose, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const toast = useToast();

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDownload = () => {
    const currentImage = images[currentIndex];
    const fileName = currentImage.url.split('/').pop();

    fetch(`${import.meta.env.VITE_API_BASE_URL}${currentImage.url}`)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      })
      .then(() => {
        toast({
          title: 'Berhasil!',
          description: 'Konten berhasil diunduh 😁',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
          variant: 'solid',
        });
      })
      .catch(() => {
        toast({
          title: 'Oops!',
          description: 'Terjadi kesalahan saat mengunduh konten 🤕',
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
          variant: 'solid',
        });
      });
  };

  const whatsappMessage = encodeURIComponent(
    `Hallo kakak, saya ingin membeli paket CV berikut: ${import.meta.env.VITE_API_BASE_URL}/${images[currentIndex]?.url}, apakah masih tersedia?`
  );

  const whatsappLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  // Ensure the hook is called unconditionally
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  if (!images || images.length === 0) {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
            <Box>No images available</Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="none" width="auto">
        <ModalCloseButton />
        <ModalBody p={0} display="flex" justifyContent="center" alignItems="center" position="relative" {...handlers}>
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            position="fixed"
            left="20px"
            zIndex="10"
            onClick={handlePrev}
            borderRadius="50%"
            shadow="lg"
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            position="fixed"
            right="20px"
            zIndex="10"
            onClick={handleNext}
            borderRadius="50%"
            shadow="lg"
          />
          <Tooltip hasArrow label="Unduh Konten">
            <IconButton
              colorScheme="orange"
              aria-label="Download"
              icon={<FaDownload />}
              position="absolute"
              top="20px"
              right="20px"
              zIndex="10"
              onClick={handleDownload}
              borderRadius="50%"
              shadow="lg"
            />
          </Tooltip>
          <Tooltip hasArrow label="Hubungi di WhatsApp">
            <IconButton
              colorScheme="whatsapp"
              aria-label="WhatsApp"
              icon={<FaWhatsapp />}
              position="absolute"
              top="70px"
              right="20px"
              zIndex="10"
              as={Link}
              href={whatsappLink}
              target="_blank"
              borderRadius="50%"
              shadow="lg"
            />
          </Tooltip>
          <Box display="flex" justifyContent="center" alignItems="center">
            {currentImage ? (
              <Image
                src={`${import.meta.env.VITE_API_BASE_URL}${currentImage.url}`}
                alt={`Image ${currentImage.id}`}
                objectFit="contain"
                maxW="90vw"
                maxH="90vh"
              />
            ) : (
              <Box>No image available</Box>
            )}
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number.isRequired,
};
