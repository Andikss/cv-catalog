import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen]     = useState(true); 
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); 

  const openPopup    = () => setIsPopupOpen(true);
  const closePopup   = () => setIsPopupOpen(false);
  const openPopover  = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPopoverOpen) {
        openPopover();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isPopoverOpen]);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, isPopoverOpen, openPopover, closePopover }}>
      {children}
    </PopupContext.Provider>
  );
};

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
