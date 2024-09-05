import { Button, Link } from "@chakra-ui/react"
import { BiCart } from "react-icons/bi"

export const CV = () => {
  return (
    <Button 
        as={Link}
        target="_blank"
        href='https://docs.google.com/forms/d/e/1FAIpQLScK5VYehXbAwkSshei6JeA_vXh_tHB771ZxjCX8zpe7aTu3dA/viewform' 
        width="100%"
        borderRadius="50px" 
        leftIcon={<BiCart/>}
        background="#4b8bfa" 
        color="white" 
        _hover={{ 
          background: 'blue.600', 
          textDecoration: 'none', 
        }} 
    >
      Buat CV
    </Button>
  )
}
