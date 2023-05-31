import PropTypes from "prop-types";
import "./Experience.css";

export const Experience = ({ experience }) => {
  return (
    <div className="experienceCard">
      {experience.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <h3 className="name">{item.name}</h3>
            <p>{item.date}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.string,
};
