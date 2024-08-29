import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const PopupContext = createContext();

export const usePopup = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen]     = useState(true); 
  const [isPopoverOpen, setIsPopoverOpen] = useState(false); 

  const openPopup    = () => setIsPopupOpen(true);
  const closePopup   = () => {
    setIsPopupOpen(false)
    localStorage.removeItem('hasShownPopover');
  };
  const openPopover  = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, openPopup, closePopup, isPopoverOpen, openPopover, closePopover }}>
      {children}
    </PopupContext.Provider>
  );
};

PopupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
