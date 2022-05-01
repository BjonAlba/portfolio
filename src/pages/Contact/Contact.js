import ContactRotary from "../../components/ContactRotary";
import "../style.css";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <a
        href="#contactAnchorRight"
        id="toContact"
        className="navLink stick-to-right font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"<"}
      </a>
      <a
        href="#contactAnchorLeft"
        id="backContact"
        className="navLink stick-to-left font-TempestaSeven superscript-a-subscript hover-box"
      >
        {"CONTACT/>"}
      </a>

      <span id="contactAnchorLeft"></span>
      <section
        id="contactSection"
        className="gridBox stick-to-left superscript-section-subscript outline-box"
      >
        <div className="bgShape5"></div>
        <ContactRotary />
        <span id="contactAnchorRight"></span>
      </section>
    </>
  );
};
export default Contact;
