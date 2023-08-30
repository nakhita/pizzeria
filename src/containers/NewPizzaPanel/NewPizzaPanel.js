import React from "react";
import { agregarIngrediente, crearNuevaPizza } from "./newPizzaPanelSlice";
import { useDispatch, useSelector } from "react-redux";
import { StyledButtonNewPizza } from "../../componentes/Button/StyledButtonNewPizza";
import { StyledContainerNewPizza } from "../../componentes/NewPizza/StyledContainerNewPizza";
import { StyledIconTabIngrediente } from "../../componentes/NewPizza/IconPizzaPedido/StyledIconTabIngrediente";
import { StyleMiniTabIngrediente } from "../../componentes/NewPizza/MiniTabIngredientes/StyleMiniTabIngrediente";
import { StyledContenedorIngredientes } from "../../componentes/NewPizza/ContenedorIngredientes/StyledContenedorIngredientes";
import { StyledIngredienteButton } from "../../componentes/NewPizza/ContenedorIngredientes/Ingrediente/StyledIngredienteButton";
import { StyledImgIngrediente } from "../../componentes/NewPizza/ContenedorIngredientes/Ingrediente/StyledImgIngrediente";
import { StyledIngredienteNombre } from "../../componentes/NewPizza/ContenedorIngredientes/Ingrediente/StyledIngredienteNombre";
import { StyledIngredientePrecio } from "../../componentes/NewPizza/ContenedorIngredientes/Ingrediente/StyledIngredientePrecio";

const NewPizzaPanel = () => {
  const dispatch = useDispatch();
  const { nuevaPizza, pizza } = useSelector((state) => state.newPizza);

  const listaIngredientes = () => {
    return pizza.map((ingrediente) => (
      <StyledIconTabIngrediente ingrediente={ingrediente.nombre}>
        {ingrediente.letra}
      </StyledIconTabIngrediente>
    ));
  };
  return (
    <StyledContainerNewPizza>
      <StyleMiniTabIngrediente>
        <StyledButtonNewPizza onClick={(e) => dispatch(crearNuevaPizza({}))}>
          New Pizza
        </StyledButtonNewPizza>
        <div>{nuevaPizza ? listaIngredientes() : ""}</div>
      </StyleMiniTabIngrediente>
      <StyledContenedorIngredientes>
        <StyledIngredienteButton
          onClick={(e) =>
            dispatch(agregarIngrediente({ nombre: "pepinillo", letra: "P" }))
          }
        >
          <StyledImgIngrediente ingrediente="pepinillo"></StyledImgIngrediente>
          <StyledIngredienteNombre>pepinillo</StyledIngredienteNombre>
          <StyledIngredientePrecio>+$100</StyledIngredientePrecio>
        </StyledIngredienteButton>
      </StyledContenedorIngredientes>
    </StyledContainerNewPizza>
  );
};

export default NewPizzaPanel;
