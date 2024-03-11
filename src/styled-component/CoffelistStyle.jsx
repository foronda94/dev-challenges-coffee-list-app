import styled from 'styled-components';
import {colorsApp} from '../helpers/colors'

export const Coffe = styled.div`
  &.container {
    position: absolute; 
    top: 0;
    display: flex; 
    justify-content: center
  }

  .coffee-list__image-header {
    width: 100%;
    display: block;
    min-height: 200px;
    object-fit: cover;
    object-position: bottom;
  }

  .coffee-list__container-list {
    position: absolute;
    top: 0;
    margin-top: 30vh;
    width: 85vw;
    text-align: center;
    border-radius: 20px;
    background: #1B1D1F;
    height: auto;
    padding: 0 20px;
  }

  .coffee-list__container-list-center {
    margin-top: 60px;
    display: flex;
    justify-content: center;
  }

  .coffee-list__container-list-center div {
    position: relative;
    width: 35vw
  }

  .coffee-list__container-list-center img {
    position: absolute;
    bottom: 35px;
    right: 5px
  }

  .coffee-list__container-list-center h2 {
    color: ${colorsApp.crema};
    position: relative
  }

  .coffee-list__container-list-center p {
    color: ${colorsApp.gris};
    position: relative;
    font-weight: bold;
  }

  /* Media queries para cambiar el diseño en tablet y móvil */
  @media (max-width: 1024px) {
    .coffee-list__container-list {
      width: 70vw;
      display: inline-table;
    }

    .coffee-list__container-list-center div {
      width: 55vw
    }
  }

  @media (max-width: 690px) {
    .coffee-list__container-list {
      width: 65vw;
    }

    .coffee-list__container-list-center div {
      width: 55vw
    }
  }

`;

export const ButtonFilter = styled.div`

  margin-bottom: 30px;

  .filter-buttons {
    margin-bottom: 20px;
  }

  .filter-button {
    background-color: transparent;
    border: none;
    color: ${colorsApp.crema};
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }

  .filter-button.active {
    background-color: ${colorsApp.gris};
    color: ${colorsApp.crema};
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;

  .card-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px
  }

  .card {
    padding: 10px;
    border-radius: 8px;
  }

  .card-img {
    position: relative;
  }

  .card-img img {
    border-radius: 8px;
  }

  .card-img p {
    margin: 0;
    height: fit-content;
    background: ${colorsApp.amarillo};
    border-radius: 8px;
    padding: 0 10px;
    font-weight: 500
  }


  .card-info__popular {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .card-info__popular p {
    color: ${colorsApp.negro};
  }

  .card-info {
    display: flex;
    justify-content: space-between;
  }

  .card-info__name {
    margin: 0;
    height: fit-content;
    color: ${colorsApp.crema}
  }

  .card-info__price {
    margin: 0;
    height: fit-content;
    background: ${colorsApp.verdeClaro};
    color: ${colorsApp.negro};
    border-Radius: 8px;
    padding: 0 10px;
    font-Weight: 500
  }

  .card-rating {
    display: flex;
    justify-content: space-between;
  }

  .card-rating div {
    display: flex
  }

  .card-rating__rating {
    color: ${colorsApp.crema};
    opacity: 0.5
  }

  .card-rating__vote {
    color: ${colorsApp.crema};
  }

  .card-rating__vote span {
    opacity: 0.5;
  }

  .card-rating__soldOut {
    font-size: 12px;
    color: ${colorsApp.rojo};
  }

  /* Media queries para cambiar el diseño en tablet y móvil */
  @media (max-width: 1024px) {
    .card-container {
      grid-template-columns: repeat(2, 1fr); /* Cambia a 2 columnas en tablets */
    }
  }

  @media (max-width: 690px) {
    .card-container {
      grid-template-columns: 1fr; /* Cambia a 1 columna en dispositivos móviles */
    }
  }
`;