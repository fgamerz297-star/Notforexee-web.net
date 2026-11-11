import React from 'react';
import { X, ExternalLink, Calendar, Eye, Clock, Share2, Youtube } from 'lucide-react';
import { VideoItem, getYouTubeEmbedUrl, formatViewCount } from '../utils/streamAndVideoLogic';
import { CREATOR_DATA } from '../data/websiteData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onEdit?: (video: VideoItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onEdit }) => {
  if (!video) return null;

  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    const shareUrl = video.youtubeUrl.startsWith('http')
      ? video.youtubeUrl
      : CREATOR_DATA.youtubeUrl;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl || video.youtubeId, true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0817] border border-purple-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#0e0a1c]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-purple-950 border border-purple-500/30 text-[11px] font-['Chakra_Petch'] font-semibold text-purple-300 uppercase">
              {video.category}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-300 font-medium">NoTforexee YouTube Premiere</span>
          </div>

          <div className="flex items-center gap-2">
            {onEdit && (
              <button
                onClick={() => {
                  onClose();
                  onEdit(video);
                }}
                className="px-3 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs font-['Chakra_Petch'] font-semibold text-purple-200 hover:text-white transition-colors"
              >
                Edit Video
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          {video.youtubeId && video.youtubeId.length === 11 ? (
            <iframe
              src={embedUrl}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#150d2c] to-[#07050e] p-6 text-center">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 max-w-md space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg shadow-red-600/50">
                  <Youtube className="w-8 h-8" />
                </div>
                <h3 className="font-['Chakra_Petch'] text-xl font-bold text-white">
                  Watch On Official YouTube Channel
                </h3>
                <p className="text-xs text-slate-300">
                  Click below to watch directly on NoTforexee's official YouTube channel or update with a direct 11-digit video ID.
                </p>
                <a
                  href={video.youtubeUrl.startsWith('http') ? video.youtubeUrl : CREATOR_DATA.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-['Chakra_Petch'] font-bold uppercase tracking-wider shadow-lg shadow-red-600/40 transition-all"
                >
                  <span>Open On YouTube</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Video Metadata & Controls */}
        <div className="p-6 space-y-4 bg-[#0a0714]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-['Chakra_Petch'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                {video.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>{formatViewCount(video.views)} views</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>{video.duration}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{video.publishedDate}</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 text-xs font-['Chakra_Petch'] font-semibold text-purple-200 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>

              <a
                href={video.youtubeUrl.startsWith('http') ? video.youtubeUrl : CREATOR_DATA.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase transition-colors"
              >
                <Youtube className="w-4 h-4" />
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-purple-900/30">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};
