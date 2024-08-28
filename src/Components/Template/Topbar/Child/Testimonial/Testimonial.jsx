import { Link } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { MdRateReview } from 'react-icons/md'

export const Testimonial = ({ scroll }) => {
  return (
    <Link
      display="flex"
      alignItems="center"
      gap={1}
      href="#testimonials"
      onClick={(e) => scroll(e, 'testimonials')}
    >
      <MdRateReview /> Testimoni
    </Link>
  )
}

Testimonial.propTypes = {
    scroll: PropTypes.func.isRequired
}