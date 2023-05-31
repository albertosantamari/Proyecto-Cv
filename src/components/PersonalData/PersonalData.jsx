import PropTypes from "prop-types";
import "./PersonalData.css";

export const PersonalData = ({ personal }) => {
  return (
    <div className="personalData">
      <img src={personal.image} alt="" />
      <div className="card">
        <h2>
          {personal.name} {personal.surname}
        </h2>
        <p>🗺️{personal.city} </p>
        <p>🗓️{personal.birthDate}</p>
        <p>
          📧
          <a href={"email:" + personal.email}>alberto.elmazao@outlook.es</a>
        </p>
        <p>📱 {personal.phone}</p>
        <p>
          💾<a href={personal.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

PersonalData.propTypes = {
  personal: PropTypes.string,
};
