import { VideoItem } from '../utils/streamAndVideoLogic';

export interface CreatorProfile {
  name: string;
  tagline: string;
  subheading: string;
  youtubeHandle: string;
  youtubeUrl: string;
  discordInvite: string;
  bio: string;
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  skinDetails: {
    name: string;
    hair: string;
    outfits: string[];
    companion: string;
    shoes: string;
    personality: string;
  };
}

export interface GameModeItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  accentColor: string;
  iconName: string;
  difficulty: 'Casual' | 'Hard' | 'Extreme' | 'Ultra Hardcore';
  features: string[];
  tips: string[];
  favoriteWeapon: string;
}

export interface StreamConfig {
  isLive: boolean;
  streamTitle: string;
  streamUrl: string;
  gameTitle: string;
  scheduledTime: string; // ISO string
  viewersCount: number;
}

export const CREATOR_DATA: CreatorProfile = {
  name: 'NoTforexee',
  tagline: 'MINECRAFT GAMER & CONTENT CREATOR',
  subheading: 'Conquering Hardcore Worlds, Lifesteal SMPs & Custom Dimensions with high-tier PvP and epic storytelling.',
  youtubeHandle: '@Notforexee003',
  youtubeUrl: 'https://www.youtube.com/@Notforexee003',
  discordInvite: 'https://discord.gg/zMVjQjTnRy',
  bio: 'Welcome to the official realm of NoTforexee! I am a passionate Minecraft content creator specializing in grueling 100-Day Hardcore challenges, heart-stealing Lifesteal SMP battles, tactical crystal and sword PvP, and uncharted dimensional adventures. Join our growing community of Minecrafters and come along for the ride!',
  stats: [
    { label: 'YouTube Series', value: '4+ Series', detail: 'Hardcore, SMP & The Sift' },
    { label: 'Discord Members', value: '2,500+', detail: 'Active Minecraft community' },
    { label: 'Playstyle', value: 'PvP & Survival', detail: 'Competitive & Explorer' },
    { label: 'Status', value: 'Active Creator', detail: 'Weekly uploads & events' }
  ],
  skinDetails: {
    name: 'NoTforexee Signature Skin',
    hair: 'Messy Dark Brown Hair with Anime fringe',
    outfits: [
      'Casual Explorer: Signature White Hoodie with cyan shoulder wing accents & slate trousers',
      'Formal / Celebration: Crisp White Tuxedo suit with iconic Red Bowtie and wolf buckle badge'
    ],
    companion: 'Loyal glowing Blue Allay companion perched on shoulder',
    shoes: 'Vibrant Green Emerald-trimmed sneakers',
    personality: 'Calm under pressure in Hardcore, ruthless in PvP combat'
  }
};

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'b6c7d97b-sift',
    title: 'I Discovered "THE SIFT" Custom Dimension in Minecraft',
    category: 'challenges',
    description: 'Venturing deep into the uncharted red pillars of The Sift dimension. Ancient monoliths, hostile crystalline creatures, and zero natural regeneration. Will I make it back with the dimensional core?',
    thumbnail: '/assets/aistudio/The_sift_dimention_thumbnail_b6c7d97b.png',
    duration: '24:18',
    views: 48500,
    publishedDate: '2026-10-18',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003',
    featured: true
  },
  {
    id: 'vid-2',
    youtubeId: '716ebe4d-first',
    title: 'My First Video: The Beginning of NoTforexee',
    category: 'survival',
    description: 'The inaugural episode of my official Minecraft journey! Starting with nothing, surviving the first night, setting up our mountain fortress, and laying the groundwork for our hardcore survival empire.',
    thumbnail: '/assets/aistudio/maxresdefault_716ebe4d.webp',
    duration: '19:42',
    views: 31200,
    publishedDate: '2026-09-02',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003',
    featured: true
  },
  {
    id: 'vid-3',
    youtubeId: 'a8679968-void',
    title: 'Diving Into The Abyssal Void Dimension (Special Episode)',
    category: 'adventures',
    description: 'Celebrating milestones by exploring the deepest purple abyss of Minecraft! Armed with our enchanted trident, our loyal Allay companion, and formal tuxedo gear.',
    thumbnail: '/assets/aistudio/ChatGPT_Image_Sep_30__2026__06_02_19_PM_a8679968.png',
    duration: '22:15',
    views: 29400,
    publishedDate: '2026-09-30',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003'
  },
  {
    id: 'vid-4',
    youtubeId: 'ddeb35ef-autumn',
    title: 'Surviving 100 Days in The Golden Autumn Forest Hardcore',
    category: 'hardcore',
    description: 'Only 1 Life in this breathtaking yet unforgiving autumn birch and oak biome. Facing hostile raids, building our lakeside bunker, and defeating the Ender Dragon.',
    thumbnail: '/assets/aistudio/image_ddeb35ef.png',
    duration: '35:50',
    views: 52100,
    publishedDate: '2026-10-29',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003'
  },
  {
    id: 'vid-5',
    youtubeId: 'smp-lifesteal-01',
    title: 'Stealing 10 Hearts in 1 Hour on The Lifesteal SMP',
    category: 'smp',
    description: 'Every kill steals a heart, every death drops one. Sneaking into enemy territory, setting up a lethal obsidian trap, and engaging in intense shield & axe duels.',
    thumbnail: '/assets/aistudio/ChatGPT_Image_Sep_30__2026__06_02_19_PM_a8679968.png',
    duration: '26:04',
    views: 41800,
    publishedDate: '2026-11-04',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003'
  },
  {
    id: 'vid-6',
    youtubeId: 'pvp-crystal-guide',
    title: 'The Ultimate Minecraft 1.21 PvP Combat & Crystal Guide',
    category: 'pvp',
    description: 'Mastering fast anchor placement, totem cycling, end crystal timing, and sword crit combos. The exact mechanical guide I use in high-stakes SMP wars.',
    thumbnail: '/assets/aistudio/The_sift_dimention_thumbnail_b6c7d97b.png',
    duration: '16:30',
    views: 27900,
    publishedDate: '2026-11-08',
    youtubeUrl: 'https://www.youtube.com/@Notforexee003'
  }
];

export const GAMING_ZONES: GameModeItem[] = [
  {
    id: 'hardcore',
    title: 'Minecraft Hardcore',
    tagline: '1 Life. Zero Respawns. Maximum Adrenaline.',
    category: 'Ultimate Survival',
    description: 'One single fatal mistake wipes the entire world. Navigating dark caverns, ancient cities with the Warden, and wither battles with nothing but wits, totems, and tactical planning.',
    accentColor: '#dc2626',
    iconName: 'Skull',
    difficulty: 'Ultra Hardcore',
    features: [
      'Perma-death gameplay with zero second chances',
      'Full Netherite max-tier enchantment progression',
      'Ancient City exploration & Warden stealth evasion',
      'Ultra-efficient perimeter mob farms and redstone'
    ],
    tips: [
      'Always carry two Totems of Undying in your off-hand',
      'Never dig straight down without a water bucket ready',
      'Brew Splash Potions of Turtle Master for emergency defense'
    ],
    favoriteWeapon: 'Sharpness V Netherite Sword & Power V Infinity Bow'
  },
  {
    id: 'survival',
    title: 'Minecraft Survival',
    tagline: 'Mega Builds, Complex Redstone & Boundless Worlds.',
    category: 'Endless Creativity',
    description: 'Starting from punch-wood huts to sprawling cyberpunk obsidian megastructures, fully automated sorting systems, villagers trading halls, and massive aesthetic terraforming.',
    accentColor: '#10b981',
    iconName: 'Hammer',
    difficulty: 'Casual',
    features: [
      'Mega-scale architectural landmarks & castles',
      'Automated iron, gold, and raid farm infrastructure',
      'Complete achievement & advancement hunting',
      'Aesthetic landscape carving and biome overhauls'
    ],
    tips: [
      'Prioritize villager trading early for easy Mending books',
      'Build your storage system near spawn chunks for loaded auto-sorting',
      'Use fireworks with Elytra for instant cross-continent transit'
    ],
    favoriteWeapon: 'Efficiency V Netherite Pickaxe & Silk Touch Shovel'
  },
  {
    id: 'pvp',
    title: 'Minecraft PvP',
    tagline: 'High-Velocity Sword, Shield & End Crystal Warfare.',
    category: 'Competitive Combat',
    description: 'Fast-paced duels on tournament arenas. From 1.8 sword combos to modern 1.21 shield axes, potion warfare, respawn anchor traps, and rapid obsidian crystal detonation.',
    accentColor: '#8b5cf6',
    iconName: 'Swords',
    difficulty: 'Hard',
    features: [
      'End Crystal explosion timing and placement tricks',
      'Shield-disabling axe crits followed by sword sweeps',
      'Totem hotbar cycling within fractions of a second',
      'Ender pearl tracking and mid-air trajectory catches'
    ],
    tips: [
      'Maintain higher ground to land critical hits during freefall',
      'Keep your render distance smooth to prevent frame drops in crystal spam',
      'Learn hotkey muscle memory for swift off-hand swapping'
    ],
    favoriteWeapon: 'Netherite Axe (Shield Breaker) & End Crystals'
  },
  {
    id: 'smp',
    title: 'Lifesteal SMP',
    tagline: 'Every Kill Steals A Heart. Every Death Loses One.',
    category: 'Server Warfare',
    description: 'The highest stakes multiplayer experience in Minecraft. Eliminate another player and their maximum health transfers to you. Drop to zero hearts and you are permanently banned from the server.',
    accentColor: '#ec4899',
    iconName: 'HeartPulse',
    difficulty: 'Extreme',
    features: [
      'Heart crafting recipes and dangerous bounty hunting',
      'Secret underground bunker bases hidden by bedrock',
      'Guild alliances, diplomatic treaties, and surprise betrayals',
      'Epic 5v5 server siege wars for territory control'
    ],
    tips: [
      'Never reveal coordinates on stream or in chat',
      'Craft backup hearts in advance and stash them in the End',
      'Form reliable duo alliances before engaging in open combat'
    ],
    favoriteWeapon: 'Smite V Netherite Axe & Golden Apples'
  },
  {
    id: 'challenges',
    title: 'Minecraft Challenges',
    tagline: 'Impossible Rules, 100 Days & Custom Dimensions.',
    category: 'Extreme Trials',
    description: 'Pushing the boundaries of the Minecraft engine. Custom dimensions like "The Sift", locked inventory slots, half-heart restrictions, and racing against impossible world timers.',
    accentColor: '#f59e0b',
    iconName: 'Trophy',
    difficulty: 'Hard',
    features: [
      '100 Days survival formats in hostile custom environments',
      'Custom dimensions with unique gravity and mob behaviors',
      'No armor, no crafting table, or one-chunk restrictions',
      'Community voted handicap mechanics'
    ],
    tips: [
      'Scout resources immediately on day 1 before nightfall',
      'Master food saturation to keep sprint enabled non-stop',
      'Always have a backup shelter with bed checkpoint'
    ],
    favoriteWeapon: 'Custom Dimensional Relic & Enchanted Crossbow'
  },
  {
    id: 'adventures',
    title: 'Minecraft Adventures',
    tagline: 'Lore Quests, Ancient Dungeons & Dimensional Travel.',
    category: 'Story & Lore',
    description: 'Immersive story-driven campaigns, community custom maps, forgotten temples, and narrative expeditions deep into the End, Nether, and mystical fan-made realms.',
    accentColor: '#06b6d4',
    iconName: 'Compass',
    difficulty: 'Hard',
    features: [
      'Handcrafted dungeon crawler maps with puzzle mechanics',
      'Boss rush gauntlets with multi-phase mechanics',
      'Rich environmental storytelling and voice-acted lore',
      'Secret easter eggs and ancient relics'
    ],
    tips: [
      'Read lore books and environmental clues carefully',
      'Stock up on lighting tools to reveal hidden puzzle switches',
      'Keep speed and night-vision potions ready for dark catacombs'
    ],
    favoriteWeapon: 'Riptide III Netherite Trident in Thunderstorms'
  }
];

export const INITIAL_STREAM_CONFIG: StreamConfig = {
  isLive: false,
  streamTitle: 'NoTforexee Live: Minecraft Lifesteal SMP Heart Raid & 100 Days!',
  streamUrl: 'https://www.youtube.com/@Notforexee003/live',
  gameTitle: 'Minecraft: Java Edition',
  scheduledTime: new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString(), // 18 hours from now
  viewersCount: 0
};

export const DISCORD_PERKS = [
  {
    title: 'Official Minecraft SMP',
    description: 'Exclusive whitelist access to NoTforexee community survival and PvP servers.',
    badge: 'SMP Access'
  },
  {
    title: 'Video Sneak Peeks',
    description: 'Be the first to see uncut footage, thumbnail drafts, and series polls.',
    badge: 'Behind The Scenes'
  },
  {
    title: 'Live Event Nights',
    description: 'Participate in weekly community PvP tournaments, Bedwars, and custom hide-and-seek.',
    badge: 'Weekly Events'
  },
  {
    title: 'Creator Voice Lounges',
    description: 'Hang out with NoTforexee directly after streams and video premieres.',
    badge: 'Direct Talk'
  }
];
