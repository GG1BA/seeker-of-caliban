// import "./App.css";
import React, { useState } from "react";

function App() {
  let quotes = [
    "Facts are immutable, regardless of who or what perceives them. Power will always belong to the one who knows them.",
    "Loyalty is its own reward.",
    "The measure of true glory is not to give battle in the bright noon of war, surrounded by brave comrades upon the field of victory, but to valiantly fight on alone in the darkness, with no hope of aid or even remembrance, and to spit defiance in midnight's eye.",
    "Insult me again, brother, and theoretically I will punch you in your practical face.",
    "I failed my father… I fear I also failed my brothers… I do not wish to fail my sons.",
    "That I was ever, and only, thus. The hunter. The slayer of beasts.",
    "The offers change. The awnser remains the same.",
  ];

  let quote_num: number = Math.floor(Math.random() * 7);
  let quote: string = quotes[quote_num];
  let quote_paragraph = (
    <p className="quote animate__animated animate__fadeInUp">«{quote}»</p>
  );
  let timer: number = 0;
  setTimeout(() => (timer = 1), 1000);
  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <p className="high-quote-symbol">„</p>
              <p className="low-quote-symbol">“</p>
              <img src="./src/assets/da-logo-white.png" className="quote-img" />
              {quote_paragraph}
              <p className="quote-author animate__animated animate__fadeInUp">
                - Lion El'Johnson
              </p>
            </div>
          </div>
        </section>
        <section className="legion">
          <div className="container">
            <div id="legion"></div>
            <div className="legion-inner">
              <p className="legion-text">
                The Dark Angels, known in High Gothic as Angelis Tenebraium,
                have the honour of being the first Space Marine Legion created
                by The Emperor of Mankind. Their origins are however shrouded in
                mystery and secrecy, though it is said their Gene-Seed was in
                production a century before the end of the Unification Wars.
              </p>
              <p className="legion-text">
                During their earliest days Prototype Space Marines such as
                Abraxus Ghent were created from the Gene-Seed of Lion El'Jonson
                and served as the template for later Astartes to come. Known as
                the Primordial Strain, almost none of these initial prototypes
                are known to not have survived the process of becoming Space
                Marines but they nonetheless formed the basis of the initial
                culture of the First Legion. The subjects of these early
                experiments were recruited from genetically pure and uncorrupted
                inhabitants of Terra, themselves hard to find amid the many
                Atomic wars and genetic plagues. The Emperor mainly acquired
                such subjects through captured foes and purchasing slaves from
                nomadic clans. As a result the earliest Dark Angels were diverse
                culturally and recruited from across Terra, in contrast with
                most of the other Legions during their earliest days. The First
                Legion became the crucible in which all the cultures of Old
                Night combined with the Emperor's genetic prowess to create a
                new and formidable strain of warrior.
              </p>
              <p className="legion-text">
                In the earliest days of the Great Crusade the First pushed out
                of the Sol System, cleansing the Oort Cloud and keeping watch
                along the Heliopause border for terrors that sought to slip into
                the Emperor's new realm. They also liberated the outermost edges
                of the Sol System, recovering whatever few Human survivors could
                be found. By this point the Legion had become isolated and
                developed a complex culture of ciphers and rituals alongside the
                creation of the first specialized Orders. Upon their return from
                the outer Sol System their grey armor had been changed to pitch
                black. Upon their return they mustered at Saturn, where the
                Emperor gifted them a fleet of ancient but highly advanced
                warships. In the ensuing Great Crusade across the greater Galaxy
                the First Legion continued their role as exterminators, using
                forbidden Archaeotech such as Gene-Phages and Rad-Waves to
                annihilate enemies deemed too terrible to face in open battle.
                As other Legions and Expeditionary Fleet oversaw the
                colonization and compliance of countless worlds The First fought
                nightmarish creatures and Xenos without hesitation or complaint.
                Many of their campaigns, such as those as Behtelgen IV, have
                been deemed classNameified and thus to many the early career of
                the First Legion seems lacking.
              </p>
              <p className="legion-text">
                These trials would face the Legion into a fearsome weapon and
                its Legion Master stood as the Left Hand of the Emperor. This
                role continued even as early Primarchs such as Leman Russ were
                rediscovered, with the Legion Master being 3rd in the Imperial
                Court after Malcador and Horus. However amid the countless
                battles the Hosts of the Hexagrammaton, once an ever-shifting
                body of knowledge that changed to meet each challenge, had
                become stagnant. The warriors of the First assumed they had
                reached the apex of skill and could learn no more. Recruitment
                from outside their enclaves on Terra was minimal and each battle
                led them further down the path of arrogance. Tradition and
                ritual became more valued than innovation, and each Order and
                Host jealously guarded their small fragments of lore. The Legion
                began to turn in upon itself as other Legions such as the Luna
                Wolves, Ultramarines, and Imperial Fists had grown in prestige
                and number of triumphs. The final blow for the Legion's fragile
                pride came at Canis-Balor where the First was overcome by an
                unknown Xenos breed and Exterminatus was enacted at the cost of
                Grandmaster Thrane's life.
              </p>
              <p className="legion-text">
                In the aftermath of the Canis-Balor debacle turmoil swept the
                Legion as the various Orders and Hosts struggled for primacy. To
                settle this problem the First Legion held a great Council at
                Gramarye that saw bitter vitriol and admonition. The Council was
                unable to choose a new Grandmaster, forcing Malcador to
                intervene and choose Urian Vendraig. Vendraig's new task was to
                unify and rejuvenate the Legion and in an unprecedented move
                allowed Remembrancers to stay by his side and document the First
                Legion's ascension. Shortly therafter, the Imperium encountered
                the vicious Rangda. In their initial campaigns against the
                Rangad at Advex-Mors the First Legion lost 5,000 Astartes over
                four months. In the initial Rangdan Xenocides the divisions of
                the Legion were only exacerbated. At Karkasarn the First Legion
                attempted to regain its glory, only for Grandmaster Vendraig to
                meet his end after launching a hasty assault.
              </p>
              <p className="legion-text">
                Vendraig's death stung the First Legion hard, as did Roboute
                Guilliman's scolding of them at the end of the battle. Command
                of the Legion fell to the Council of Masters who split it across
                the stars to seek vindication in conquest. They gave battle
                without remorse and without regard for their own life. The 9th
                and 14th Chapters took the coral citadels of Melnoch from the
                Fra'al in a single night at the cost of a tenth of their own,
                all to outpace the Luna Wolves elsewhere in the cluster. Upon
                Vorsingun a force of 1,000 Initiates and 4,000 war engines of
                the Host of Iron battled an Ork horde over three times its size.
                They prevailed, but again at a fearsome price. Yet for each
                victory the Legion could not regain its former reputation. By
                the mid Great Crusade they had become known as grim
                death-seekers as each Chapter, Host, and Order waged its own
                independent wars.
              </p>
              <p className="legion-text">
                However, the fortune of the Legion changed dramatically when the
                First Legion's Primarch Lion El'Jonson was discovered on
                Caliban. Upon reunion with his Legion The Lion tested his sons
                mettle by dueling the captain of the company presented before
                him. Though not clad in Power Armour and facing a
                Terminator-clad captain, The Lion bested his foe and it is said
                both sides learned respect for the other. From that day forth
                The Lion renamed the Legion the Dark Angels. Announced by the
                Primarch, the connotation was in fact first drawn by his mentor
                Luther, who quoted a section from the legend upon first seeing
                Astartes descending using jump packs:
              </p>
              <p className="quote">
                «And the angels of darkness descended upon pinions of fire and
                light...the great and terrible dark angels.»
              </p>
            </div>
          </div>
        </section>
        <section className="structure">
          <div className="container">
            <div className="structure-inner">
              <div id="structure"></div>
              <div className="structure-block">
                <h2>Primarch</h2>
                <h3>The Lion's Seneschal</h3>
                <div className="tree-line-block">
                  <div className="tree-line line-horizontal"></div>
                  <div className="tree-line line-vertical"></div>
                  <div className="tree-line line-vertical"></div>
                  <div className="tree-line line-vertical"></div>
                </div>
                <div className="three-trees">
                  <div className="structure-tree">
                    <img
                      src="./src/assets/hexa.png"
                      alt="Hexagrammaton"
                      className="structure-img"
                    />
                    <h3>Hexagrammaton</h3>
                    <div className="structure-list">
                      <p className="wing">Deathwing</p>
                      <p className="wing">Ravenwing</p>
                      <p className="wing">Dreadwing</p>
                      <p className="wing">Ironwing</p>
                      <p className="wing">Firewing</p>
                      <p className="wing">Stormwing</p>
                    </div>
                  </div>
                  <div className="structure-tree">
                    <img
                      src="./src/assets/orders.png"
                      alt="Hexagrammaton"
                      className="structure-img"
                    />
                    <h3>Orders of the Hekatonystika</h3>
                    <div className="structure-list">
                      <p className="order">The Five Hundred Companions</p>
                      <p className="order">The Order of Caliban</p>
                      <p className="order">Order of Annihilation</p>
                      <p className="order">Order of Bloody Shrouds</p>
                      <p className="order">Order of Broken Claws</p>
                      <p className="order">Order of Broken Wings</p>
                      <p className="order">Order of the Crimson Field</p>
                      <p className="order">Order of the Empty Sky</p>
                      <p className="order">Order of Extinction</p>
                      <p className="order">Order of Santales</p>
                      <p className="order">Order of Shattered Crowns</p>
                      <p className="order">Order of the Argent Spire</p>
                      <p className="order">Order of the Broken Spears</p>
                      <p className="order">Order of the Shattered Mantle</p>
                      <p className="order">Order of the Shattered Spectrey</p>
                      <p className="order">Order of the Three Keys</p>
                    </div>
                  </div>
                  <div className="structure-tree">
                    <img
                      src="./src/assets/hosts.png"
                      alt="Hexagrammaton"
                      className="structure-img"
                    />
                    <h3>Hosts of the First Legion</h3>
                    <div className="structure-list">
                      <p className="host">1st Host</p>
                      <p className="host">3rd Host</p>
                      <p className="host">Host of Blades</p>
                      <p className="host">Host of Bone</p>
                      <p className="host">Host of Crowns</p>
                      <p className="host">Host of Death</p>
                      <p className="host">Host of Fire</p>
                      <p className="host">Host of Iron</p>
                      <p className="host">Host of Pentacles</p>
                      <p className="host">Host of Stone</p>
                      <p className="host">Host of the Void</p>
                      <p className="host">Host of Wind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="characters">
          <div className="container">
            <div className="characters-inner">
              <div id="characters"></div>
              <h1>Heroes of the First</h1>
              <div className="heroes">
                <div className="character" id="lion">
                  <img
                    src="./src/assets/lion_golden.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Lion El'Johnson</h2>
                  <h3>The Primarch</h3>
                  <p></p>
                </div>
                <div className="character">
                  <img
                    src="./src/assets/corswain_white.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Corswain</h2>
                  <h3>The Lion's Seneschal</h3>
                  <p></p>
                </div>
                <div className="character">
                  <img
                    src="./src/assets/holguin_white.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Holguin</h2>
                  <h3>Master of the Deathwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <img
                    src="./src/assets/redloss_white.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Farith Redloss</h2>
                  <h3>Master of the Dreadwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <img
                    src="./src/assets/aloceri_white.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Aloceri</h2>
                  <h3>Master of the Ravenwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <img
                    src="./src/assets/nemiel_white.png"
                    alt=""
                    className="char-img"
                  />
                  <h2>Nemiel</h2>
                  <h3>Chaplain</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Hector Thrane</h2>
                  <h3>Grandmaster of the First Legion</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Urian Vendraig</h2>
                  <h3>Grandmaster of the First Legion</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Titus</h2>
                  <h3>Master of the Ironwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Calosson</h2>
                  <h3>Master of the Stormwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Vastael</h2>
                  <h3>Master of the Firewing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Stenius</h2>
                  <h3>Captain of the Invincible Reason</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Alajos</h2>
                  <h3>Master of the 9th Order</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Tragan</h2>
                  <h3>Master of the 9th Order</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Belat</h2>
                  <h3>Master of the Ravenwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Dareil</h2>
                  <h3>Master of the Ironwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Griffayn</h2>
                  <h3>Master of the Firewing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Marduk Sedras</h2>
                  <h3>Dreadwing Eskaton</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Elikas</h2>
                  <h3>Chief Librarian</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Zediel Ardaral</h2>
                  <h3>Proctor of the Stormwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Coriolanus</h2>
                  <h3>Marshal of Host of Stone</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Idravain Mors</h2>
                  <h3>Seneschal of the Deathwing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Alais Decur</h2>
                  <h3>Knight-Sergeant of the Firewing</h3>
                  <p></p>
                </div>
                <div className="character">
                  <h2>Oramas</h2>
                  <h3>Archon of Flame</h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="campaigns">
          <div className="container">
            <div className="campaigns-inner">
              <div id="campaigns"></div>
              <h1>Legion Campaigns</h1>
              <div className="campaign-list">
                <div className="campaign">
                  <h2>Unification Wars</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Destruction of Canis-Balor</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Сleansing the Oort Cloud</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Rangdan Xenocides</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Dulan Campaign</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Gordian League </h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Thramas Crusade</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>Revenge Campaign</h2>
                  <p></p>
                </div>
                <div className="campaign">
                  <h2>The Forgotten Wars</h2>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="authors"></section>
        <section className="feedback"></section>
      </main>
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="#">
              <img
                src="./src/assets/da-logo.png"
                alt="header-logo"
                className="header-logo"
              />
            </a>
            <nav className="nav">
              <ul className="menu-list">
                <a href="#legion">
                  <li className="menu-item">Legion</li>
                </a>
                <a href="#structure">
                  <li className="menu-item">Structure</li>
                </a>
                <a href="#characters">
                  <li className="menu-item">Characters</li>
                </a>
                <a href="#campaigns">
                  <li className="menu-item">Campaigns</li>
                </a>
                <a href="#">
                  <li className="menu-item">Author</li>
                </a>
                <a href="#">
                  <li className="menu-item">Feedback</li>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
