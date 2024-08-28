import { Box, Heading, Image } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Image src='assets/favicon.png' height="40px"/>
      <Heading size="md">DESAIN CV TOP</Heading>
    </Box>
  )
}
