import "../style.css";
import "./Skills.css";
import htmlLogo from "../../public/img/html.png";
import cssLogo from "../../public/img/css.png";
import reactLogo from "../../public/img/react.png";
import nodejsLogo from "../../public/img/nodejs.png";
import mongodbLogo from "../../public/img/mongodb.png";
import goldenRatio from "../../public/img/1280px-Fibonacci_spiral_34.png";
import bgGrid from "../../public/img/v882-kul-46.jpg";
const Skills = () => {
  return (
    <>
      <a
        href="#skillsAnchorRight"
        id="toSkills"
        className="navLink stick-to-right font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"<"}
      </a>
      <a
        href="#skillsAnchorLeft"
        id="backSkills"
        className="navLink stick-to-left font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"SKILLS/>"}
      </a>

      <span id="skillsAnchorLeft"></span>
      <section
        id="skillsSection"
        className="gridBox stick-to-left superscript-section-subscript outline-box"
      >
        {/* <div className="bgShapeBoxBottomLeft"></div>
        <div className="bgCurvedCornerBottomRight"></div>
        <div className="bgShape3"></div> */}
        <div className="backGroundGridDesign">
          <img
            src={bgGrid}
            className="gridImage"
            alt="Grid Wireframe Background"
          />
        </div>
        <h1 className="header-skills font-FredokaOne">
          <span style={{ color: "#000000" }}>Hi,</span> I'm
        </h1>
        <h1 className="header-skills2 font-FredokaOne">A Fresh Graduate</h1>

        <div className="logo logo-html center superscript-img-subscript">
          <img src={htmlLogo} alt="HTML 5 Logo" className="logo" />
        </div>
        <div className="logo logo-css center superscript-img-subscript">
          <img src={cssLogo} alt="CSS Logo" className="logo" />
        </div>
        <div className="logo logo-react center superscript-img-subscript">
          <img src={reactLogo} alt="React Logo" className="logo" />
        </div>
        <div className="logo logo-nodejs center superscript-img-subscript">
          <img src={nodejsLogo} alt="NodeJS Logo" className="logo" />
        </div>
        <div className="logo logo-mongodb center superscript-img-subscript">
          <img src={mongodbLogo} alt="MongoDB Logo" className="logo" />
        </div>

        <svg
          id="svg"
          // viewBox="290 70 440 630"
          viewBox="0 0 1232 762"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="none"
            stroke="#AF37D4"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
            M 0 0 L 0 761.775 L 1231.572 761.775 L 1231.572 0 L 0 0 M 761 0 L 761 761.775 M 761 292 L 1231.572 292 M 940 0 L 940 292 M 940 180 L 761 180 M 873 180 L 873 292 M 873 225 L 940 225 M 896 180 L 896 225 M 873 202 L 896 202"
          />
          <path
            fill="none"
            stroke="#37D4AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
            M 0 761.775 L 1231.572 0 M 1231.572 762 L 761 0"
          />
          <path
            id="path"
            fill="none"
            stroke="#D4AF37"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            d="
            M 0 0 C 4.214 475.558 398.23 765.46 761.498 761.775 C 1058.445 759.291 1234.5 510.743 1231.572 291.507 C 1231.761 114.327 1080.197 -3.482 940.318 0.877 C 835.494 0.142 759.52 91.591 761.382 179.704 C 761.223 245.919 819.011 293.37 873.024 292.287 C 907.962 291.645 941.006 263.142 941.137 224.627 C 939.832 201.647 922.136 180.169 895.787 180.166 C 886.292 180.32 873.282 189.503 873.057 201.883"
          />
        </svg>
        <div className="golden-ratio"></div>
        {/* <img src={goldenRatio} alt="Golden Ratio" className="golden-ratio" /> */}

        <span id="skillsAnchorRight"></span>
      </section>
    </>
  );
};
export default Skills;
