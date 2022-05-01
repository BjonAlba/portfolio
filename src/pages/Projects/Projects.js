import "../style.css";
import "./Projects.css";
import htmlLogo from "../../public/img/html.png";
import cssLogo from "../../public/img/css.png";
import reactLogo from "../../public/img/react.png";
import nodejsLogo from "../../public/img/nodejs.png";
import mongodbLogo from "../../public/img/mongodb.png";
import BackgroundRain from "../../components/BackgroundRain";

const Projects = () => {
  return (
    <>
      <a
        href="#projectsAnchorRight"
        id="toProjects"
        className="navLink stick-to-right font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"<"}
      </a>
      <a
        href="#projectsAnchorLeft"
        id="backProjects"
        className="navLink stick-to-left font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"PROJECTS/>"}
      </a>

      <span id="projectsAnchorLeft"></span>
      <section
        id="projectsSection"
        className="gridBox stick-to-left superscript-section-subscript outline-box"
      >
        <div className="bgShape4"></div>
        <div className="bgGradient1"></div>
        <div className="bgGradient2"></div>
        <BackgroundRain />
      </section>
      <span id="projectsAnchorRight"></span>

      <div className="projOne project-card-bottom">
        <div className="arrow-up"></div>
        <div className="project-container center">
          <a
            href="https://bjonalba.github.io/html-homepage-design/"
            rel="noopener noreferrer"
            target="_blank"
            className="projOne-link superscript-a-subscript hover-box"
          ></a>
          <div className="techUsed-container-top">
            <div className="techUsed-top">
              <img src={htmlLogo} alt="HTML 5 Logo" className="techUsed-logo" />
              <img src={cssLogo} alt="CSS Logo" className="techUsed-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="projTwo project-card-top">
        <div className="arrow-down"></div>
        <div className="project-container center">
          <a
            href="https://bjonalba.github.io/reactjscss03072022/"
            rel="noopener noreferrer"
            target="_blank"
            className="projTwo-link superscript-a-subscript  hover-box"
          ></a>
          <div className="techUsed-container-bottom">
            <div className="techUsed-bottom">
              <img src={htmlLogo} alt="HTML 5 Logo" className="techUsed-logo" />
              <img src={cssLogo} alt="CSS Logo" className="techUsed-logo" />
              <img src={reactLogo} alt="React Logo" className="techUsed-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="projThree project-card-bottom">
        <div className="arrow-up"></div>
        <div className="project-container center">
          <a
            href="https://blog-it-by-bjon.herokuapp.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="projThree-link superscript-a-subscript hover-box"
          ></a>
          <div className="techUsed-container-top">
            <div className="techUsed-top">
              <img src={htmlLogo} alt="HTML 5 Logo" className="techUsed-logo" />
              <img src={cssLogo} alt="CSS Logo" className="techUsed-logo" />
              <img
                src={nodejsLogo}
                alt="NodeJS Logo"
                className="techUsed-logo"
              />
              <img
                src={mongodbLogo}
                alt="MongoDB Logo"
                className="techUsed-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="projFour project-card-top">
        <div className="arrow-down"></div>
        <div className="project-container center">
          <div className="techUsed-container-bottom">
            <div className="techUsed-bottom">
              <img src={htmlLogo} alt="HTML 5 Logo" className="techUsed-logo" />
              <img src={cssLogo} alt="CSS Logo" className="techUsed-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
