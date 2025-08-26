import "../css/hero_style.css";

function Hero() {
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
    <div className="hero-inner">
      <p className="high-quote-symbol">“</p>
      <p className="low-quote-symbol">„</p>
      <img src="./src/assets/da-logo-white.png" className="quote-img" />
      {quote_paragraph}
      <p className="quote-author animate__animated animate__fadeInUp">
        - Lion El'Johnson
      </p>
    </div>
  );
}

export default Hero;
