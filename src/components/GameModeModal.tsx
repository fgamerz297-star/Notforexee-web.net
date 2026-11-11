import React from 'react';
import { X, Shield, Skull, Swords, HeartPulse, Trophy, Compass, CheckCircle2, Crosshair, Award } from 'lucide-react';
import { GameModeItem } from '../data/websiteData';

interface GameModeModalProps {
  gameMode: GameModeItem | null;
  onClose: () => void;
  onWatchRelatedVideos: (categoryId: string) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case 'Skull':
      return Skull;
    case 'Swords':
      return Swords;
    case 'HeartPulse':
      return HeartPulse;
    case 'Trophy':
      return Trophy;
    case 'Compass':
      return Compass;
    default:
      return Shield;
  }
};

export const GameModeModal: React.FC<GameModeModalProps> = ({
  gameMode,
  onClose,
  onWatchRelatedVideos
}) => {
  if (!gameMode) return null;

  const Icon = getIcon(gameMode.iconName);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0c0817] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/60 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="relative p-6 border-b border-purple-900/30 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gameMode.accentColor}18 0%, #0d081b 100%)`
          }}
        >
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: `${gameMode.accentColor}25`, border: `1px solid ${gameMode.accentColor}50` }}
              >
                <Icon className="w-7 h-7" style={{ color: gameMode.accentColor }} />
              </div>
              <div>
                <span className="text-[11px] font-['Chakra_Petch'] font-bold uppercase tracking-wider text-purple-300">
                  {gameMode.category}
                </span>
                <h3 className="font-['Chakra_Petch'] text-2xl font-black text-white tracking-wide">
                  {gameMode.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-slate-300 italic relative z-10">
            "{gameMode.tagline}"
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-['Chakra_Petch'] font-bold text-purple-300 uppercase tracking-wider">
              Overview & Stakes
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {gameMode.description}
            </p>
          </div>

          {/* Difficulty & Preferred Loadout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/30 space-y-1">
              <span className="text-[11px] text-slate-400 uppercase font-['Chakra_Petch']">
                Challenge Intensity
              </span>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="font-['Chakra_Petch'] text-sm font-bold text-white">
                  {gameMode.difficulty}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-900/30 space-y-1">
              <span className="text-[11px] text-slate-400 uppercase font-['Chakra_Petch']">
                Signature Loadout
              </span>
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-purple-400" />
                <span className="font-['Chakra_Petch'] text-xs font-bold text-white truncate">
                  {gameMode.favoriteWeapon}
                </span>
              </div>
            </div>
          </div>

          {/* Key Mechanics */}
          <div className="space-y-3">
            <h4 className="text-xs font-['Chakra_Petch'] font-bold text-purple-300 uppercase tracking-wider">
              Key Features & Mechanics
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {gameMode.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips from NoTforexee */}
          <div className="p-4 rounded-xl bg-[#110b23] border border-purple-500/20 space-y-2">
            <h4 className="text-xs font-['Chakra_Petch'] font-bold text-purple-300 uppercase tracking-wider">
              NoTforexee's Pro Tips
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
              {gameMode.tips.map((tip, idx) => (
                <li key={idx} className="leading-relaxed">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-purple-900/30 bg-[#0a0714] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Featured on NoTforexee YouTube Channel
          </span>

          <button
            onClick={() => {
              onClose();
              onWatchRelatedVideos(gameMode.id);
            }}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-['Chakra_Petch'] font-bold uppercase tracking-wider transition-colors"
          >
            Watch Related Episodes
          </button>
        </div>
      </div>
    </div>
  );
};
