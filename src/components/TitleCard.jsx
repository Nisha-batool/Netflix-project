function TitleCard({ title, onSelect }) {
  return (
    <button
      aria-label={`More about ${title.title}`}
      className="title-card"
      onClick={() => onSelect(title)}
      type="button"
    >
      <img alt="" loading="lazy" src={title.poster} />
      <span className="card-shade" />
      <span className="card-copy">
        <span className="card-badge">{title.badge}</span>
        <span className="card-title">{title.title}</span>
        <span className="card-meta">{title.year} <span>·</span> {title.genre}</span>
      </span>
      <span aria-hidden="true" className="card-plus">+</span>
    </button>
  );
}

export default TitleCard;
