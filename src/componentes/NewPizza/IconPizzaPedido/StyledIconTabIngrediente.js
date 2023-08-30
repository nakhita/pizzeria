import { styled } from "styled-components";

export const StyledIconTabIngrediente = styled.button`
  color: #494949;
  margin: 0px 15px 15px 15px;
  width: 25px;
  height: 25px;
  background-color: ${(props) => getColor(props.ingrediente)};
  border-radius: 50%;
  font-size: 20px;
  border: none;
  font-size: 15px;
  align-self: center;
`;

function getColor(ingrediente) {
  console.log(ingrediente);
  const colors = [
    { nombre: "pizza", color: "#ffe1a9" },
    { nombre: "pepinillo", color: "#588100" },
  ];

  const colorObj = colors.find((item) => item.nombre === ingrediente);
  return colorObj ? colorObj.color : "#fff";
}
