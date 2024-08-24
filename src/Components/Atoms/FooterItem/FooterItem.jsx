import { Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const FooterItem = ({ href, label }) => {
  return (
    <Link href={href} fontWeight="bold" fontSize="md" color="#344767">
      {label}
    </Link>
  )
}

FooterItem.propTypes = {
    href: PropTypes.string,
    label: PropTypes.string.isRequired
}

FooterItem.defaultProps = {
    link: '#',
};
