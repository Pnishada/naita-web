import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getCSRFToken } from '../../services/authService';
import { useLanguage } from '../../context/LanguageContext';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiBookOpen, FiClock, FiGrid, FiUser } from 'react-icons/fi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';

export default function TopBar() {
  const { user } = useAuth();
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    getCSRFToken();
  }, []);

  const menuItems = [
    { icon: <FiBookOpen />, label: 'Library', href: '/library' },
    { icon: <HiOutlineOfficeBuilding />, label: 'Regional Centres', href: '/regional-centres' },
    { icon: <FiClock />, label: 'Upcoming Programmes', href: '/upcoming' },
    { icon: <FiGrid />, label: 'Institutes, Centres & Units', href: '/units' },
    { icon: <FiUser />, label: 'Contacts', href: '/contacts' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com' },
    { icon: <FaYoutube />, href: 'https://youtube.com' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
    { icon: <FaWhatsapp />, href: 'https://wa.me/' },
    { icon: <FaInstagram />, href: 'https://instagram.com' },
  ];

  return (
    <div className="w-full bg-orange-700 text-white text-sm shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 overflow-x-auto">
        {/* === Left Menu Items === */}
        <div className="flex items-center gap-6 whitespace-nowrap">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="flex items-center gap-1 hover:underline">
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* === Right Social & Language === */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/80 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-orange-700 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="bg-gray-100 text-gray-800 rounded px-2 py-0.5 flex gap-2 text-xs">
            <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'font-bold text-orange-700' : ''}>En</button>|
            <button onClick={() => changeLanguage('si')} className={language === 'si' ? 'font-bold text-orange-700' : ''}>සිං</button>|
            <button onClick={() => changeLanguage('ta')} className={language === 'ta' ? 'font-bold text-orange-700' : ''}>த</button>
          </div>
        </div>
      </div>
    </div>
  );
}
