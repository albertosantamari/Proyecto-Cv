import PropTypes from "prop-types";
import "./Knowledge.css";

export const Knowledge = ({ knowledge }) => {
  return (
    <div className="knowledgeCont">
      <p>{knowledge.join(", ")}</p>;{" "}
      {/*join es para que ponga , y espacios entre los valores sacados del array*/}
    </div>
  );
};

Knowledge.propTypes = {
  knowledge: PropTypes.string,
};
