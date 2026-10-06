import { useEffect } from 'react';

function TitleDetails({ title, isSaved, onClose, onToggleSaved }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title.title} official trailer`)}`;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <section
        aria-labelledby="details-title"
        aria-modal="true"
        className="details-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button aria-label="Close details" className="modal-close" onClick={onClose} type="button">×</button>
        <div className="modal-art" style={{ backgroundImage: `url("${title.backdrop}")` }}>
          <div className="modal-art-shade" />
          <div className="modal-heading">
            <p className="eyebrow"><span className="brand-mark">N</span> NISHAFLIX</p>
            <h2 id="details-title">{title.title}</h2>
            <a className="button button-light" href={trailerUrl} rel="noreferrer" target="_blank">
              <span aria-hidden="true" className="play-icon">▶</span> Watch trailer
            </a>
          </div>
        </div>
        <div className="modal-content">
          <div className="title-meta">
            <span className="match-score">98% for you</span>
            <span>{title.year}</span>
            <span className="maturity-rating">{title.rating}</span>
            <span>{title.category}</span>
          </div>
          <p>{title.description}</p>
          <p className="modal-genre"><strong>Genre:</strong> {title.genre}</p>
          <button className="list-button" onClick={onToggleSaved} type="button">
            <span aria-hidden="true">{isSaved ? '✓' : '+'}</span>
            {isSaved ? 'In My List' : 'Add to My List'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default TitleDetails;
