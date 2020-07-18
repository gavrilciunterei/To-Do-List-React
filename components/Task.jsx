import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  justify-items: start;
  align-items: center;
  padding: 0 1rem;
  background-color: ${({ color }) => color};
  width: 100%;
  max-width: 250px;
  margin: 1rem auto;
  border-radius: 5px;
`;

const ButtonStyled = styled.button`
  font-size: 0.8rem;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #fff;
    color: #222;
  }
`;

const TextStyled = styled.p`
  color: #fff;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
`;

const Task = ({ color, texto, done, handleDone, handleDelete }) => {
  return (
    <DivStyled color={color}>
      <input type="checkbox" onChange={handleDone} defaultChecked={done} />
      <TextStyled done={done}>{texto}</TextStyled>
      <ButtonStyled onClick={handleDelete}>Delete</ButtonStyled>
    </DivStyled>
  );
};

export default Task;
