import { useState } from 'react'
import { BiStar } from 'react-icons/bi'
import { GrCatalog } from 'react-icons/gr'
import { HiRectangleStack } from 'react-icons/hi2'
import { MdFilePresent, MdMail, MdPayment } from 'react-icons/md'
import { Box, Button, Collapse, Link} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Catalog = ({ scroll }) => {
  const [isCatalogHovered, setIsCatalogHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsCatalogHovered(true)}
      onMouseLeave={() => setIsCatalogHovered(false)}
    >
      <Link
        display="flex"
        alignItems="center"
        gap={1}
        href="#catalog"
        onClick={(e) => scroll(e, 'catalog')}
      >
        <GrCatalog /> Katalog
      </Link>
      <Collapse in={isCatalogHovered} animateOpacity>
        <Box
          position="absolute" 
          top="100%" 
          left="0" 
          mt={2} 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          zIndex="10" 
          minW="200px" 
          display="flex" 
          flexDirection="column"
        >
          <Button
            as={Link}
            href='#packet-1'
            variant="ghost" 
            leftIcon={<MdMail />} 
            textAlign="start" 
            justifyContent="flex-start" 
            onClick={(e) => scroll(e, 'packet-1')}
          >
            Surat Lamaran
          </Button>
          <Button 
            as={Link}
            href='#packet-2'
            variant="ghost" 
            leftIcon={<MdFilePresent />} 
            textAlign="start" 
            justifyContent="flex-start" 
            onClick={(e) => scroll(e, 'packet-2')}
          >
            CV ATS
          </Button>
          <Button 
            as={Link}
            href='#packet-3'
            variant="ghost" 
            leftIcon={<HiRectangleStack />} 
            textAlign="start" 
            justifyContent="flex-start" 
            onClick={(e) => scroll(e, 'packet-3')}
          >
            Paket Regular
          </Button>
          <Button 
            as={Link}
            href='#packet-4'
            variant="ghost" 
            leftIcon={<BiStar />} 
            textAlign="start" 
            justifyContent="flex-start" 
            onClick={(e) => scroll(e, 'packet-4')}
          >
            Paket Premium
          </Button>
          <Button 
            as={Link}
            href='#packet-5'
            variant="ghost" 
            leftIcon={<MdPayment />} 
            textAlign="start" 
            justifyContent="flex-start" 
            onClick={(e) => scroll(e, 'packet-5')}
          >
            Paket Platinum
          </Button>
        </Box>
      </Collapse>
    </Box>
  )
}

Catalog.propTypes = {
    scroll: PropTypes.func.isRequired
}