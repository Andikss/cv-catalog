import { Center, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Stat = ({total, title, description}) => {
  return (
    <Center flexDirection="column">
      <Text color="teal" fontSize="xxx-large" fontWeight="600" mb={2}>
        {total}+
      </Text>
      <Text fontWeight="550" fontSize="large">
        {title}
      </Text>
      <Text opacity="0.7" textAlign="center">
        {description}
      </Text>
    </Center>
  )
}

Stat.propTypes = {
    total: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}