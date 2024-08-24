import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export const ImageViewer = ({ images, isOpen, onClose, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex); // Reset to the clicked image index
  }, [initialIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="full">
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
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={0} display="flex" justifyContent="center" alignItems="center" position="relative">
          <IconButton
            aria-label="Previous"
            icon={<FaChevronLeft />}
            position="absolute"
            left="-60px"
            zIndex="10"
            onClick={handlePrev}
            borderRadius="50%"
            shadow="lg"
          />
          <IconButton
            aria-label="Next"
            icon={<FaChevronRight />}
            position="absolute"
            right="-60px"
            zIndex="10"
            onClick={handleNext}
            borderRadius="50%"
            shadow="lg"
          />
          <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            {currentImage ? (
              <Image
                src={`https://ads.andikads.my.id${currentImage.url}`}
                alt={`Image ${currentImage.id}`}
                objectFit="contain"
                width="100%"
                height="auto"
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

// PropTypes validation
ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialIndex: PropTypes.number.isRequired, // Add initialIndex prop validation
};
