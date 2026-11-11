import React from 'react';
import { Youtube, Disc as DiscordIcon, Play, Sparkles, Shield, Trophy } from 'lucide-react';
import { CREATOR_DATA } from '../data/websiteData';

interface HeroSectionProps {
  onWatchYouTubeClick: () => void;
  onExploreGamingZoneClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onWatchYouTubeClick,
  onExploreGamingZoneClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden minecraft-grid-bg"
    >
      {/* Cinematic purple ambient lighting and backdrop gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-700/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle floating obsidian particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-purple-400 rotate-45 shadow-[0_0_8px_#c084fc]" />
        <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-fuchsia-400 rotate-12 shadow-[0_0_8px_#e879f9]" />
        <div className="absolute bottom-1/3 left-[25%] w-2 h-2 bg-sky-400 rotate-45 shadow-[0_0_8px_#38bdf8]" />
        <div className="absolute top-2/3 right-[30%] w-2.5 h-2.5 bg-purple-300 rotate-45 shadow-[0_0_8px_#d8b4fe]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Typography, Tagline, Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Gaming Badge / Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-200 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] inline-block" />
              <span className="font-['Chakra_Petch']">Official Minecraft Channel</span>
              <span className="text-purple-400/60">·</span>
              <span className="text-slate-300">Java & Bedrock</span>
            </div>

            {/* Brand Master Title & Subtitle */}
            <div className="space-y-3">
              <h1 className="font-['Chakra_Petch'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-purple-200 drop-shadow-[0_4px_24px_rgba(168,85,247,0.4)]">
                  NOTFOREXEE
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-[2px] w-10 bg-gradient-to-r from-purple-500 to-transparent hidden sm:block" />
                <h2 className="font-['Chakra_Petch'] text-lg sm:text-xl md:text-2xl font-bold tracking-widest text-purple-400 uppercase">
                  MINECRAFT GAMER & CONTENT CREATOR
                </h2>
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {CREATOR_DATA.subheading}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* WATCH YOUTUBE Button */}
              <button
                onClick={onWatchYouTubeClick}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-fuchsia-600 text-white font-['Chakra_Petch'] font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-red-600/30 hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>WATCH YOUTUBE</span>
              </button>

              {/* JOIN DISCORD Button */}
              <a
                href={CREATOR_DATA.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/40 text-purple-100 font-['Chakra_Petch'] font-bold text-sm sm:text-base tracking-wider uppercase shadow-lg shadow-purple-950/50 hover:shadow-purple-700/40 hover:border-purple-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <DiscordIcon className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                <span>JOIN DISCORD</span>
              </a>

              {/* Quick Game Mode Jump */}
              <button
                onClick={onExploreGamingZoneClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white font-['Chakra_Petch'] text-sm font-semibold tracking-wider uppercase transition-colors"
              >
                <Trophy className="w-4 h-4 text-purple-400" />
                <span>Gaming Zones</span>
              </button>
            </div>

            {/* Stats Proof Row */}
            <div className="pt-6 border-t border-purple-900/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {CREATOR_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-['Chakra_Petch'] text-xl sm:text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-purple-300/80 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Prominent Uploaded Character Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[460px]">
              
              {/* Outer decorative neon frame */}
              <div className="absolute -inset-2 bg-gradient-to-b from-purple-500/30 via-fuchsia-500/20 to-sky-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
              
              {/* Main character container card */}
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-[#0e0a1b]/80 shadow-2xl backdrop-blur-sm">
                
                {/* Character Artwork Header with celebratory pose & Minecraft "NoTFOREXEE" */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gradient-to-b from-[#0e0a25] to-[#160f2d]">
                  <img
                    src="/assets/aistudio/ChatGPT_Image_Sep_30__2026__06_02_19_PM_a8679968.png"
                    alt="NoTforexee Minecraft Character Artwork"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a1b] via-transparent to-black/20" />
                  
                  {/* Floating Official PFP Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-purple-500/40 shadow-lg">
                    <img
                      src="/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png"
                      alt="Official Avatar Badge"
                      className="w-5 h-5 rounded-full ring-1 ring-purple-400"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-['Chakra_Petch'] text-xs font-bold text-purple-200">
                      Verified Skin
                    </span>
                  </div>
                </div>

                {/* Character Info Card Bottom Strip */}
                <div className="p-5 space-y-3 bg-[#0d0919] border-t border-purple-900/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-['Chakra_Petch'] text-lg font-bold text-white tracking-wide">
                        NoTforexee In-Game Skin
                      </h3>
                      <p className="text-xs text-purple-300">
                        White Tuxedo · Red Bowtie · Blue Allay Companion
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-purple-950/80 border border-purple-500/30 text-[11px] font-['Chakra_Petch'] font-semibold text-purple-300">
                      Java 1.21
                    </div>
                  </div>

                  {/* Character perks */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-purple-950/60 text-center">
                    <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-900/20">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Playstyle</div>
                      <div className="text-xs font-bold text-white font-['Chakra_Petch']">Hardcore</div>
                    </div>
                    <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-900/20">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Combat</div>
                      <div className="text-xs font-bold text-white font-['Chakra_Petch']">Crystal PvP</div>
                    </div>
                    <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-900/20">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">Companion</div>
                      <div className="text-xs font-bold text-sky-300 font-['Chakra_Petch']">Blue Allay</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
