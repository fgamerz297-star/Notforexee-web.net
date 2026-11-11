import React, { useState } from 'react';
import { Youtube, Play, Search, Plus, Filter, Eye, Clock, Edit2, ExternalLink } from 'lucide-react';
import { VideoItem, filterVideos, formatViewCount } from '../utils/streamAndVideoLogic';
import { CREATOR_DATA } from '../data/websiteData';

interface VideosSectionProps {
  videos: VideoItem[];
  onSelectVideo: (video: VideoItem) => void;
  onEditVideo: (video: VideoItem) => void;
  onAddVideo: () => void;
}

export const VideosSection: React.FC<VideosSectionProps> = ({
  videos,
  onSelectVideo,
  onEditVideo,
  onAddVideo,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = filterVideos(videos, activeCategory, searchQuery);

  const categories = [
    { id: 'all', label: 'All Episodes' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'hardcore', label: 'Hardcore' },
    { id: 'survival', label: 'Survival' },
    { id: 'pvp', label: 'PvP & Combat' },
    { id: 'smp', label: 'Lifesteal SMP' },
    { id: 'adventures', label: 'Adventures' }
  ];

  return (
    <section id="videos" className="py-24 relative overflow-hidden bg-[#06040b]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-semibold tracking-wider uppercase font-['Chakra_Petch']">
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>Official Video Catalog</span>
            </div>
            <h2 className="font-['Chakra_Petch'] text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              YOUTUBE <span className="text-gradient-neon">VIDEOS</span>
            </h2>
            <p className="text-slate-300 text-base">
              Stream the latest Minecraft survival series, custom dimensional challenges, and high-intensity SMP heart wars.
            </p>
          </div>

          {/* Action CTAs: Add Video & SUBSCRIBE */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onAddVideo}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/70 hover:bg-purple-900/80 border border-purple-500/30 text-purple-200 hover:text-white text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase transition-colors"
            >
              <Plus className="w-4 h-4 text-purple-400" />
              <span>Add / Custom Video</span>
            </button>

            {/* Main Channel SUBSCRIBE Button */}
            <a
              href={CREATOR_DATA.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-['Chakra_Petch'] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-red-600/40 hover:shadow-red-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Youtube className="w-4 h-4 fill-white" />
              <span>SUBSCRIBE</span>
            </a>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-purple-900/30">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-['Chakra_Petch'] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-900/50'
                      : 'bg-purple-950/30 hover:bg-purple-900/40 text-slate-300 hover:text-white border border-purple-900/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search episodes & titles..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0f0a1f] border border-purple-900/40 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400 transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>

        </div>

        {/* Video Gallery Grid */}
        {filtered.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0c0817] border border-purple-900/30 max-w-md mx-auto space-y-3">
            <Filter className="w-8 h-8 text-purple-400 mx-auto" />
            <p className="font-['Chakra_Petch'] text-base font-semibold text-white">
              No videos found in this category
            </p>
            <p className="text-xs text-slate-400">
              Try adjusting your search query or reset the filter to view all episodes.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-['Chakra_Petch'] font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-[#0d091a] border border-purple-900/30 hover:border-purple-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Thumbnail Container */}
                <div
                  className="relative aspect-video overflow-hidden cursor-pointer bg-slate-950"
                  onClick={() => onSelectVideo(video)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d091a] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play Button Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 group-hover:scale-110 transition-all duration-200">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-['Chakra_Petch'] font-bold text-white flex items-center gap-1">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-[10px] font-['Chakra_Petch'] font-bold text-purple-200 uppercase tracking-wider">
                    {video.category}
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3
                      onClick={() => onSelectVideo(video)}
                      className="font-['Chakra_Petch'] text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {video.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Footer Meta & Controls */}
                  <div className="pt-3 border-t border-purple-950/60 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                        <span className="font-['Chakra_Petch']">{formatViewCount(video.views)}</span>
                      </span>
                      <span>·</span>
                      <span className="text-[11px]">{video.publishedDate}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditVideo(video);
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-purple-950/60 transition-colors"
                        title="Edit Video Title & URL"
                        aria-label={`Edit ${video.title}`}
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={video.youtubeUrl.startsWith('http') ? video.youtubeUrl : CREATOR_DATA.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-950/40 transition-colors"
                        title="Watch on YouTube"
                        aria-label={`Watch ${video.title} on YouTube`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Subscribe Banner Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-purple-950/40 to-slate-900/40 border border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-600/90 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/40">
              <Youtube className="w-7 h-7 text-white" />
            </div>
            <div>
              <h4 className="font-['Chakra_Petch'] text-xl font-bold text-white tracking-wide">
                Never Miss A Minecraft Premiere
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Subscribe to NoTforexee for weekly 100-Days, Lifesteal SMP raids, and PvP tactics.
              </p>
            </div>
          </div>

          <a
            href={CREATOR_DATA.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-['Chakra_Petch'] font-bold text-sm tracking-wider uppercase shadow-xl shadow-red-600/40 transition-all hover:scale-105 shrink-0"
          >
            <Youtube className="w-4 h-4 fill-white" />
            <span>SUBSCRIBE TO CHANNEL</span>
          </a>
        </div>

      </div>
    </section>
  );
};
