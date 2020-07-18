import React from "react";
import styled from "styled-components";
import allColors from "../styles/colors";
import ColorBox from "./ColorBox";
import { generate as id } from "shortid";

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 1px solid ${allColors.mainColor};
  border-radius: 5px;
  color: ${allColors.mainColor};
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${allColors.mainColor};
    color: #222;
  }
`;

const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid ${allColors.mainColor};
  background: none;
  outline: none;
  color: ${allColors.mainColor};
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 0 auto 0.5rem;
`;

const FormTask = ({ handleAddTask, handleColorSelected, colorSelected }) => {
  return (
    <form onSubmit={handleAddTask}>
      <InputStyled type="text" name="inputText" />
      <ColorsContainer>
        {allColors.colors.map((color) => (
          <ColorBox
            color={color}
            handleColorSelected={handleColorSelected}
            key={id()}
            isChecked={colorSelected === color}
          />
        ))}
      </ColorsContainer>
      <ButtonStyled>Add Task</ButtonStyled>
    </form>
  );
};

export default FormTask;
