import PropTypes from 'prop-types';
import { Box, Tooltip, Link } from '@chakra-ui/react';

export const SocialMedia = ({ icon: Icon, label, link }) => {
  return (
    <Tooltip hasArrow label={label}>
      <Link href={link} isExternal>
        <Box
          width="40px"
          height="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          background="gray.200"
        >
          <Icon fontSize="large" />
        </Box>
      </Link>
    </Tooltip>
  );
};

SocialMedia.propTypes = {
  icon: PropTypes.elementType.isRequired, 
  label: PropTypes.string.isRequired,     
  link: PropTypes.string.isRequired 
};

SocialMedia.defaultProps = {
  link: '#',
};
