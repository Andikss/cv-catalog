import { useState } from 'react';
import { Box, Button, Collapse, Divider, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const CollapseItem = ({ icon, label, items, scroll }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        display="flex"
        alignItems="center"
        gap={1}
        href={`#${label.toLowerCase()}`}
      >
        {icon} {label}
      </Link>
      <Collapse in={isHovered} animateOpacity>
        <Box
          position="absolute" 
          top="100%" 
          left="0" 
          mt={2} 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          zIndex="10" 
          minW="200px" 
          display="flex" 
          flexDirection="column"
        >
          {items.map((item, index) => (
            item.divider ? (
              <Divider borderColor='black' key={index} />
            ) : (
              <Button
                key={index}
                as={Link}
                href={item.href}
                variant="ghost" 
                leftIcon={item.icon} 
                textAlign="start" 
                justifyContent="flex-start" 
                onClick={(e) => {
                  if (scroll) {
                    e.preventDefault();
                    scroll(e, item.href);
                  }
                }}
              >
                {item.label}
              </Button>
            )
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

CollapseItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      }),
      PropTypes.shape({
        divider: PropTypes.bool,
      })
    ])
  ).isRequired,
  scroll: PropTypes.func,
};