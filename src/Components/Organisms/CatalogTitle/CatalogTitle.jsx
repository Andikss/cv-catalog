import { Badge, Box, Heading, Text } from '@chakra-ui/react'

export const CatalogTitle = () => {
  return (
    <Box width="container.full" display="flex" flexDirection="column" alignItems="center">
      <Box mb={3}>
        <Badge colorScheme='teal' px={4} py={1} borderRadius="50px">
          Pilihan Terbaik
        </Badge>
      </Box>
  
      <Heading mb={2}>
        Pilihan CV Terbaik
      </Heading>
  
      <Text opacity={0.7} fontSize="md" textAlign="center" maxW="600px">
        Kami memiliki berbagai pilihan CV professional terbaik untukmu
        dengan paket yang menyesuaikan isi kantongmu
      </Text>
    </Box>
  )
}
