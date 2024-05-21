import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// eslint-disable-next-line react/prop-types
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas nemo
          facere perferendis id totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas nemo
          facere perferendis id totam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quas nemo
          facere perferendis id totam?
        </p>
      </div>
    </div>
  );
};

export default About;
