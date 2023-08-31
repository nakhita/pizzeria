import { styled } from "styled-components";

export const StyledIconTabIngrediente = styled.button`
  color: #494949;
  margin: 0px 15px 15px 15px;
  width: 40px;
  height: 40px;
  color: white;
  text-shadow: -1px -1px 0 #7a7a7a, 1px -1px 0 #7a7a7a, -1px 1px 0 #7a7a7a,
    1px 1px 0 #7a7a7a;
  background-color: ${(props) => getColor(props.ingrediente)};
  border-radius: 50%;
  font-size: 20px;
  border: none;
  font-size: 22px;
  align-self: center;
`;

function getColor(ingrediente) {
  const colors = [
    { nombre: "Pizza", color: "#ffe1a9" },
    { nombre: "Salsa", color: "#821018" },
    { nombre: "Queso", color: "#f9db5c" },
    { nombre: "Tomate", color: "#9c0720" },
    { nombre: "Champiñones", color: "#e8c39e" },
    { nombre: "Piña", color: "#f3bc26" },
    { nombre: "Peperoni", color: "#56070c" },
  ];

  const colorObj = colors.find((item) => item.nombre === ingrediente);
  return colorObj ? colorObj.color : "#fff";
}
