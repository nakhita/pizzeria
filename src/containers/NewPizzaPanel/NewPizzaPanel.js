import React from "react";
import { crearNuevaPizza } from "./newPizzaPanelSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledButtonNewPizza } from "../../componentes/Button/StyledButtonNewPizza";

const NewPizzaPanel = () => {
  const dispatch = useDispatch();
  const { nuevaPizza } = useSelector((state) => state.newPizza);
  return (
    <div>
      <StyledButtonNewPizza onClick={(e) => dispatch(crearNuevaPizza({}))}>
        New Pizza
      </StyledButtonNewPizza>
      <div>{nuevaPizza ? "Pizza" : "No hay Pizza"}</div>
    </div>
  );
};

export default NewPizzaPanel;
