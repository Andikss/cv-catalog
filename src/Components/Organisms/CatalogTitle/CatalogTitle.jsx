import { Badge, Box, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const CatalogTitle = ({ label, title, description }) => {
  return (
    <Box width="container.full" display="flex" flexDirection="column" alignItems="center">
      {label && (
        <Box mb={3}>
          <Badge colorScheme='orange' px={4} py={1} borderRadius="50px">
            {label}
          </Badge>
        </Box>
      )}
  
      <Heading mb={2} color="#344767">
        {title}
      </Heading>
  
      <Text opacity={0.7} fontSize="md" textAlign="center" maxW="600px">
        {description}
      </Text>
    </Box>
  )
}

CatalogTitle.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}