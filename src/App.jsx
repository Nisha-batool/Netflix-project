import { useEffect, useMemo, useState } from 'react';
import { catalog, collections } from './data/catalog.js';
import TitleCard from './components/TitleCard.jsx';
import TitleDetails from './components/TitleDetails.jsx';
import './App.css';

const navigation = [
  { label: 'Home', value: 'home' },
  { label: 'Series', value: 'series' },
  { label: 'Films', value: 'films' },
  { label: 'My List', value: 'my-list' },
];

const readWatchlist = () => {
  try {
    const savedTitles = JSON.parse(localStorage.getItem('nishaflix-watchlist') || '[]');
    return Array.isArray(savedTitles) ? savedTitles : [];
  } catch (error) {
    console.error('Unable to read your saved titles.', error);
    return [];
  }
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [watchlist, setWatchlist] = useState(readWatchlist);

  useEffect(() => {
    try {
      localStorage.setItem('nishaflix-watchlist', JSON.stringify(watchlist));
    } catch (error) {
      console.error('Unable to save your list in this browser.', error);
    }
  }, [watchlist]);

  const matchingTitles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return catalog.filter((title) =>
      `${title.title} ${title.genre} ${title.description}`.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const toggleWatchlist = (title) => {
    setWatchlist((currentList) =>
      currentList.includes(title.id)
        ? currentList.filter((id) => id !== title.id)
        : [...currentList, title.id],
    );
  };

  const visibleCollections = () => {
    if (searchQuery.trim()) {
      return matchingTitles.length
        ? [{ title: 'Search results', titles: matchingTitles }]
        : [];
    }

    if (activePage === 'my-list') {
      const savedTitles = catalog.filter((title) => watchlist.includes(title.id));
      return savedTitles.length ? [{ title: 'Your list', titles: savedTitles }] : [];
    }

    if (activePage === 'series' || activePage === 'films') {
      const category = activePage === 'series' ? 'Series' : 'Film';
      const titles = catalog.filter((title) => title.category === category);
      return titles.length ? [{ title: `Popular ${activePage}`, titles }] : [];
    }

    return collections.map((collection) => ({
      ...collection,
      titles: catalog.filter((title) => collection.ids.includes(title.id)),
    }));
  };

  const pageCollections = visibleCollections();
  const heroTitle = catalog[0];
  const isSaved = (title) => watchlist.includes(title.id);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand-lockup">
          <a className="brand" href="#home" onClick={() => setActivePage('home')} aria-label="NishaFlix home">
            Nisha<span>Flix</span>
          </a>
          <span className="header-credit">Made by Nisha</span>
        </div>

        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <button
              className={activePage === item.value && !searchQuery ? 'nav-link is-active' : 'nav-link'}
              key={item.value}
              onClick={() => {
                setActivePage(item.value);
                setSearchQuery('');
              }}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <form
            className={searchOpen ? 'search-form is-open' : 'search-form'}
            onSubmit={(event) => event.preventDefault()}
            role="search"
          >
            <button
              aria-label={searchOpen ? 'Close search' : 'Open search'}
              className="icon-button search-toggle"
              onClick={() => {
                setSearchOpen((open) => !open);
                setSearchQuery('');
              }}
              type="button"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
            <input
              aria-label="Search titles"
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Titles, genres"
              type="search"
              value={searchQuery}
            />
          </form>
          <button
            className="profile-button"
            onClick={() => {
              setActivePage('my-list');
              setSearchQuery('');
            }}
            type="button"
          >
            <span className="profile-avatar">N</span>
            <span className="profile-name">Nisha</span>
          </button>
        </div>
      </header>

      {!searchQuery && activePage === 'home' && (
        <section
          aria-labelledby="hero-title"
          className="hero"
          style={{ '--hero-image': `url("${heroTitle.backdrop}")` }}
        >
          <div className="hero-content">
            <p className="eyebrow"><span className="brand-mark">N</span> NISHAFLIX ORIGINAL</p>
            <h1 id="hero-title">{heroTitle.title}</h1>
            <p className="hero-description">{heroTitle.description}</p>
            <div className="title-meta hero-meta">
              <span>{heroTitle.year}</span>
              <span className="maturity-rating">{heroTitle.rating}</span>
              <span>{heroTitle.genre}</span>
            </div>
            <div className="hero-actions">
              <a
                className="button button-light"
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${heroTitle.title} official trailer`)}`}
                rel="noreferrer"
                target="_blank"
              >
                <span aria-hidden="true" className="play-icon">▶</span>
                Watch trailer
              </a>
              <button className="button button-muted" onClick={() => setSelectedTitle(heroTitle)} type="button">
                <span aria-hidden="true" className="info-icon">ⓘ</span>
                More info
              </button>
            </div>
          </div>
          <div className="hero-fade" />
          <div className="hero-bottom-fade" />
          <span className="hero-caption">A story worth staying in for.</span>
        </section>
      )}

      <main className={activePage === 'home' && !searchQuery ? 'catalog-main has-hero' : 'catalog-main'}>
        {searchQuery && <p className="section-kicker">Searching for “{searchQuery}”</p>}
        {pageCollections.length ? (
          pageCollections.map((collection) => (
            <section aria-label={collection.title} className="title-row" key={collection.title}>
              <h2>{collection.title}<span aria-hidden="true">›</span></h2>
              <div className="title-grid">
                {collection.titles.map((title) => (
                  <TitleCard key={title.id} onSelect={setSelectedTitle} title={title} />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="empty-state">
            <span aria-hidden="true" className="empty-icon">⌕</span>
            <h2>{activePage === 'my-list' && !searchQuery ? 'Your list is waiting' : 'No titles found'}</h2>
            <p>
              {activePage === 'my-list' && !searchQuery
                ? 'Save a few favorites and they will be right here.'
                : 'Try a different title or genre.'}
            </p>
          </div>
        )}
      </main>

      <footer className="site-footer">
        <p>Stories for every kind of night.</p>
        <span>Made by Nisha</span>
      </footer>

      {selectedTitle && (
        <TitleDetails
          isSaved={isSaved(selectedTitle)}
          onClose={() => setSelectedTitle(null)}
          onToggleSaved={() => toggleWatchlist(selectedTitle)}
          title={selectedTitle}
        />
      )}
    </div>
  );
}

export default App;
