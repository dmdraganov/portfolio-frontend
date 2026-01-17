import { NavLink } from 'react-router-dom';

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
  return (
    <aside
      className={`bg-card text-foreground h-screen fixed top-0 left-0 flex flex-col justify-between p-2 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className={isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}>
        <div className='flex items-center justify-start h-16 px-4'>
          <h1 className='text-xl font-bold text-nowrap'>Драганов Д.А.</h1>
        </div>
        <nav className='flex flex-col space-y-2'>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
            >
              <span className='ml-3 whitespace-nowrap'>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <button
        onClick={toggle}
        className='p-2 self-end m-2 bg-gray-700 rounded-full hover:bg-gray-600'
      >
        {isOpen ? '<' : '>'}
      </button>{' '}
    </aside>
  );
};
