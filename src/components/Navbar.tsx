import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Youtube, Disc as DiscordIcon } from 'lucide-react';
import { CREATOR_DATA } from '../data/websiteData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Me', id: 'about' },
    { label: 'YouTube Videos', id: 'videos' },
    { label: 'Gaming Zone', id: 'gaming-zone' },
    { label: 'Live Stream', id: 'livestream' },
    { label: 'Discord', id: 'discord' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090613]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones, gap-8 */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand element */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="NoTforexee Official Website Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-sky-400 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png"
                alt="NoTforexee Gaming Logo"
                className="w-full h-full object-cover rounded-full bg-slate-900"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Chakra_Petch'] text-xl font-bold tracking-wider text-white group-hover:text-purple-300 transition-colors">
                NoTforexee
              </span>
            </div>
          </a>

          {/* Zone 2: 5-6 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-purple-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CREATOR_DATA.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-900/40 hover:shadow-purple-700/50 transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Join Discord</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-purple-950/40 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-[#0c0817] border-b border-purple-500/20 shadow-2xl space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-900/40 text-purple-200 border-l-2 border-purple-400'
                    : 'text-slate-300 hover:bg-purple-950/30 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-purple-900/40 flex flex-col gap-2">
            <a
              href={CREATOR_DATA.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-600/90 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe on YouTube</span>
            </a>
            <a
              href={CREATOR_DATA.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <DiscordIcon className="w-4 h-4" />
              <span>Join Discord Server</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
