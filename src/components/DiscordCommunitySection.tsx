import React, { useState } from 'react';
import { Disc as DiscordIcon, Copy, Check, Users, Sparkles, Hash, Volume2, ShieldAlert, Award } from 'lucide-react';
import { CREATOR_DATA, DISCORD_PERKS } from '../data/websiteData';

export const DiscordCommunitySection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyInvite = () => {
    navigator.clipboard.writeText(CREATOR_DATA.discordInvite);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="discord" className="py-24 relative overflow-hidden bg-[#07050e]">
      {/* Intense purple Discord atmospheric glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#5865F2]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[400px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5865F2]/20 border border-[#5865F2]/40 text-indigo-300 text-xs font-semibold tracking-wider uppercase font-['Chakra_Petch']">
            <DiscordIcon className="w-3.5 h-3.5 text-indigo-400" />
            <span>Official Community Discord</span>
          </div>
          <h2 className="font-['Chakra_Petch'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            DISCORD <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-400">COMMUNITY</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Join thousands of Minecrafters, team up for Lifesteal SMPs, get whitelist access, and chat directly with NoTforexee.
          </p>
        </div>

        {/* 2-Column Showcase: Interactive Server Card + Server Perks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Interactive Discord Server Widget Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-1 bg-gradient-to-b from-[#5865F2]/40 via-purple-600/20 to-transparent shadow-2xl">
              <div className="rounded-[22px] bg-[#0c0819] border border-[#5865F2]/30 overflow-hidden">
                
                {/* Discord Server Banner */}
                <div className="relative h-32 bg-gradient-to-r from-[#201547] via-[#331c6b] to-[#1a113a] p-4 flex items-end">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5865F2_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#5865F2]/40 text-[11px] font-['Chakra_Petch'] font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span>840 Online Now</span>
                  </div>
                </div>

                {/* Server Profile & Channels Preview */}
                <div className="px-6 pb-6 pt-3 relative space-y-5">
                  <div className="flex items-end gap-4 -mt-12">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-4 border-[#0c0819] shadow-xl bg-slate-900 shrink-0">
                      <img
                        src="/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png"
                        alt="NoTforexee Server Icon"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-['Chakra_Petch'] text-xl font-bold text-white">
                          NoTforexee Realm
                        </h3>
                        <span className="p-0.5 rounded bg-[#5865F2] text-white">
                          <Check className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="text-xs text-indigo-300">
                        discord.gg/zMVjQjTnRy · Verified Creator Server
                      </p>
                    </div>
                  </div>

                  {/* Channel List Sample */}
                  <div className="p-4 rounded-xl bg-[#110c24] border border-purple-900/30 space-y-2 text-xs">
                    <div className="text-[10px] font-['Chakra_Petch'] uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Popular Server Lounges:
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-purple-950/40 text-purple-200">
                      <span className="flex items-center gap-2">
                        <Hash className="w-3.5 h-3.5 text-indigo-400" />
                        <span># 📢・announcements-and-uploads</span>
                      </span>
                      <span className="text-[10px] text-purple-400">Pinned</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-purple-950/20 text-slate-300">
                      <span className="flex items-center gap-2">
                        <Hash className="w-3.5 h-3.5 text-slate-400" />
                        <span># ⚔️・smp-recruitment-and-teams</span>
                      </span>
                      <span className="text-[10px] text-emerald-400">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-purple-950/20 text-slate-300">
                      <span className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>🔊・Creator Stream Voice Lounge</span>
                      </span>
                      <span className="text-[10px] text-slate-400">12 Connected</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    {/* Explicit user request: JOIN MY DISCORD SERVER button */}
                    <a
                      href={CREATOR_DATA.discordInvite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#5865F2] hover:bg-[#4752c4] text-white font-['Chakra_Petch'] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#5865F2]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <DiscordIcon className="w-4 h-4" />
                      <span>JOIN MY DISCORD SERVER</span>
                    </a>

                    <button
                      onClick={handleCopyInvite}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-purple-950/50 hover:bg-purple-900 border border-purple-500/30 text-purple-200 text-xs font-['Chakra_Petch'] font-semibold transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Invite Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Invite</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Member Benefits & Perks */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-['Chakra_Petch'] text-2xl font-bold text-white tracking-wide">
              Exclusive Community Server Perks
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              Become part of the inner circle. The Discord server is where we organize community SMP factions, host weekend Bedwars tournaments, vote on video concepts, and hang out after streams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {DISCORD_PERKS.map((perk, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0c0817] border border-purple-900/30 space-y-2 hover:border-purple-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-['Chakra_Petch'] font-bold uppercase tracking-wider text-purple-400 px-2 py-0.5 rounded bg-purple-950/70 border border-purple-500/30">
                      {perk.badge}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <h4 className="font-['Chakra_Petch'] text-sm font-bold text-white">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Link Banner */}
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-slate-300 flex items-center justify-between">
              <span>Direct Link: <strong className="text-white">discord.gg/zMVjQjTnRy</strong></span>
              <span className="text-purple-400 font-semibold font-['Chakra_Petch']">100% Free To Join</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
