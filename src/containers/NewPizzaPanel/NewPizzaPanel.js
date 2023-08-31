import React from "react";
import {
  agregarIngrediente,
  crearNuevaPizza,
  quitarIngrediente,
} from "./newPizzaPanelSlice";
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
import { StyledContainerDireccion } from "../../componentes/NewPizza/Direccion/StyledContainerDireccion";
import { StyledTitulo } from "../../componentes/NewPizza/Direccion/StyledTitulo";
import { StyledSubPanelIngredienteDireccion } from "../../componentes/NewPizza/StyledSubPanelIngredienteDireccion";
import { StyledDescripcion } from "../../componentes/NewPizza/Direccion/StyledDescripcion";
import { StyledInputPedido } from "../../componentes/NewPizza/Direccion/StyledInputPedido";
import { StyledButtonCrearPedido } from "../../componentes/NewPizza/Direccion/StyledButtonCrearPedido";

const NewPizzaPanel = () => {
  const dispatch = useDispatch();
  const { nuevaPizza, pizza, ingredientes } = useSelector(
    (state) => state.newPizza
  );

  const listaIngredientes = () => {
    return pizza.map((ingrediente) => (
      <StyledIconTabIngrediente
        onClick={(e) => dispatch(quitarIngrediente(ingrediente.nombre))}
        ingrediente={ingrediente.nombre}
      >
        {ingrediente.letra}
      </StyledIconTabIngrediente>
    ));
  };

  const isDisabledIngrediente = (nombreIngrediente) => {
    const ingredienteEncontrado = pizza.find(
      (ingrediente) => ingrediente.nombre === nombreIngrediente
    );
    if (ingredienteEncontrado) {
      return true;
    }
    return false;
  };

  const listarBotonesIngredientes = () => {
    return ingredientes.map((ingrediente) => (
      <StyledIngredienteButton
        isDisabled={isDisabledIngrediente(ingrediente.nombre)}
        onClick={(e) => {
          dispatch(
            agregarIngrediente({
              nombre: ingrediente.nombre,
              letra: ingrediente.letra,
              disable: true,
            })
          );
        }}
      >
        <StyledImgIngrediente
          ingrediente={ingrediente.nombre}
        ></StyledImgIngrediente>
        <StyledIngredienteNombre>{ingrediente.nombre}</StyledIngredienteNombre>
        <StyledIngredientePrecio>
          +${ingrediente.precio}
        </StyledIngredientePrecio>
      </StyledIngredienteButton>
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
      <StyledSubPanelIngredienteDireccion>
        <StyledContenedorIngredientes>
          {listarBotonesIngredientes()}
        </StyledContenedorIngredientes>
        <StyledContainerDireccion>
          <StyledTitulo>Direccion Pedido</StyledTitulo>
          <StyledDescripcion>Nombre</StyledDescripcion>
          <StyledInputPedido></StyledInputPedido>
          <StyledDescripcion>Direccion</StyledDescripcion>
          <StyledInputPedido></StyledInputPedido>
          <StyledButtonCrearPedido>Crear Pedido</StyledButtonCrearPedido>
        </StyledContainerDireccion>
      </StyledSubPanelIngredienteDireccion>
    </StyledContainerNewPizza>
  );
};

export default NewPizzaPanel;
