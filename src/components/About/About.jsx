import PropTypes from "prop-types";
import "./About.css";

export const About = ({ aboutMe }) => {
  return (
    <div className="aboutCont">
      {aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

About.propTypes = {
  aboutMe: PropTypes.string,
};
