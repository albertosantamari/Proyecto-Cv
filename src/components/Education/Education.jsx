import PropTypes from "prop-types";
import "./Education.css";

export const Education = ({ education }) => {
  return (
    <div className="educationCard">
      {education.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <h3 className="name">{item.name}</h3>
            <p>{item.where}</p>
            <p>{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.string,
};
