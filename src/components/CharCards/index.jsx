import "./style.css";

export const CharCard = ({ key, character }) => {
  const { name, image, status, species, origin } = character;

  return (
    <div key={key} className={`Char-${status}`}>
      <img className="Char__image" src={image} alt={name} />
      <p className="Char__name">{name}</p>
      <div className="Char__info-container">
        <p className="Char__specie">Specie: {species}</p>
        <p className="Char__origin">Origin: {origin.name}</p>
      </div>
    </div>
  );
};
