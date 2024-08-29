import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react';
import { usePopup } from '@/Context/Home';

export const Popup = () => {
  const { isPopupOpen, closePopup } = usePopup();

  return (
    <Modal isOpen={isPopupOpen} onClose={closePopup} size="md" isCentered>
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
