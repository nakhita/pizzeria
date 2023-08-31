import styled from "styled-components";

export const StyledImgIngrediente = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => getImg(props.ingrediente)});
  background-size: cover;
  background-position: center;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  text-align: center;
  /* Otros estilos */
`;

function getImg(ingrediente) {
  const colors = [
    {
      nombre: "Salsa",
      img: "https://i.imgur.com/Ua4fMHh.png",
    },
    {
      nombre: "Queso",
      img: "https://i.imgur.com/VdbFZQE.png",
    },
    {
      nombre: "Tomate",
      img: "https://i.imgur.com/ARCQiSi.png",
    },
    {
      nombre: "Champiñones",
      img: "https://i.imgur.com/fybPYH2.png",
    },
    {
      nombre: "Piña",
      img: "https://i.imgur.com/GOXzQSn.png",
    },
    {
      nombre: "Peperoni",
      img: "https://i.imgur.com/4ICQ6jG.png",
    },
  ];

  const img = colors.find((item) => item.nombre === ingrediente);
  return img ? img.img : "#fff";
}
