import { Link } from "@chakra-ui/react"
import { BsGithub } from "react-icons/bs"

export const Developer = () => {
  return (
    <Link
      display="flex"
      alignItems="center"
      gap={1}
      href='https://andikss.github.io'
      target='_blank'
    >
      <BsGithub />
      Developer
    </Link>
  )
}
