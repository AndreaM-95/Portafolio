import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Sobre mi', href: '/', current: false },
  { name: 'Proyectos', href: '/Projects', current: false },
  { name: 'Contacto', href: '/Contact', current: false }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add('dark');
      document.querySelector('html')?.classList.remove('light');
    } else {
      document.querySelector('html')?.classList.remove('dark');
      document.querySelector('html')?.classList.add('light');
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <Disclosure as="nav" className="relative z-50">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8 dark:bg-[#1F1F1F] bg-[#7CD5F0]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-slate-100" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(item => {
                      const isActive = location.pathname === item.href;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            isActive
                              ? 'border-b-2 border-[#0B7C83] dark:border-[#1BD8AA] dark:text-[#1BD8AA] text-[#0B7C83]'
                              : 'border-b-2 border-transparent dark:text-gray-300 text-gray-700 dark:hover:text-[#1BD8AA] hover:text-teal-700',
                            'px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={isActive ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button
                className="px-4 py-2 dark:text-gray-300 text-[#0B7C83] hover:text-teal-700 text-lg dark:hover:text-teal-500"
                onClick={changeTheme}
              >
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon} />
              </button>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute w-full bg-[#7CD5F0] dark:bg-[#1F1F1F] z-50">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-teal-700 text-white'
                      : 'text-gray-900 hover:bg-[#0B7C83] hover:text-white dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
