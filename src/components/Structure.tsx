import "../css/structure_style.css";

function Structure() {
  return (
    <div className="structure-inner">
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
  );
}

export default Structure;
