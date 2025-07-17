import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'react-feather';
import logo from '../../assets/images/logos/Naita-Text-logo.png';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const location = useLocation();

  const courseSubLinks = [
    { path: '/courses/nvq', name: '🎓 NVQ Courses' },
    { path: '/courses/situational', name: '📘 Situational Courses' },
    { path: '/courses/village', name: '🏡 Village Level Courses' },
    { path: '/courses/ojt', name: '🛠️ OJT Training' },
  ];

  // Add sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-12 left-0 w-full z-50 transition duration-300 ${showShadow ? 'shadow-md bg-white/80 backdrop-blur-md' : 'bg-white/50 backdrop-blur-sm'}`}>
      <nav className="container mx-auto px-4 py-2 lg:py-1 flex items-center justify-between relative h-16">

        {/* Logo */}
        <div className='w-24 lg:w-36'>
          <img src={logo} alt="NAITA Logo" className="h-auto object-contain" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-naita-red focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-semibold">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/RPL" label="RPL" />

          {/* Courses Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-red-700 transition duration-150">
              Courses <ChevronDown size={18} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50">
              <div className="p-3 flex flex-col gap-2">
                {courseSubLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-gray-700 hover:text-red-700 hover:bg-gray-100 px-4 py-2 rounded transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <NavItem to="/institutions" label="Institutions" />
          <NavItem to="/news" label="News" />
          <NavItem to="/partners" label="Partners" />
          <NavItem to="/downloads" label="Downloads" />
          <NavItem to="/contact" label="Contact" />

          {/* Search */}
          <div className="relative w-[200px]">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-4 pr-[80px] rounded-full border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-white text-sm bg-red-700 rounded-full flex items-center gap-1">
              <Search size={16} /> Search
            </button>
          </div>
        </ul>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-40 lg:hidden">
            <div className="flex flex-col space-y-4 py-4 px-6">
              {['/', '/about', '/RPL', '/institutions', '/news', '/downloads', '/contact'].map(path => (
                <NavItemMobile key={path} to={path} label={path === '/' ? 'Home' : path.replace('/', '')} />
              ))}

              {/* Courses Expand */}
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex justify-between items-center text-left font-semibold text-gray-700"
                >
                  Courses <ChevronDown size={18} className={`${mobileCoursesOpen ? 'rotate-180' : ''} transition`} />
                </button>
                {mobileCoursesOpen && (
                  <div className="ml-4 mt-1 space-y-2">
                    {courseSubLinks.map(link => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="text-sm text-gray-600 hover:text-red-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Search */}
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-10 pl-4 pr-[80px] border border-gray-300 rounded-full focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-white text-sm bg-red-700 rounded-full flex items-center gap-1">
                  <Search size={16} /> Search
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Desktop Nav Item
function NavItem({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`hover:text-red-700 transition ${
        isActive ? 'text-naita-red' : 'text-gray-700'
      }`}
    >
      {label}
    </Link>
  );
}

// Mobile Nav Item
function NavItemMobile({ to, label }) {
  return (
    <Link
      to={to}
      className="text-base text-gray-700 hover:text-red-600 transition"
    >
      {label}
    </Link>
  );
}
