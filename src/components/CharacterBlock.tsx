import "../css/characters_style.css";

type CharList = {
  image?: string;
  name: string;
  description: string;
  id?: string;
  rank: string;
};

function CharacterBlock({ image, name, description, id, rank }: CharList) {
  return (
    <div className="character" id={id}>
      {image && <img src={image} alt={name} className="char-img" />}
      <h2>{name}</h2>
      <h3>{rank}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CharacterBlock;
