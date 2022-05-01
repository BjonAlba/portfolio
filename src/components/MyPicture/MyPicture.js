import "./MyPicture.css";
import me from "../../public/img/Me.jpg";
import pixelMe from "../../public/img/PixelMe.png";
import VinylFront from "../../public/img/brett-jordan-P_LEitbpCPg-unsplash.png";
import VinylBack from "../../public/img/brett-jordan-SssdoXhhtJw-unsplash.png";

const MyPicture = () => {
  return (
    <>
      <label id="clickToFlip" htmlFor="flipCheck" className="stick-to-right">
        <input id="flipCheck" type="checkbox" className="center" />

        <div className="flip-me center">
          <div className="image-front">
            <img
              src={VinylFront}
              alt="Front of Vinyl Record"
              className="vinyl-face center"
            />
            <img
              src={pixelMe}
              alt="Picture of Me Pixelated"
              className="center"
            />
          </div>
          <div className="image-back">
            <img
              src={VinylBack}
              alt="Back of Vinyl Record"
              className="vinyl-face center"
            />
            <img src={me} alt="Picture of Me" className="center" />
          </div>
        </div>
      </label>
    </>
  );
};

export default MyPicture;
