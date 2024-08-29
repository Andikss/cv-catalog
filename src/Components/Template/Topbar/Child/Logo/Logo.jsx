import { Box, Heading, Image } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      <Image src='assets/logo/favicon.webp' height="40px"/>
      <Heading size="md" color="#344767">DESAIN CV TOP</Heading>
    </Box>
  )
}
