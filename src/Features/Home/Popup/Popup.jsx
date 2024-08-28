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
      <ModalContent
        width="70dvh"
        height="70dvh"
        maxWidth="70dvh"
        maxHeight="70dvh"
        borderRadius="md"
        p={0}
      >
        <ModalCloseButton  zIndex={999}/>
        <ModalBody p={0} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Image
          src="https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGltYWdlfGVufDB8fHx8MTY4Nzg4NzE0&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Promo"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius="md"
        />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
