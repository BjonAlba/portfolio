import "./ContactRotary.css";
import Base from "../../public/img/contact-rotary.png";
import BottomMid from "../../public/img/contact-rotary-mid-bottom.png";
import TopMid from "../../public/img/contact-rotary-mid-top.png";
import Inner from "../../public/img/contact-rotary-inner.png";
import Hand from "../../public/img/contact-rotary-hand.png";
import Phone from "../../public/img/phone-solid.svg";
import Facebook from "../../public/img/facebook-f-brands.svg";
import Linkedin from "../../public/img/linkedin-in-brands.svg";
import Email from "../../public/img/at-solid.svg";
import Instagram from "../../public/img/instagram-brands.svg";
import Twitter from "../../public/img/twitter-brands.svg";
import CV from "../../public/img/file-regular.svg";
import Circle from "../../public/img/circle-solid.svg";
import CvFile from "../../public/files/Alba, Bjon Ernelle - CV.pdf";

const ContactRotary = () => {
  return (
    <>
      <img
        src={Base}
        alt="Base of Rotary"
        className="base rotary-dial center .z-index-zero"
      />
      <img
        src={BottomMid}
        alt="Bottom Mid of Rotary"
        className="bottom-mid rotary-dial center"
      />
      <div className="top-mid rotary-dial center contact-icons ">
        <img
          src={Circle}
          alt="Phone Icon"
          className="contact-icon-one center z-index-zero fill-grid-space"
        />
        <img
          src={Circle}
          alt="Phone Icon"
          className="contact-icon-two center  z-index-zero fill-grid-space"
        />
        <img
          src={Facebook}
          alt="Phone Icon"
          className="contact-icon-three center z-index-zero fill-grid-space"
        />
        <img
          src={Instagram}
          alt="Phone Icon"
          className="contact-icon-four center z-index-zero fill-grid-space"
        />
        <img
          src={Linkedin}
          alt="Phone Icon"
          className="contact-icon-five center z-index-zero fill-grid-space"
        />
        <img
          src={Email}
          alt="Phone Icon"
          className="contact-icon-six center z-index-zero fill-grid-space"
        />
        <img
          src={Phone}
          alt="Phone Icon"
          className="contact-icon-seven center z-index-zero fill-grid-space"
        />
        <img
          src={Twitter}
          alt="Phone Icon"
          className="contact-icon-eight center z-index-zero fill-grid-space"
        />
        <img
          src={Circle}
          alt="Phone Icon"
          className="contact-icon-nine center z-index-zero fill-grid-space"
        />
        <img
          src={CV}
          alt="Phone Icon"
          className="contact-icon-zero center z-index-zero fill-grid-space"
        />
        <a
          href=""
          className="contact-icon-one center z-index-three fill-grid-space superscript-a-subscript"
        ></a>
        <a
          href=""
          className="contact-icon-two center z-index-three fill-grid-space superscript-a-subscript"
        ></a>
        <a
          href="https://www.facebook.com/bjon.alba/"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-icon-three center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href="https://www.instagram.com/albabjon/?hl=en"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-icon-four center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href=""
          className="contact-icon-five center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href=""
          className="contact-icon-six center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href=""
          className="contact-icon-seven center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href="https://twitter.com/bjonernellealba"
          rel="noopener noreferrer"
          target="_blank"
          className="contact-icon-eight center z-index-three fill-grid-space superscript-a-subscript "
        ></a>
        <a
          href=""
          className="contact-icon-nine center z-index-three fill-grid-space .superscript-a-subscript "
        ></a>
        <a
          href={CvFile}
          rel="noopener noreferrer"
          target="_blank"
          className="contact-icon-zero center z-index-three fill-grid-space .superscript-a-subscript "
        ></a>
        <img
          src={TopMid}
          alt="Top Mid of Rotary"
          className="rotating-the-dial center"
        />
        <img src={Inner} alt="Inner of Rotary" className="inner center" />
        <img src={Hand} alt="Hand of Rotary" className="hand center" />
      </div>
    </>
  );
};

export default ContactRotary;
