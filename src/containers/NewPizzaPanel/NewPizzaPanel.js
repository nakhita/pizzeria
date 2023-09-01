import React, { useState } from "react";
import {
  agregarIngrediente,
  crearNuevaPizza,
  quitarIngrediente,
  vaciarLista,
} from "./newPizzaPanelSlice";
import {
  crearNuevoPedido,
  actualizarNombrePedido,
  actualizarDireccionPedido,
} from "../PedidosPanel/pedidoPanelSlice";
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
import { v4 as uuidv4 } from "uuid";
import { StyledBannerPizzaCreada } from "../../componentes/NewPizza/StyledBannerPizzaCreada";

const NewPizzaPanel = () => {
  const dispatch = useDispatch();
  const [showBanner, setShowBanner] = useState(false);
  const { nuevaPizza, pizza, ingredientes } = useSelector(
    (state) => state.newPizza
  );
  const { nombrePedido, direccionPedido } = useSelector(
    (state) => state.pedidos
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
          if (nuevaPizza) {
            dispatch(
              agregarIngrediente({
                nombre: ingrediente.nombre,
                letra: ingrediente.letra,
                precio: ingrediente.precio,
                disable: true,
              })
            );
          }
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

  const calcularPrecioTotal = () => {
    console.log(pizza);
    const precioTotal = pizza.reduce((total, ingrediente) => {
      return total + ingrediente.precio;
    }, 0);
    return precioTotal;
  };
  const handleShowBanner = () => {
    setShowBanner(true);

    setTimeout(() => {
      setShowBanner(false);
    }, 2000);
  };
  const crearPedido = () => {
    if (nuevaPizza) {
      if (direccionPedido !== "" && nombrePedido !== "") {
        const totalPrecio = calcularPrecioTotal();
        const unicaID = uuidv4();
        dispatch(
          crearNuevoPedido({
            id: unicaID,
            nombre: nombrePedido,
            direccion: direccionPedido,
            pizza: pizza,
            total: totalPrecio,
            entregado: false,
          })
        );
        dispatch(vaciarLista());
        handleShowBanner();
      }
    }
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
          {showBanner && (
            <div className="banner">
              <StyledBannerPizzaCreada>
                ¡Se creó la pizza correctamente!
              </StyledBannerPizzaCreada>
            </div>
          )}
          <StyledDescripcion>Nombre</StyledDescripcion>
          <StyledInputPedido
            value={nombrePedido}
            onChange={(e) => dispatch(actualizarNombrePedido(e.target.value))}
          ></StyledInputPedido>
          <StyledDescripcion>Direccion</StyledDescripcion>
          <StyledInputPedido
            value={direccionPedido}
            onChange={(e) =>
              dispatch(actualizarDireccionPedido(e.target.value))
            }
          ></StyledInputPedido>
          <StyledButtonCrearPedido onClick={(e) => crearPedido()}>
            Crear Pedido
          </StyledButtonCrearPedido>
        </StyledContainerDireccion>
      </StyledSubPanelIngredienteDireccion>
    </StyledContainerNewPizza>
  );
};

export default NewPizzaPanel;
