import "../css/characters_style.css";
import CharacterBlock from "./CharacterBlock.tsx";

function Characters() {
  return (
    <div className="characters-inner">
      <h1>Heroes of the First</h1>
      <div className="heroes">
        <CharacterBlock
          image="/lion_golden.png"
          name="Lion El'Johnson"
          description=""
          id="lion"
          rank="The Primarch"
        />
        <CharacterBlock
          image="/corswain_white.png"
          name="Corswain"
          description=""
          rank="The Lion's Seneschal"
        />
        <CharacterBlock
          image="/holguin_white.png"
          name="Holguin"
          description=""
          rank="Master of the Deathwing"
        />
        <CharacterBlock
          image="/redloss_white.png"
          name="Farith Redloss"
          description=""
          rank="Master of the Dreadwing"
        />
        <CharacterBlock
          image="/aloceri_white.png"
          name="Aloceri"
          description=""
          rank="Master of the Ravenwing"
        />
        <CharacterBlock
          image="/nemiel_white.png"
          name="Nemiel"
          description=""
          rank="Chaplain"
        />
        <CharacterBlock
          name="Hector Thrane"
          rank="Grandmaster of the First Legion"
          description=""
        />
        <CharacterBlock
          name="Urian Vendraig"
          rank="Grandmaster of the First Legion"
          description=""
        />
        <CharacterBlock
          name="Titus"
          rank="Master of the Ironwing"
          description=""
        />
        <CharacterBlock
          name="Calosson"
          rank="Master of the Stormwing"
          description=""
        />
        <CharacterBlock
          name="Vastael"
          rank="Master of the Firewing"
          description=""
        />
        <CharacterBlock
          name="Stenius"
          rank="Captain of the Invincible Reason"
          description=""
        />
        <CharacterBlock
          name="Alajos"
          rank="Master of the 9th Order"
          description=""
        />
        <CharacterBlock
          name="Tragan"
          rank="Master of the 9th Order"
          description=""
        />
        <CharacterBlock
          name="Belat"
          rank="Master of the Ravenwing"
          description=""
        />
        <CharacterBlock
          name="Dareil"
          rank="Master of the Ironwing"
          description=""
        />
        <CharacterBlock
          name="Griffayn"
          rank="Master of the Firewing"
          description=""
        />
        <CharacterBlock
          name="Marduk Sedras"
          rank="Dreadwing Eskaton"
          description=""
        />
        <CharacterBlock name="Elikas" rank="Chief Librarian" description="" />
        <CharacterBlock
          name="Zediel Ardaral"
          rank="Proctor of the Stormwing"
          description=""
        />
        <CharacterBlock
          name="Coriolanus"
          rank="Marshal of Host of Stone"
          description=""
        />
        <CharacterBlock
          name="Idravain Mors"
          rank="Seneschal of the Deathwing"
          description=""
        />
        <CharacterBlock
          name="Alais Decur"
          rank="Knight-Sergeant of the Firewing"
          description=""
        />
        <CharacterBlock name="Oramas" rank="Archon of Flame" description="" />
      </div>
    </div>
  );
}

export default Characters;
