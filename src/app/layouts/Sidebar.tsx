import { NavLink } from 'react-router-dom';
import { useConfig } from '@/shared/hooks/useConfig';
import { StateRenderer } from '../../shared/ui/StateRenderer';

import SidebarIcon from '@/assets/icons/sidebar.svg?react';
import PracticesIcon from '@/assets/icons/clipboard-check.svg?react';
import LabsIcon from '@/assets/icons/flask.svg?react';
import PracticalPagesIcon from '@/assets/icons/file-code.svg?react';
import SitesIcon from '@/assets/icons/globe.svg?react';
import CourseworksIcon from '@/assets/icons/graduation-cap.svg?react';
import EssaysIcon from '@/assets/icons/file-text.svg?react';

const links = [
  { to: '/practices', label: 'Практические', icon: PracticesIcon },
  { to: '/labs', label: 'Лабораторные', icon: LabsIcon },
  { to: '/practical-pages', label: 'Страницы', icon: PracticalPagesIcon },
  { to: '/sites', label: 'Сайты', icon: SitesIcon },
  { to: '/courseworks', label: 'Курсовые', icon: CourseworksIcon },
  { to: '/essays', label: 'Рефераты', icon: EssaysIcon },
];

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  const { config, loading, error } = useConfig();

  return (
    <aside
      className={`bg-background-secondary text-foreground h-screen 
        fixed top-0 left-0 flex flex-col gap-6 p-4 transition-all duration-300
        border-r border-foreground/25 z-1 ${isOpen ? 'w-64' : 'w-fit'}`}
    >
      <div
        className={`flex items-center ${isOpen ? 'pl-2 justify-between' : 'justify-center'}`}
      >
        <span
          className={`text-xl font-semibold text-nowrap ${!isOpen && 'hidden'}`}
        >
          <StateRenderer data={config} error={error} loading={loading}>
            {config?.label}
          </StateRenderer>
        </span>
        <button
          onClick={toggle}
          className='p-2 bg-background-secondary rounded-full hover:bg-background hover:cursor-pointer'
        >
          <SidebarIcon className='h-6 w-6' />
        </button>
      </div>
      <nav className='flex flex-col gap-2'>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex w-full items-center p-2 rounded-sm hover:bg-secondary ${isActive ? 'bg-primary' : ''}`
            }
          >
            <link.icon className='h-6 w-6' />
            <span className={`ml-4 whitespace-nowrap ${!isOpen && 'hidden'}`}>
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
