import styled from "styled-components";

export const StyledImgIngrediente = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => getImg(props.ingrediente)});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* Otros estilos */
`;

function getImg(ingrediente) {
  console.log(ingrediente);
  const colors = [
    {
      nombre: "pizza",
      img: "https://img.lovepik.com/free-png/20220118/lovepik-cucumber-slices-png-image_401465288_wh860.png",
    },
    {
      nombre: "pepinillo",
      img: "https://img.lovepik.com/free-png/20220118/lovepik-cucumber-slices-png-image_401465288_wh860.png",
    },
  ];

  const img = colors.find((item) => item.nombre === ingrediente);
  return img ? img.img : "#000";
}
