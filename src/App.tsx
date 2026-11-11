import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { VideosSection } from './components/VideosSection';
import { GamingZoneSection } from './components/GamingZoneSection';
import { LiveStreamSection } from './components/LiveStreamSection';
import { DiscordCommunitySection } from './components/DiscordCommunitySection';
import { SocialAndFooter } from './components/SocialAndFooter';
import { VideoModal } from './components/VideoModal';
import { ManageVideoModal } from './components/ManageVideoModal';
import { GameModeModal } from './components/GameModeModal';
import { StreamConfigModal } from './components/StreamConfigModal';
import { INITIAL_VIDEOS, INITIAL_STREAM_CONFIG, GameModeItem, StreamConfig } from './data/websiteData';
import { VideoItem } from './utils/streamAndVideoLogic';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Video State with localStorage persistence
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    try {
      const saved = localStorage.getItem('notforexee_videos');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_VIDEOS;
  });

  // Livestream State with localStorage persistence
  const [streamConfig, setStreamConfig] = useState<StreamConfig>(() => {
    try {
      const saved = localStorage.getItem('notforexee_stream');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_STREAM_CONFIG;
  });

  // Modal states
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [videoToEdit, setVideoToEdit] = useState<VideoItem | null>(null);
  const [isAddingVideo, setIsAddingVideo] = useState<boolean>(false);
  const [selectedGameMode, setSelectedGameMode] = useState<GameModeItem | null>(null);
  const [isStreamModalOpen, setIsStreamModalOpen] = useState<boolean>(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('notforexee_videos', JSON.stringify(videos));
    } catch {
      // ignore
    }
  }, [videos]);

  useEffect(() => {
    try {
      localStorage.setItem('notforexee_stream', JSON.stringify(streamConfig));
    } catch {
      // ignore
    }
  }, [streamConfig]);

  // Section observer for active navbar indicator
  useEffect(() => {
    const sectionIds = ['home', 'about', 'videos', 'gaming-zone', 'livestream', 'discord'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveVideo = (video: VideoItem) => {
    setVideos((prev) => {
      const existsIndex = prev.findIndex((v) => v.id === video.id);
      if (existsIndex >= 0) {
        const updated = [...prev];
        updated[existsIndex] = video;
        return updated;
      }
      return [video, ...prev];
    });
  };

  const handleDeleteVideo = (videoId: string) => {
    setVideos((prev) => prev.filter((v) => v.id !== videoId));
  };

  const handleWatchRelatedVideos = (categoryId: string) => {
    setSelectedGameMode(null);
    handleNavigate('videos');
  };

  return (
    <div className="min-h-screen bg-[#06040a] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HOME SECTION */}
        <HeroSection
          onWatchYouTubeClick={() => handleNavigate('videos')}
          onExploreGamingZoneClick={() => handleNavigate('gaming-zone')}
        />

        {/* 2. ABOUT ME SECTION */}
        <AboutSection />

        {/* 3. YOUTUBE VIDEOS GALLERY */}
        <VideosSection
          videos={videos}
          onSelectVideo={(video) => setActiveVideoModal(video)}
          onEditVideo={(video) => setVideoToEdit(video)}
          onAddVideo={() => setIsAddingVideo(true)}
        />

        {/* 4. GAMING ZONE SECTION */}
        <GamingZoneSection
          onSelectGameMode={(mode) => setSelectedGameMode(mode)}
        />

        {/* 5. LIVE STREAM SECTION */}
        <LiveStreamSection
          streamConfig={streamConfig}
          onOpenSettings={() => setIsStreamModalOpen(true)}
        />

        {/* 6. DISCORD COMMUNITY SECTION */}
        <DiscordCommunitySection />
      </main>

      {/* 7 & 8. SOCIAL MEDIA & FOOTER */}
      <SocialAndFooter onNavigate={handleNavigate} />

      {/* Modals & Dialogs */}
      {activeVideoModal && (
        <VideoModal
          video={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
          onEdit={(video) => {
            setActiveVideoModal(null);
            setVideoToEdit(video);
          }}
        />
      )}

      {(isAddingVideo || videoToEdit) && (
        <ManageVideoModal
          videoToEdit={videoToEdit}
          onClose={() => {
            setIsAddingVideo(false);
            setVideoToEdit(null);
          }}
          onSave={handleSaveVideo}
          onDelete={handleDeleteVideo}
        />
      )}

      {selectedGameMode && (
        <GameModeModal
          gameMode={selectedGameMode}
          onClose={() => setSelectedGameMode(null)}
          onWatchRelatedVideos={handleWatchRelatedVideos}
        />
      )}

      {isStreamModalOpen && (
        <StreamConfigModal
          config={streamConfig}
          onClose={() => setIsStreamModalOpen(false)}
          onSave={(newConfig) => setStreamConfig(newConfig)}
        />
      )}
    </div>
  );
}
