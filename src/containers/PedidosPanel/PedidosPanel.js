import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledUl } from "../../componentes/ListaPedidos/Ul/StyledUl";
import { StyledLiConteiner } from "../../componentes/ListaPedidos/Li/StyledLiConteiner";
import { StyledLi } from "../../componentes/ListaPedidos/Li/StyledLi";
import { StyledLiButtonDeleted } from "../../componentes/ListaPedidos/Li/StyledLiButtonDeleted";
import {
  eliminarPedido,
  estadoEntregado,
} from "../PedidosPanel/pedidoPanelSlice";
import { StyledConteinerLi } from "../../componentes/ListaPedidos/Li/StyledConteinerLi";
import { StyledLiButtonEntregado } from "../../componentes/ListaPedidos/Li/StyledLiButtonEntregado";

const PedidosPanel = () => {
  const dispatch = useDispatch();
  const { listaPedidos } = useSelector((state) => state.pedidos);

  function listaIngredientes(pizza) {
    const nombresIngredientes = pizza.map((ingrediente) => ingrediente.nombre);

    return <p>{nombresIngredientes.join(", ")}</p>;
  }
  const mostrarLista = (elemento) => {
    console.log("elemento", elemento);
    if (elemento.length > 0) {
      return (
        <StyledUl>
          {elemento.map((pedido) => (
            <StyledLiConteiner key={pedido.id}>
              <StyledConteinerLi>
                <StyledLi key={pedido.id}>Nombre: {pedido.nombre}</StyledLi>
                <StyledLi key={pedido.id}>
                  Direccion: {pedido.direccion}
                </StyledLi>
              </StyledConteinerLi>
              <StyledConteinerLi>
                <StyledLi key={pedido.id}>
                  Pizza: {listaIngredientes(pedido.pizza)}
                </StyledLi>
              </StyledConteinerLi>
              <StyledConteinerLi>
                <StyledLi key={pedido.id}>Total: {pedido.total}</StyledLi>
              </StyledConteinerLi>

              <StyledConteinerLi>
                {pedido.entregado ? (
                  <StyledLiButtonDeleted
                    key={`btn-${pedido.id}`}
                    onClick={(e) => dispatch(eliminarPedido(pedido.id))}
                  >
                    X
                  </StyledLiButtonDeleted>
                ) : (
                  <StyledLiButtonEntregado
                    key={`btn-${pedido.id}`}
                    onClick={(e) => dispatch(estadoEntregado(pedido.id))}
                  >
                    Entregado
                  </StyledLiButtonEntregado>
                )}
              </StyledConteinerLi>
            </StyledLiConteiner>
          ))}
        </StyledUl>
      );
    } else {
      return (
        <div style={{ textAlign: "center", padding: "15px" }}>
          No hay nada para mostrar
        </div>
      );
    }
  };

  return mostrarLista(listaPedidos);
};
export default PedidosPanel;
