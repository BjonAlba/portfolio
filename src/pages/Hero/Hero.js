import "../style.css";
import "./Hero.css";
import MyPicture from "../../components/MyPicture";

const Hero = () => {
  return (
    <>
      <a
        href="#heroAnchor"
        id="backHero"
        className="navLink stick-to-left font-Monoton superscript-a-subscript hover-box"
      >
        <span className="color-teal flicker-slow">B</span>
        <span className="color-orange flicker-fast">A</span>
      </a>
      <span id="heroAnchor"></span>

      <MyPicture />
      <h1 className="header-hero font-FredokaOne stick-to-right">BJON ALBA</h1>
      <h2 className="header2-hero font-TempestaSeven stick-to-right">
        {"<Web Developer />"}
      </h2>
      <p className="snippet-hero font-TempestaSeven stick-to-right">
        "Bring out the <span className="color-orange">extra</span>
        <br />
        in <span className="color-teal">ordinary</span>"
      </p>

      {/* <div className="myPicture stick-to-right"></div> */}

      <section
        id="heroSection"
        className="gridBox stick-to-left superscript-section-subscript outline-box"
      >
        <div className="bgShape"></div>
      </section>
    </>
  );
};
export default Hero;
