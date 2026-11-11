import React, { useState, useEffect } from 'react';
import { Radio, ExternalLink, Settings2, Bell, Calendar, Clock, Tv, Flame, Play } from 'lucide-react';
import { StreamConfig, CREATOR_DATA } from '../data/websiteData';
import { getCountdownBreakdown, getYouTubeEmbedUrl } from '../utils/streamAndVideoLogic';

interface LiveStreamSectionProps {
  streamConfig: StreamConfig;
  onOpenSettings: () => void;
}

export const LiveStreamSection: React.FC<LiveStreamSectionProps> = ({
  streamConfig,
  onOpenSettings
}) => {
  const [countdown, setCountdown] = useState(() => {
    const target = new Date(streamConfig.scheduledTime).getTime();
    return getCountdownBreakdown(target, Date.now());
  });

  const [notificationSubscribed, setNotificationSubscribed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const target = new Date(streamConfig.scheduledTime).getTime();
      setCountdown(getCountdownBreakdown(target, Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, [streamConfig.scheduledTime]);

  const targetDateFormatted = (() => {
    try {
      return new Date(streamConfig.scheduledTime).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Saturday 6:00 PM EST';
    }
  })();

  return (
    <section id="livestream" className="py-24 relative overflow-hidden bg-[#06040b]">
      {/* Cinematic purple light beams */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Settings Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase font-['Chakra_Petch']">
              <Tv className="w-3.5 h-3.5 text-purple-400" />
              <span>Broadcast Control</span>
            </div>
            <h2 className="font-['Chakra_Petch'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              LIVE <span className="text-gradient-purple">STREAM</span>
            </h2>
            <p className="text-slate-300 text-base">
              Real-time interactive Minecraft sessions, community SMP voice calls, and viewer challenge runs.
            </p>
          </div>

          <button
            onClick={onOpenSettings}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase transition-colors shrink-0"
            title="Configure Livestream Status & URL"
          >
            <Settings2 className="w-4 h-4 text-purple-400" />
            <span>Edit Stream Settings</span>
          </button>
        </div>

        {/* Cinematic Stream Theater Container */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0b0818] border border-purple-500/30 shadow-2xl shadow-purple-950/40">
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#0e0a20] border-b border-purple-900/30">
            <div className="flex items-center gap-3">
              {streamConfig.isLive ? (
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/90 text-white text-xs font-['Chakra_Petch'] font-black uppercase tracking-wider animate-pulse shadow-md shadow-red-600/50">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>STREAM STATUS: LIVE NOW</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/80 border border-purple-500/30 text-purple-300 text-xs font-['Chakra_Petch'] font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-slate-500" />
                  <span>STREAM STATUS: OFFLINE</span>
                </div>
              )}
              
              <span className="hidden sm:inline text-xs text-slate-400 font-medium">
                {streamConfig.gameTitle}
              </span>
            </div>

            {streamConfig.isLive ? (
              <div className="flex items-center gap-2 text-xs font-['Chakra_Petch'] text-red-400 font-bold">
                <Flame className="w-4 h-4 fill-red-500" />
                <span>{streamConfig.viewersCount} Viewers Watching</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
                <span>Next: {targetDateFormatted}</span>
              </div>
            )}
          </div>

          {/* Center Stage / Player Viewport */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {streamConfig.isLive ? (
              <div className="relative w-full h-full">
                <iframe
                  src={getYouTubeEmbedUrl(streamConfig.streamUrl, true)}
                  title="NoTforexee Live Broadcast"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              /* Offline Cinematic Standby Screen */
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Background Artwork Scrim */}
                <img
                  src="/assets/aistudio/The_sift_dimention_thumbnail_b6c7d97b.png"
                  alt="Cinematic Minecraft Backdrop"
                  className="absolute inset-0 w-full h-full object-cover opacity-25 filter blur-xs"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0818] via-purple-950/40 to-black/70" />

                <div className="relative z-10 max-w-xl space-y-6">
                  {/* Offline Icon Tag */}
                  <div className="w-16 h-16 rounded-2xl bg-purple-950/80 border border-purple-500/40 mx-auto flex items-center justify-center shadow-xl shadow-purple-900/40">
                    <Radio className="w-8 h-8 text-purple-300" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-['Chakra_Petch'] font-bold uppercase tracking-widest text-purple-400">
                      Scheduled Broadcast Countdown
                    </span>
                    <h3 className="font-['Chakra_Petch'] text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wide">
                      {streamConfig.streamTitle}
                    </h3>
                  </div>

                  {/* Countdown Timer Display */}
                  <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
                      <div className="font-['Chakra_Petch'] text-2xl sm:text-3xl font-black text-white">
                        {String(countdown.hours).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-purple-300 uppercase font-semibold">Hours</div>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
                      <div className="font-['Chakra_Petch'] text-2xl sm:text-3xl font-black text-white">
                        {String(countdown.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-purple-300 uppercase font-semibold">Minutes</div>
                    </div>
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 backdrop-blur-md">
                      <div className="font-['Chakra_Petch'] text-2xl sm:text-3xl font-black text-white">
                        {String(countdown.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-[10px] text-purple-300 uppercase font-semibold">Seconds</div>
                    </div>
                  </div>

                  {/* Interactive Notification Alert Button */}
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setNotificationSubscribed(!notificationSubscribed)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase transition-all ${
                        notificationSubscribed
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/50'
                          : 'bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-purple-200'
                      }`}
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>{notificationSubscribed ? 'Notifications Enabled!' : 'Notify When Live'}</span>
                    </button>

                    <a
                      href={CREATOR_DATA.discordInvite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-['Chakra_Petch'] font-semibold uppercase tracking-wider transition-colors"
                    >
                      <span>Join Discord Pre-Show</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Broadcast Bar */}
          <div className="p-6 bg-[#0c0819] flex flex-col md:flex-row items-center justify-between gap-6 border-t border-purple-900/30">
            <div className="flex items-center gap-4 text-center md:text-left">
              <img
                src="/assets/aistudio/skin_Boy_Youtuber_8f31fc-pfp_5f0de061.png"
                alt="NoTforexee Avatar"
                className="w-12 h-12 rounded-full border border-purple-500/40 shadow-lg shrink-0 hidden sm:block"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-1">
                <h4 className="font-['Chakra_Petch'] text-lg font-bold text-white">
                  Official YouTube Live Portal
                </h4>
                <p className="text-xs text-slate-300 max-w-md">
                  Watch live chat, super-chats, and participate in viewer Minecraft survival polls.
                </p>
              </div>
            </div>

            {/* WATCH LIVE Button (Strictly required by user prompt) */}
            <a
              href={streamConfig.streamUrl.startsWith('http') ? streamConfig.streamUrl : 'https://www.youtube.com/@Notforexee003/live'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-fuchsia-600 text-white font-['Chakra_Petch'] font-bold text-sm tracking-wider uppercase shadow-xl shadow-red-600/40 hover:shadow-red-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>WATCH LIVE</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
