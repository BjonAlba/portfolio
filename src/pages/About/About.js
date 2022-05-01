import "../style.css";
import "./About.css";

const About = () => {
  return (
    <>
      <a
        href="#aboutAnchorRight"
        id="toAbout"
        className="navLink stick-to-right font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"<"}
      </a>
      <a
        href="#aboutAnchorLeft"
        id="backAbout"
        className="navLink stick-to-left font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"ABOUT/>"}
      </a>

      <span id="aboutAnchorLeft"></span>
      <section
        id="aboutSection"
        className="gridBox stick-to-left superscript-section-subscript outline-box"
      >
        {/* <div className="bgShapeBoxUpperLeft"></div>
        <div className="bgCurvedCornerTopRight"></div>
        <div className="bgShape2"></div> */}
        <span id="aboutAnchorRight"></span>
        <h1 className="header-about font-FredokaOne">Hi, I'm</h1>
        <p className="snippet-about font-TempestaSeven center">
          "I'm an aspiring juvenile, looking for oppurtunities to showcase my
          skills as full-stack developer. I'm passionate about programming and
          web development and I can't wait to make use of my abilities and
          continue to grow throughout my career."
        </p>
      </section>
    </>
  );
};
export default About;
