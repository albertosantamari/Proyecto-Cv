import PropTypes from "prop-types";
import "./Languages.css";

export const Langua = ({ languages }) => {
  return (
    <div className="moreInfo">
      <h3>{languages.language}</h3>
      <p>{languages.wrlevel}</p>
      <p>{languages.splevel}</p>
    </div>
  );
};

Langua.propTypes = {
  languages: PropTypes.string,
};
