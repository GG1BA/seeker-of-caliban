import "../css/characters_style.css";
import CharacterBlock from "./CharacterBlock.tsx";

function Characters() {
  const characters = [
    {
      image: "/lion_golden.png",
      name: "Lion El'Johnson",
      rank: "The Primarch",
      description: "",
      id: "lion",
    },
    {
      image: "/corswain_white.png",
      name: "Corswain",
      rank: "The Lion's Seneschal",
      description: "",
    },
    {
      image: "/holguin_white.png",
      name: "Holguin",
      rank: "Master of the Deathwing",
      description: "",
    },
    {
      image: "/redloss_white.png",
      name: "Farith Redloss",
      rank: "Master of the Dreadwing",
      description: "",
    },
    {
      image: "/aloceri_white.png",
      name: "Aloceri",
      rank: "Master of the Ravenwing",
      description: "",
    },
    {
      image: "/nemiel_white.png",
      name: "Nemiel",
      rank: "Chaplain",
      description: "",
    },
    {
      name: "Hector Thrane",
      rank: "Grandmaster of the First Legion",
      description: "",
    },
    {
      name: "Urian Vendraig",
      rank: "Grandmaster of the First Legion",
      description: "",
    },
    { name: "Titus", rank: "Master of the Ironwing", description: "" },
    { name: "Calosson", rank: "Master of the Stormwing", description: "" },
    { name: "Vastael", rank: "Master of the Firewing", description: "" },
    {
      name: "Stenius",
      rank: "Captain of the Invincible Reason",
      description: "",
    },
    { name: "Alajos", rank: "Master of the 9th Order", description: "" },
    { name: "Tragan", rank: "Master of the 9th Order", description: "" },
    { name: "Belat", rank: "Master of the Ravenwing", description: "" },
    { name: "Dareil", rank: "Master of the Ironwing", description: "" },
    { name: "Griffayn", rank: "Master of the Firewing", description: "" },
    { name: "Marduk Sedras", rank: "Dreadwing Eskaton", description: "" },
    { name: "Elikas", rank: "Chief Librarian", description: "" },
    {
      name: "Zediel Ardaral",
      rank: "Proctor of the Stormwing",
      description: "",
    },
    { name: "Coriolanus", rank: "Marshal of Host of Stone", description: "" },
    {
      name: "Idravain Mors",
      rank: "Seneschal of the Deathwing",
      description: "",
    },
    {
      name: "Alais Decur",
      rank: "Knight-Sergeant of the Firewing",
      description: "",
    },
    { name: "Oramas", rank: "Archon of Flame", description: "" },
  ];
  return (
    <div className="characters-inner">
      <h1>Heroes of the First</h1>
      <div className="heroes">
        {characters.map((char, index) => (
          <CharacterBlock
            key={char.id || index}
            image={char.image}
            name={char.name}
            rank={char.rank}
            description={char.description}
            id={char.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Characters;
