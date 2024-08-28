import { MdPostAdd, MdRecommend, MdListAlt } from 'react-icons/md';
import { CollapseItem } from '@/Components';
import { BsInstagram } from 'react-icons/bs';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export const Vacancy = () => {
  const VacancyItems = [
    { href: 'https://toploker.com/lowongan-kerja-terbaru', label: 'Loker Terbaru', icon: <MdPostAdd /> },
    { href: 'https://toploker.com/lowongan-kerja-rekomendasi/daftar', label: 'Loker Rekomendasi', icon: <MdRecommend /> },
    { href: 'https://toploker.com/widget-ig/daftar', label: 'Akun Loker Instagram', icon: <BsInstagram /> },

    { divider: true },

    { href: 'https://toploker.com/jobfair/daftar', label: 'Jobfair', icon: <FaMagnifyingGlass /> },
    { href: 'https://toploker.com/tips/list-tips', label: 'Tips Karir', icon: <MdListAlt /> },
  ];

  return (
    <CollapseItem 
      label="Lowongan" 
      items={VacancyItems} 
    />
  );
};
