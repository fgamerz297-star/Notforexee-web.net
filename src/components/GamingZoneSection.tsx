import React from 'react';
import { Skull, Hammer, Swords, HeartPulse, Trophy, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { GAMING_ZONES, GameModeItem } from '../data/websiteData';

interface GamingZoneSectionProps {
  onSelectGameMode: (gameMode: GameModeItem) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Skull':
      return Skull;
    case 'Hammer':
      return Hammer;
    case 'Swords':
      return Swords;
    case 'HeartPulse':
      return HeartPulse;
    case 'Trophy':
      return Trophy;
    case 'Compass':
      return Compass;
    default:
      return ShieldCheck;
  }
};

export const GamingZoneSection: React.FC<GamingZoneSectionProps> = ({
  onSelectGameMode
}) => {
  return (
    <section id="gaming-zone" className="py-24 relative overflow-hidden bg-[#07050e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-fuchsia-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-['Chakra_Petch']">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            <span>Minecraft Realms & Modes</span>
          </div>
          <h2 className="font-['Chakra_Petch'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            GAMING <span className="text-gradient-purple">ZONE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore the diverse Minecraft battlegrounds, survival worlds, and custom dimensions mastered by NoTforexee.
          </p>
        </div>

        {/* 6 Cards Grid for the requested modes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMING_ZONES.map((zone) => {
            const Icon = getIcon(zone.iconName);

            return (
              <div
                key={zone.id}
                onClick={() => onSelectGameMode(zone)}
                className="group relative rounded-2xl bg-[#0c0818] border border-purple-900/30 hover:border-purple-500/50 p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Subtle top color glow line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: zone.accentColor }}
                />

                <div className="space-y-4">
                  {/* Card Header: Icon + Difficulty Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${zone.accentColor}18`,
                        border: `1px solid ${zone.accentColor}40`
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: zone.accentColor }} />
                    </div>

                    <span className="px-2.5 py-1 rounded bg-black/50 border border-purple-900/40 text-[10px] font-['Chakra_Petch'] font-semibold text-slate-300 uppercase">
                      {zone.difficulty}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-['Chakra_Petch'] text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {zone.title}
                    </h3>
                    <p className="text-xs text-purple-400 font-medium">
                      {zone.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {zone.description}
                  </p>

                  {/* Feature Bullets Preview */}
                  <div className="pt-2 border-t border-purple-950/60 space-y-1.5">
                    {zone.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-4 border-t border-purple-950/60 flex items-center justify-between text-xs font-['Chakra_Petch'] font-bold uppercase tracking-wider text-purple-300 group-hover:text-white transition-colors">
                  <span>Explore Mode & Rules</span>
                  <div className="w-7 h-7 rounded-lg bg-purple-950/60 group-hover:bg-purple-600 text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
