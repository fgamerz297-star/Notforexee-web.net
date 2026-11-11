import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseYouTubeId,
  getYouTubeEmbedUrl,
  formatViewCount,
  filterVideos,
  getCountdownBreakdown,
  validateDiscordInvite,
  type VideoItem
} from './streamAndVideoLogic.js';

test('parseYouTubeId handles standard watch URLs', () => {
  const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  assert.equal(parseYouTubeId(url), 'dQw4w9WgXcQ');
});

test('parseYouTubeId handles shortened youtu.be URLs', () => {
  const url = 'https://youtu.be/9bZkp7q19f0?t=42';
  assert.equal(parseYouTubeId(url), '9bZkp7q19f0');
});

test('parseYouTubeId handles raw 11-char ID', () => {
  assert.equal(parseYouTubeId('dQw4w9WgXcQ'), 'dQw4w9WgXcQ');
});

test('parseYouTubeId returns null for invalid input', () => {
  assert.equal(parseYouTubeId('invalid_url_without_id'), null);
  assert.equal(parseYouTubeId(''), null);
});

test('getYouTubeEmbedUrl builds secure embed link', () => {
  const embed = getYouTubeEmbedUrl('https://youtu.be/dQw4w9WgXcQ', false);
  assert.match(embed, /^https:\/\/www\.youtube-nocookie\.com\/embed\/dQw4w9WgXcQ/);
  assert.match(embed, /autoplay=0/);
});

test('formatViewCount formats counts accurately', () => {
  assert.equal(formatViewCount(850), '850');
  assert.equal(formatViewCount(1500), '1.5K');
  assert.equal(formatViewCount(20000), '20K');
  assert.equal(formatViewCount(1200000), '1.2M');
  assert.equal(formatViewCount(2000000), '2M');
});

test('filterVideos correctly filters by category and search keyword', () => {
  const sampleVideos: VideoItem[] = [
    {
      id: '1',
      youtubeId: 'abc11111111',
      title: '100 Days in Minecraft The Sift Dimension',
      category: 'challenges',
      description: 'Surviving inside a hostile custom dimension',
      thumbnail: '/assets/aistudio/The_sift_dimention_thumbnail_b6c7d97b.png',
      duration: '28:14',
      views: 34200,
      publishedDate: '2026-04-10',
      youtubeUrl: 'https://youtube.com/watch?v=abc11111111',
      featured: true
    },
    {
      id: '2',
      youtubeId: 'def22222222',
      title: 'My First Video: A New Minecraft Era',
      category: 'survival',
      description: 'Starting my brand new hardcore survival journey',
      thumbnail: '/assets/aistudio/maxresdefault_716ebe4d.webp',
      duration: '18:50',
      views: 18900,
      publishedDate: '2026-03-25',
      youtubeUrl: 'https://youtube.com/watch?v=def22222222'
    }
  ];

  // Filter category
  const challengesOnly = filterVideos(sampleVideos, 'challenges', '');
  assert.equal(challengesOnly.length, 1);
  assert.equal(challengesOnly[0].id, '1');

  // Filter all with keyword
  const searchResult = filterVideos(sampleVideos, 'all', 'Hardcore');
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0].id, '2');

  // Filter no matches
  const emptyResult = filterVideos(sampleVideos, 'pvp', '');
  assert.equal(emptyResult.length, 0);
});

test('getCountdownBreakdown calculates hours, minutes, seconds', () => {
  const now = 1000000;
  const target = now + 3600 * 1000 * 2 + 30 * 60 * 1000 + 15 * 1000; // 2h 30m 15s
  const breakdown = getCountdownBreakdown(target, now);
  assert.equal(breakdown.hours, 2);
  assert.equal(breakdown.minutes, 30);
  assert.equal(breakdown.seconds, 15);
  assert.equal(breakdown.isPast, false);

  const pastBreakdown = getCountdownBreakdown(now - 1000, now);
  assert.equal(pastBreakdown.isPast, true);
});

test('validateDiscordInvite handles valid and invalid invite strings', () => {
  assert.equal(validateDiscordInvite('https://discord.gg/zMVjQjTnRy'), true);
  assert.equal(validateDiscordInvite('discord.gg/zMVjQjTnRy'), true);
  assert.equal(validateDiscordInvite('https://discord.com/invite/zMVjQjTnRy'), true);
  assert.equal(validateDiscordInvite('not-a-discord-link'), false);
});
