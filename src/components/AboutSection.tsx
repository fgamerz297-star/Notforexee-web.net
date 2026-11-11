import React, { useState } from 'react';
import { ShieldAlert, Compass, Swords, Heart, CheckCircle2, Sparkles, UserCheck } from 'lucide-react';
import { CREATOR_DATA } from '../data/websiteData';

export const AboutSection: React.FC = () => {
  const [activeOutfit, setActiveOutfit] = useState<'casual' | 'formal'>('casual');

  const pillars = [
    {
      title: 'Minecraft Survival',
      icon: Compass,
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-400',
      description:
        'Pushing vanilla limits with technical redstone farms, automated storage networks, and mega-scale aesthetic builds.'
    },
    {
      title: 'Minecraft Hardcore',
      icon: ShieldAlert,
      color: 'from-red-500 to-rose-600',
      textColor: 'text-red-400',
      description:
        'Living on the edge of permanent death. 1 Life to face the Ender Dragon, Ancient City Wardens, and custom dimension trials.'
    },
    {
      title: 'Minecraft PvP',
      icon: Swords,
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-400',
      description:
        'High-tier tournament combat specializing in End Crystal detonation, shield-piercing axe strikes, and rapid totem swapping.'
    },
    {
      title: 'Lifesteal SMP',
      icon: Heart,
      color: 'from-fuchsia-500 to-pink-600',
      textColor: 'text-fuchsia-400',
      description:
        'Brutal multiplayer survival where every kill steals hearts from opponents and every death brings you closer to the void.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07050e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-['Chakra_Petch']">
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Creator Dossier</span>
          </div>
          <h2 className="font-['Chakra_Petch'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            ABOUT <span className="text-gradient-purple">NOTFOREXEE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Dedicated Minecraft YouTuber, competitive PvP combatant, and hardcore adventurer crafting high-production video experiences.
          </p>
        </div>

        {/* 2-Column Split: Exact Skin Showcase & Creator Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Exact Minecraft Skin Display */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-1 rounded-2xl bg-gradient-to-b from-purple-500/30 via-purple-900/20 to-transparent">
              <div className="rounded-2xl bg-[#0c0817] border border-purple-500/20 overflow-hidden shadow-2xl">
                
                {/* Visual Viewport */}
                <div className="relative aspect-[4/3] bg-gradient-to-b from-[#130b26] to-[#0a0614] overflow-hidden group">
                  <img
                    src={
                      activeOutfit === 'casual'
                        ? '/assets/aistudio/image_ddeb35ef.png'
                        : '/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png'
                    }
                    alt="NoTforexee Official Minecraft Skin Render"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0817] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-purple-500/40 text-[11px] font-['Chakra_Petch'] font-semibold text-purple-200">
                    Official In-Game Render
                  </div>

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-semibold text-white">
                      {activeOutfit === 'casual' ? 'Autumn Forest Expedition' : 'Formal Milestone Avatar'}
                    </span>
                    <span className="text-purple-400">Preserved Proportions</span>
                  </div>
                </div>

                {/* Outfit Selector Controls */}
                <div className="p-4 border-t border-purple-900/30 bg-[#0e0a1c] space-y-3">
                  <div className="text-xs font-semibold text-slate-300 font-['Chakra_Petch'] uppercase tracking-wider">
                    Select Official Outfit Style:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveOutfit('casual')}
                      className={`px-3 py-2 rounded-lg text-xs font-['Chakra_Petch'] font-bold tracking-wider transition-all duration-200 ${
                        activeOutfit === 'casual'
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50 border border-purple-400'
                          : 'bg-purple-950/40 text-slate-300 hover:bg-purple-900/40 border border-purple-900/30'
                      }`}
                    >
                      Casual Explorer Hoodie
                    </button>
                    <button
                      onClick={() => setActiveOutfit('formal')}
                      className={`px-3 py-2 rounded-lg text-xs font-['Chakra_Petch'] font-bold tracking-wider transition-all duration-200 ${
                        activeOutfit === 'formal'
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50 border border-purple-400'
                          : 'bg-purple-950/40 text-slate-300 hover:bg-purple-900/40 border border-purple-900/30'
                      }`}
                    >
                      Formal Tuxedo & Allay
                    </button>
                  </div>
                </div>

                {/* Exact Skin Specifications (Guaranteed Never Altered) */}
                <div className="p-5 space-y-2.5 bg-[#0a0714] border-t border-purple-900/20 text-xs">
                  <div className="flex items-center justify-between py-1 border-b border-purple-950/50">
                    <span className="text-slate-400">Hair & Style:</span>
                    <span className="font-medium text-white">{CREATOR_DATA.skinDetails.hair}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-purple-950/50">
                    <span className="text-slate-400">Current View:</span>
                    <span className="font-medium text-purple-300">
                      {activeOutfit === 'casual' ? 'White Hoodie & Wing Patterns' : 'White Suit with Red Bowtie'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-purple-950/50">
                    <span className="text-slate-400">Companion:</span>
                    <span className="font-medium text-sky-400">{CREATOR_DATA.skinDetails.companion}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Footwear:</span>
                    <span className="font-medium text-emerald-400">{CREATOR_DATA.skinDetails.shoes}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-['Chakra_Petch'] text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Behind The Controls of NoTforexee
              </h3>
              
              <p className="text-slate-300 text-base leading-relaxed">
                {CREATOR_DATA.bio}
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                From day-one vanilla survival to dominating competitive Lifesteal SMPs and tackling custom modded realms like <span className="text-purple-300 font-semibold">"The Sift"</span>, my mission is to deliver authentic, cinematic Minecraft storytelling backed by sharp combat mechanics and genuine community engagement.
              </p>
            </div>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Zero fake scripting — 100% genuine gameplay & reactions',
                'Cinematic 4K production & custom shaders',
                'Active community SMP server with verified whitelist',
                'Weekly videos, shorts & interactive YouTube livestreams'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/20 border border-purple-900/30">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Content Creation Specs */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-purple-900/20 to-slate-900/40 border border-purple-500/20 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-['Chakra_Petch'] text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Featured Series & Game Modes</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tune in every week for high-adrenaline <strong className="text-white">Minecraft Hardcore</strong>, master-tier <strong className="text-white">End Crystal & Shield PvP</strong>, heart-racing <strong className="text-white">Lifesteal SMP</strong>, and long-term <strong className="text-white">Survival Mega-Builds</strong>.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid: Survival, Hardcore, PvP, and SMP */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-purple-900/30 pb-4">
            <div>
              <h3 className="font-['Chakra_Petch'] text-xl sm:text-2xl font-black text-white tracking-wide uppercase">
                Core Gaming Pillars
              </h3>
              <p className="text-xs text-slate-400">
                The four primary disciplines featured across the NoTforexee channel
              </p>
            </div>
            <span className="text-xs font-['Chakra_Petch'] font-semibold text-purple-400 uppercase tracking-wider">
              Minecraft Java Edition 1.21+
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0e091b] border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full rounded-[10px] bg-black/60 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <h4 className="font-['Chakra_Petch'] text-lg font-bold text-white mb-2 tracking-wide group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
