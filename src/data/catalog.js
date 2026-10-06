const image = (id, width, height) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=85`;

export const catalog = [
  {
    id: 'last-signal',
    title: 'The Last Signal',
    category: 'Series',
    year: 2026,
    rating: 'TV-MA',
    genre: 'Sci-fi thriller',
    description:
      'When a strange transmission reaches a remote mountain town, one radio host discovers it may be coming from tomorrow.',
    poster: image('photo-1518709268805-4e9042af9f23', 640, 900),
    backdrop: image('photo-1511497584788-876760111969', 2000, 1100),
    badge: 'New episodes',
  },
  {
    id: 'blue-hour',
    title: 'Blue Hour',
    category: 'Film',
    year: 2025,
    rating: 'PG-13',
    genre: 'Romantic drama',
    description:
      'Two strangers miss the last train and spend one unforgettable night finding their way across the city.',
    poster: image('photo-1519608487953-e999c86e7455', 640, 900),
    backdrop: image('photo-1519608487953-e999c86e7455', 2000, 1100),
    badge: 'Award winner',
  },
  {
    id: 'emberline',
    title: 'Emberline',
    category: 'Series',
    year: 2026,
    rating: 'TV-14',
    genre: 'Mystery',
    description:
      'A young archivist returns to her coastal hometown and finds a map that changes every time the tide comes in.',
    poster: image('photo-1470252649378-9c29740c9fa8', 640, 900),
    backdrop: image('photo-1470252649378-9c29740c9fa8', 2000, 1100),
    badge: 'NishaFlix series',
  },
  {
    id: 'orbit-nine',
    title: 'Orbit Nine',
    category: 'Film',
    year: 2025,
    rating: 'PG-13',
    genre: 'Adventure',
    description:
      'A repair crew on the edge of the solar system receives an unexpected passenger and a chance to come home.',
    poster: image('photo-1446776811953-b23d57bd21aa', 640, 900),
    backdrop: image('photo-1446776811953-b23d57bd21aa', 2000, 1100),
    badge: 'Top 10',
  },
  {
    id: 'wild-country',
    title: 'Wild Country',
    category: 'Series',
    year: 2024,
    rating: 'TV-PG',
    genre: 'Nature documentary',
    description:
      'A breathtaking look at the hidden lives and remarkable resilience of the animals sharing our planet.',
    poster: image('photo-1500530855697-b586d89ba3ee', 640, 900),
    backdrop: image('photo-1500530855697-b586d89ba3ee', 2000, 1100),
    badge: 'Beautifully filmed',
  },
  {
    id: 'paper-moons',
    title: 'Paper Moons',
    category: 'Film',
    year: 2024,
    rating: 'PG',
    genre: 'Family adventure',
    description:
      'A brother and sister build a cardboard rocket to help their grandfather remember the summer he met the stars.',
    poster: image('photo-1462331940025-496dfbfc7564', 640, 900),
    backdrop: image('photo-1462331940025-496dfbfc7564', 2000, 1100),
    badge: 'Feel-good film',
  },
  {
    id: 'second-first',
    title: 'Second First',
    category: 'Series',
    year: 2025,
    rating: 'TV-14',
    genre: 'Comedy',
    description:
      'After a scheduling mix-up, a perfectionist event planner and a free-spirited baker keep meeting at the wrong time.',
    poster: image('photo-1490730141103-6cac27aaab94', 640, 900),
    backdrop: image('photo-1490730141103-6cac27aaab94', 2000, 1100),
    badge: 'Easy to love',
  },
  {
    id: 'deep-blue',
    title: 'Deep Blue',
    category: 'Film',
    year: 2023,
    rating: 'PG-13',
    genre: 'Adventure',
    description:
      'A marine biologist and a small-town diver race to protect a reef before a once-in-a-century storm arrives.',
    poster: image('photo-1518837695005-2083093ee35b', 640, 900),
    backdrop: image('photo-1518837695005-2083093ee35b', 2000, 1100),
    badge: 'Hidden gem',
  },
];

export const collections = [
  { title: 'Trending now', ids: ['last-signal', 'blue-hour', 'emberline', 'orbit-nine', 'wild-country'] },
  { title: 'Made for your next night in', ids: ['paper-moons', 'second-first', 'deep-blue', 'blue-hour'] },
  { title: 'Stories beyond the ordinary', ids: ['orbit-nine', 'last-signal', 'deep-blue', 'emberline'] },
];
