import PropTypes from "prop-types";
import "./Education.css";

export const Education = ({ education }) => {
  return (
    <div className="educationCard">
      {education.map((item) => {
        // mapeamos la seccion education que esta en CV para sacar la informacion
        return (
          <div key={JSON.stringify(item)}>
            {/*la ponemos la key para que le bien los datos, con JSON.stringify es para convertir los valores js en una cadena JSON */}
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
