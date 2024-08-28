import { useState } from 'react';
import { Box, Button, Collapse, Divider, Link, useBreakpointValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const CollapseItem = ({ icon, label, items, scroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      position="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
      onClick={isMobile ? handleToggle : undefined}
    >
      <Link
        display="flex"
        alignItems="center"
        gap={1}
        href={`#${label.toLowerCase()}`}
      >
        {icon} {label}
      </Link>
      <Collapse in={isOpen} animateOpacity>
        <Box
          position="absolute" 
          top="100%" 
          left={isMobile ? '0' : '-200%'} 
          mt={2} 
          bg="white" 
          boxShadow="md" 
          borderRadius="md" 
          zIndex="10" 
          minW="200px" 
          display="flex" 
          flexDirection="column"
          _before={{
            content: '""',
            display: isMobile ? 'none' : 'block',
            position: 'absolute',
            bottom: '100%',
            right: '10px',
            borderWidth: '8px',
            borderStyle: 'solid',
            borderColor: 'transparent transparent white transparent',
          }}
        >
          {items.map((item, index) => (
            item.divider ? (
              <Divider borderColor="black" key={index} />
            ) : (
              <Button
                key={index}
                as={Link}
                href={item.href}
                variant="ghost" 
                leftIcon={item.icon} 
                textAlign="start" 
                justifyContent="flex-start" 
                target='_blank'
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
