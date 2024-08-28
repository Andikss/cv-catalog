import { Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Testimonial = ({ scroll }) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      gap={1}
      href="#testimonials"
      onClick={(e) => scroll(e, 'testimonials')}
    >
      Testimoni
    </Link>
  )
}

Testimonial.propTypes = {
    scroll: PropTypes.func.isRequired
}