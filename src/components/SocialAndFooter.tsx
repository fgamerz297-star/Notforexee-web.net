import React from 'react';
import { Youtube, Disc as DiscordIcon, ExternalLink, ArrowUp, Heart, Shield } from 'lucide-react';
import { CREATOR_DATA } from '../data/websiteData';

interface SocialAndFooterProps {
  onNavigate: (sectionId: string) => void;
}

export const SocialAndFooter: React.FC<SocialAndFooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050309] border-t border-purple-900/30 overflow-hidden pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section 7: Social Media Hub Cards */}
        <div id="socials" className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="font-['Chakra_Petch'] text-2xl font-bold text-white tracking-wide uppercase">
              OFFICIAL SOCIAL MEDIA
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Connect with NoTforexee across verified platforms for content drops and announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* YouTube Card */}
            <a
              href={CREATOR_DATA.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0c0817] border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/90 flex items-center justify-center text-white shadow-lg shadow-red-600/40 group-hover:scale-110 transition-transform">
                  <Youtube className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h4 className="font-['Chakra_Petch'] text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    YouTube Channel
                  </h4>
                  <p className="text-xs text-slate-400">
                    {CREATOR_DATA.youtubeHandle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-['Chakra_Petch'] font-semibold text-red-400 uppercase tracking-wider">
                <span>Subscribe</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Discord Card */}
            <a
              href={CREATOR_DATA.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#0c0817] border border-[#5865F2]/30 hover:border-[#5865F2]/60 transition-all duration-300 hover:-translate-y-1 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5865F2] flex items-center justify-center text-white shadow-lg shadow-[#5865F2]/40 group-hover:scale-110 transition-transform">
                  <DiscordIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-['Chakra_Petch'] text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    Discord Server
                  </h4>
                  <p className="text-xs text-slate-400">
                    discord.gg/zMVjQjTnRy
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-['Chakra_Petch'] font-semibold text-indigo-400 uppercase tracking-wider">
                <span>Join Realm</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Section 8: Main Footer */}
        <div className="pt-12 border-t border-purple-900/30 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Exact Gaming Logo and Brand Tag */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-sky-400 shrink-0">
              <img
                src="/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png"
                alt="NoTforexee Official Gaming Logo"
                className="w-full h-full object-cover rounded-full bg-slate-900"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-['Chakra_Petch'] text-xl font-bold tracking-wider text-white">
                NOTFOREXEE
              </div>
              <p className="text-xs text-purple-400 font-medium">
                Official Minecraft Gamer & Content Creator
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('videos')}
              className="hover:text-white transition-colors"
            >
              Videos
            </button>
            <button
              onClick={() => onNavigate('gaming-zone')}
              className="hover:text-white transition-colors"
            >
              Gaming Zone
            </button>
            <button
              onClick={() => onNavigate('livestream')}
              className="hover:text-white transition-colors"
            >
              Live Stream
            </button>
            <button
              onClick={() => onNavigate('discord')}
              className="hover:text-white transition-colors"
            >
              Discord
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-purple-200 hover:text-white transition-colors flex items-center gap-2 text-xs font-['Chakra_Petch'] font-semibold"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright notice & Disclaimer */}
        <div className="pt-6 border-t border-purple-950/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 NoTforexee. All Rights Reserved.
          </p>
          <p className="text-center sm:text-right text-[11px]">
            Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
          </p>
        </div>

      </div>
    </footer>
  );
};
