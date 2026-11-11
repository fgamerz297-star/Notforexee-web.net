export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: 'hardcore' | 'survival' | 'pvp' | 'smp' | 'challenges' | 'adventures';
  description: string;
  thumbnail: string;
  duration: string;
  views: number;
  publishedDate: string;
  youtubeUrl: string;
  featured?: boolean;
}

/**
 * Extracts YouTube video ID from various URL formats.
 */
export function parseYouTubeId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const trimmed = url.trim();

  // If already an 11-character alphanumeric ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // Standard watch?v= format
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // Shortened youtu.be/ format
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // Embed format /embed/
  const embedMatch = trimmed.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // Shorts format /shorts/
  const shortsMatch = trimmed.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  return null;
}

/**
 * Returns a sanitized YouTube embed URL with privacy enhancements.
 */
export function getYouTubeEmbedUrl(urlOrId: string, autoplay = true): string {
  const videoId = parseYouTubeId(urlOrId) || 'dQw4w9WgXcQ';
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1`;
}

/**
 * Formats view count into readable string (e.g. 14.2K, 1.2M).
 */
export function formatViewCount(views: number): string {
  if (!Number.isFinite(views) || views < 0) return '0';
  if (views >= 1_000_000) {
    const formatted = (views / 1_000_000).toFixed(1);
    return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}M`;
  }
  if (views >= 1_000) {
    const formatted = (views / 1_000).toFixed(1);
    return `${formatted.endsWith('.0') ? formatted.slice(0, -2) : formatted}K`;
  }
  return views.toLocaleString();
}

/**
 * Filters a list of videos based on category tab and search term.
 */
export function filterVideos(
  videos: VideoItem[],
  selectedCategory: string,
  searchQuery: string
): VideoItem[] {
  const query = searchQuery.trim().toLowerCase();

  return videos.filter((video) => {
    const matchesCategory =
      selectedCategory === 'all' || video.category === selectedCategory;

    const matchesSearch =
      query === '' ||
      video.title.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

/**
 * Calculates countdown breakdown between a target timestamp and current time.
 */
export function getCountdownBreakdown(
  targetTimeMs: number,
  currentTimeMs: number
): { hours: number; minutes: number; seconds: number; isPast: boolean } {
  const diffMs = targetTimeMs - currentTimeMs;
  if (diffMs <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { hours, minutes, seconds, isPast: false };
}

/**
 * Validates Discord invite link or code.
 */
export function validateDiscordInvite(invite: string): boolean {
  if (!invite) return false;
  return /^(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discord\.com\/invite)\/[a-zA-Z0-9_-]+$/i.test(
    invite.trim()
  );
}
