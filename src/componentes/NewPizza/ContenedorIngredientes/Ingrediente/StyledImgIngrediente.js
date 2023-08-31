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
  console.log(ingrediente);
  const colors = [
    {
      nombre: "Salsa",
      img: "https://us.123rf.com/450wm/emojiimage/emojiimage1803/emojiimage180300195/96927052-salsa-con-aj%C3%AD-rojo-en-un-taz%C3%B3n-de-cer%C3%A1mica-salsa-picante-tradicional-de-la-cocina-mexicana-l%C3%ADquido.jpg?ver=6",
    },
    {
      nombre: "Queso",
      img: "https://i.pinimg.com/originals/e0/2f/5a/e02f5ad69c7b32f7d955dcc37eaa5946.png",
    },
    {
      nombre: "Tomate",
      img: "https://media.istockphoto.com/id/1003864042/vector/slice-of-red-tomato-isolated-on-white-flat-tomato-icon-vector-illustration.jpg?s=170667a&w=0&k=20&c=AHWZb1Udj7GgtgQesFtxCRWCa8HjL_nFIYDsXHpkzUU=",
    },
    {
      nombre: "Champiñones",
      img: "https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-cut-champignons-decoration-illustration-image_1385668.jpg",
    },
    {
      nombre: "Piña",
      img: "https://previews.123rf.com/images/viktorijareut/viktorijareut1707/viktorijareut170700133/81377885-ilustraci%C3%B3n-de-vector-icono-de-rodaja-de-pi%C3%B1a-aislado-sobre-fondo-blanco-fruta-tropical-de-verano.jpg",
    },
    {
      nombre: "Peperoni",
      img: "https://cdn-icons-png.flaticon.com/512/2718/2718144.png",
    },
  ];

  const img = colors.find((item) => item.nombre === ingrediente);
  return img ? img.img : "#fff";
}
