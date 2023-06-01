import PropTypes from "prop-types";
import "./Knowledge.css";

export const Knowledge = ({ knowledge }) => {
  return (
    <div className="knowledgeCont">
      <p>{knowledge.join(", ")}</p>;
    </div>
  );
};

Knowledge.propTypes = {
  knowledge: PropTypes.string,
};
