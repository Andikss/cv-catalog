import { useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Image } from '@chakra-ui/react';

export const Popup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="md" p={0}>
        <ModalCloseButton zIndex={999} />
        <ModalBody p={0} display="flex" justifyContent="center" alignItems="center">
          <Image
            src="assets/content/pricelist.webp"
            alt="Promo"
            borderRadius="md"
            objectFit="cover"
            maxWidth="100%"
            maxHeight="80dvh"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
