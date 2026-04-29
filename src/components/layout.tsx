'use client';

interface AppHeaderProps {
  logo: string;
  navLinks: { href: string; label: string }[];
  demoBadge: boolean;
}

const AppHeader = ({ logo, navLinks, demoBadge }: AppHeaderProps) => {
  return (
    <header className="bg-white py-4">
      <div className="container flex items-center justify-between">
        <h1 className="text-lg font-bold">{logo}</h1>
        <nav>
          <ul className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {demoBadge && (
          <div className="ml-4 rounded-md bg-accent py-1 px-2 text-sm text-white">
            Demo
          </div>
        )}
      </div>
    </header>
  );
};

interface AppSidebarProps {
  items: { icon: React.ReactNode; label: string; href: string; active: boolean }[];
}

const AppSidebar = ({ items }: AppSidebarProps) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed top-0 left-0 z-40 w-full md:w-64">
      <button
        type="button"
        className="md:hidden block fixed top-4 left-4 z-50 rounded-md bg-white py-2 px-4 text-sm text-gray-700"
        onClick={toggleSidebar}
      >
        Menu
      </button>
      <div
        className={cn('h-screen p-4", {
          'block': open,
          'hidden': !open,
        })}
      >
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item.href} className="py-2">
                <a
                  href={item.href}
                  className={cn('text-sm', {
                    'text-primary': item.active,
                    'text-gray-700': !item.active,
                  })}
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

interface DemoBannerProps {
  children: React.ReactNode;
}

const DemoBanner = ({ children }: DemoBannerProps) => {
  const [dismissed, setDismissed] = useState(
    localStorage.getItem('demo-banner-dismissed') === 'true'
  );

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('demo-banner-dismissed', 'true');
  };

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-accent py-2 text-center text-sm text-white">
      {children}
      <button
        type="button"
        className="ml-4 rounded-md bg-white py-1 px-2 text-sm text-gray-700"
        onClick={handleDismiss}
      >
        Dismiss
      </button>
    </div>
  );
};

export { AppHeader, AppSidebar, DemoBanner };