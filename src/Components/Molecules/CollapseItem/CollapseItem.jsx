import { Box, Button, Divider, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, useBreakpointValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const CollapseItem = ({ icon, label, items, scroll }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Popover
      isLazy
      trigger={isMobile ? 'click' : 'hover'}
      placement="bottom-end"
    >
      <PopoverTrigger>
        <Box>
          <Link
            display="flex"
            alignItems="center"
            gap={1}
            href={`#${label.toLowerCase()}`}
            textDecoration="none" // Remove underline from Link
            _hover={{ textDecoration: 'none' }} // Ensure no underline on hover
          >
            {icon} {label}
          </Link>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        mt={2}
        bg="white"
        boxShadow="md"
        borderRadius="30px"
        w="auto"
        display="flex"
        flexDirection="column"
        p={3} 
      >
        <PopoverArrow />
        {items.map((item, index) => (
          item.divider ? (
            <Divider borderColor="gray.500" key={index} my={1} />
          ) : (
            <Button
              key={index}
              as={Link}
              href={item.href}
              variant="ghost" 
              leftIcon={item.icon} 
              textAlign="start" 
              justifyContent="flex-start" 
              borderRadius="30px"
              color="gray.600"
              target='_blank'
              onClick={(e) => {
                if (scroll) {
                  e.preventDefault();
                  scroll(e, item.href);
                }
              }}
              px={4}
              _hover={{ background: 'gray.100', textDecoration: 'none' }} 
              _focus={{ boxShadow: 'none' }}
            >
              {item.label}
            </Button>
          )
        ))}
      </PopoverContent>
    </Popover>
  );
};

CollapseItem.propTypes = {
  icon: PropTypes.element,
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
