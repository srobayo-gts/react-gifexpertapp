import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      /** no  hace falta que las cateorias vengan en las props
       * ya que le referencia a la funcion maneja un callback y tranquilamente se puese usar esa funcionalidad*/
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  /** si ya no  se usa un form, no es necesario usar el frgmanet <></>
   * porque de por si el From es un componente o  elemento agrupador
   * */

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
