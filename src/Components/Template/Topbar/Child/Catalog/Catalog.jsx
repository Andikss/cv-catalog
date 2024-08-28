import { MdMail, MdFilePresent, MdPayment } from 'react-icons/md';
import { HiRectangleStack } from 'react-icons/hi2';
import { CollapseItem } from '@/Components';
import { BiStar } from 'react-icons/bi';
import PropTypes from 'prop-types'

export const Catalog = ({ scroll }) => {
  const catalogItems = [
    { href: 'packet-1', label: 'Surat Lamaran', icon: <MdMail /> },
    { href: 'packet-2', label: 'CV ATS', icon: <MdFilePresent /> },
    { href: 'packet-3', label: 'Paket Regular', icon: <HiRectangleStack /> },
    { href: 'packet-4', label: 'Paket Premium', icon: <BiStar /> },
    { href: 'packet-5', label: 'Paket Platinum', icon: <MdPayment /> },
  ];

  return (
    <CollapseItem 
      label="Katalog" 
      items={catalogItems} 
      scroll={scroll} 
    />
  );
};

Catalog.propTypes = {
  scroll: PropTypes.func.isRequired
}