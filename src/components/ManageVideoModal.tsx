import React, { useState } from 'react';
import { X, Save, Trash2, Youtube, Image as ImageIcon } from 'lucide-react';
import { VideoItem, parseYouTubeId } from '../utils/streamAndVideoLogic';

interface ManageVideoModalProps {
  videoToEdit: VideoItem | null;
  onClose: () => void;
  onSave: (video: VideoItem) => void;
  onDelete?: (videoId: string) => void;
}

const PRESET_THUMBNAILS = [
  {
    name: 'The Sift Dimension',
    url: '/assets/aistudio/The_sift_dimention_thumbnail_b6c7d97b.png'
  },
  {
    name: 'First Video / Hardcore Origins',
    url: '/assets/aistudio/maxresdefault_716ebe4d.webp'
  },
  {
    name: 'Abyssal Void Artwork',
    url: '/assets/aistudio/ChatGPT_Image_Sep_30__2026__06_02_19_PM_a8679968.png'
  },
  {
    name: 'Autumn Forest Expedition',
    url: '/assets/aistudio/image_ddeb35ef.png'
  }
];

export const ManageVideoModal: React.FC<ManageVideoModalProps> = ({
  videoToEdit,
  onClose,
  onSave,
  onDelete
}) => {
  const isEditing = Boolean(videoToEdit);

  const [title, setTitle] = useState(videoToEdit?.title || '');
  const [youtubeUrl, setYoutubeUrl] = useState(videoToEdit?.youtubeUrl || '');
  const [category, setCategory] = useState<VideoItem['category']>(
    videoToEdit?.category || 'challenges'
  );
  const [description, setDescription] = useState(videoToEdit?.description || '');
  const [thumbnail, setThumbnail] = useState(
    videoToEdit?.thumbnail || PRESET_THUMBNAILS[0].url
  );
  const [duration, setDuration] = useState(videoToEdit?.duration || '20:00');
  const [views, setViews] = useState(videoToEdit?.views || 10000);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Video title is required.');
      return;
    }
    if (!youtubeUrl.trim()) {
      setError('YouTube URL or Video ID is required.');
      return;
    }

    const extractedId = parseYouTubeId(youtubeUrl) || `custom-${Date.now()}`;

    const updatedVideo: VideoItem = {
      id: videoToEdit?.id || `vid-${Date.now()}`,
      youtubeId: extractedId,
      title: title.trim(),
      category,
      description: description.trim() || 'NoTforexee Minecraft gameplay premiere.',
      thumbnail,
      duration: duration.trim() || '15:00',
      views: Number(views) || 5000,
      publishedDate: videoToEdit?.publishedDate || new Date().toISOString().split('T')[0],
      youtubeUrl: youtubeUrl.trim(),
      featured: videoToEdit?.featured || false
    };

    onSave(updatedVideo);
    onClose();
  };

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
        <div className="flex items-center justify-between px-6 py-4 border-b border-purple-900/30 bg-[#0e0a1c]">
          <h3 className="font-['Chakra_Petch'] text-lg font-bold text-white tracking-wide">
            {isEditing ? 'Edit Video Details' : 'Add New YouTube Video'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-purple-950/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto">
          {error && (
            <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs">
              {error}
            </div>
          )}

          {/* Video Title */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              Video Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Surviving 100 Days in The Sift Dimension"
              className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              required
            />
          </div>

          {/* YouTube URL or ID */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              YouTube URL or Video ID
            </label>
            <div className="relative">
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=... or https://youtu.be/..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
                required
              />
              <Youtube className="w-4 h-4 text-purple-400 absolute left-3.5 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Paste standard YouTube link, short link, or channel premiere link.
            </p>
          </div>

          {/* Category & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
                Gaming Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as VideoItem['category'])}
                className="w-full px-4 py-2.5 rounded-xl bg-[#120a24] border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              >
                <option value="challenges">Minecraft Challenges</option>
                <option value="hardcore">Minecraft Hardcore</option>
                <option value="survival">Minecraft Survival</option>
                <option value="pvp">Minecraft PvP</option>
                <option value="smp">Lifesteal SMP</option>
                <option value="adventures">Minecraft Adventures</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
                Video Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="24:18"
                className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
          </div>

          {/* Select Uploaded Thumbnail */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-2">
              Select Official Thumbnail
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRESET_THUMBNAILS.map((thumb, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => setThumbnail(thumb.url)}
                  className={`group relative rounded-xl overflow-hidden aspect-video border-2 transition-all ${
                    thumbnail === thumb.url
                      ? 'border-purple-400 ring-2 ring-purple-500/50 scale-[1.02]'
                      : 'border-purple-900/40 hover:border-purple-500/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.url}
                    alt={thumb.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-end p-1">
                    <span className="text-[10px] font-['Chakra_Petch'] text-white truncate drop-shadow">
                      {thumb.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-['Chakra_Petch'] font-semibold text-purple-300 uppercase tracking-wider mb-1.5">
              Video Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Explain the storyline, challenge rules, or SMP highlights..."
              className="w-full px-4 py-2 rounded-xl bg-purple-950/30 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-purple-400 transition-colors"
            />
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-purple-900/30">
            {isEditing && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (videoToEdit && confirm('Are you sure you want to delete this video?')) {
                    onDelete(videoToEdit.id);
                    onClose();
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-['Chakra_Petch'] font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-['Chakra_Petch'] font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-['Chakra_Petch'] font-bold tracking-wider uppercase shadow-md shadow-purple-900/40 transition-all"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Save Changes' : 'Add Video'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
