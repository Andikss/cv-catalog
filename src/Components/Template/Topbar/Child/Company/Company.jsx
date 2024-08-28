import { Link } from '@chakra-ui/react'
import { BiBuilding } from 'react-icons/bi'
import PropTypes from 'prop-types'

export const Company = ({ scroll }) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      gap={1}
      href="#companies"
      onClick={(e) => scroll(e, 'companies')}
    >
      <BiBuilding /> Perusahaan
    </Link>
  )
}

Company.propTypes = {
    scroll: PropTypes.func.isRequired
}