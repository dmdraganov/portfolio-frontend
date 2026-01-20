import { NavLink } from 'react-router-dom';
import { useConfig } from '@/shared/hooks/useConfig';
import { StateRenderer } from '../../shared/ui/StateRenderer';

const links = [
  { to: '/practices', label: 'Практические' },
  { to: '/labs', label: 'Лабораторные' },
  { to: '/practical-pages', label: 'Страницы' },
  { to: '/sites', label: 'Сайты' },
  { to: '/courseworks', label: 'Курсовые' },
  { to: '/essays', label: 'Рефераты' },
];

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  const { config, loading, error } = useConfig();

  return (
    <aside
      className={`bg-background-secondary text-foreground h-screen 
        fixed top-0 left-0 flex flex-col p-2 transition-all duration-300
        border-r border-foreground/25 ${isOpen ? 'w-64' : 'w-16'}`}
    >
      <div>
        <div
          className={`flex items-center h-16 px-4
            ${isOpen ? 'justify-between' : 'justify-center'}`}
        >
          <h1
            className={`text-xl font-bold text-nowrap ${!isOpen && 'hidden'}`}
          >
            <StateRenderer data={config} error={error} loading={loading}>
              {config?.label}
            </StateRenderer>
          </h1>
          <button
            onClick={toggle}
            className='p-2 bg-background-secondary rounded-full hover:bg-background'
          >
            {isOpen ? '<' : '>'}
          </button>
        </div>
        <nav className={`flex flex-col space-y-2 ${!isOpen && 'hidden'}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md hover:bg-secondary ${
                  isActive ? 'bg-primary' : ''
                }`
              }
            >
              <span className='ml-3 whitespace-nowrap'>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
