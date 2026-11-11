import React, { useState } from 'react';
import { X, Radio, Save, Link as LinkIcon, Calendar, Clock, Tv } from 'lucide-react';
import { StreamConfig } from '../data/websiteData';

interface StreamConfigModalProps {
  config: StreamConfig;
  onClose: () => void;
  onSave: (newConfig: StreamConfig) => void;
}

export const StreamConfigModal: React.FC<StreamConfigModalProps> = ({
  config,
  onClose,
  onSave
}) => {
  const [isLive, setIsLive] = useState(config.isLive);
  const [streamTitle, setStreamTitle] = useState(config.streamTitle);
  const [streamUrl, setStreamUrl] = useState(config.streamUrl);
  const [gameTitle, setGameTitle] = useState(config.gameTitle);
  const [scheduledDate, setScheduledDate] = useState(() => {
    try {
      const d = new Date(config.scheduledTime);
      return d.toISOString().slice(0, 16);
    } catch {
      return '';
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      isLive,
      streamTitle: streamTitle.trim() || 'NoTforexee Minecraft Live Stream',
      streamUrl: streamUrl.trim() || 'https://www.youtube.com/@Notforexee003/live',
      gameTitle: gameTitle.trim() || 'Minecraft: Java Edition',
      scheduledTime: scheduledDate ? new Date(scheduledDate).toISOString() : config.scheduledTime,
      viewersCount: isLive ? 120 : 0
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0c0817] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#0e0a1c]">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 text-purple-400" />
            <h3 className="font-['Chakra_Petch'] text-lg font-bold text-white tracking-wide">
              Livestream Settings & Status
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Live Status Switch */}
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center justify-between">
            <div>
              <span className="block text-xs font-['Chakra_Petch'] font-bold text-white uppercase tracking-wider">
                Current Broadcast Status
              </span>
              <span className="text-[11px] text-slate-400">
                {isLive ? 'Broadcasting live now' : 'Stream is offline (showing schedule)'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsLive(!isLive)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                isLive ? 'bg-red-600' : 'bg-slate-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isLive ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Stream Title */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              Live Stream Title
            </label>
            <input
              type="text"
              value={streamTitle}
              onChange={(e) => setStreamTitle(e.target.value)}
              placeholder="e.g. NoTforexee Live: Lifesteal SMP Heart Raid & 100 Days!"
              className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              required
            />
          </div>

          {/* YouTube Live Stream URL */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              YouTube Livestream URL
            </label>
            <div className="relative">
              <input
                type="text"
                value={streamUrl}
                onChange={(e) => setStreamUrl(e.target.value)}
                placeholder="https://www.youtube.com/@Notforexee003/live or watch URL"
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                required
              />
              <LinkIcon className="w-3.5 h-3.5 text-purple-400 absolute left-3 top-3.5" />
            </div>
          </div>

          {/* Game Title */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              Game Category
            </label>
            <input
              type="text"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
              placeholder="Minecraft: Java Edition"
              className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          {/* Scheduled Date/Time */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              Next Scheduled Broadcast
            </label>
            <input
              type="datetime-local"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-end gap-2 pt-4 border-t border-purple-900/30">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-['Chakra_Petch'] font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase shadow-md shadow-purple-900/40 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Stream Settings</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
