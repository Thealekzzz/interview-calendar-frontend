import React from 'react';
import { styled } from 'styled-components';

import addIcon from '../images/add.svg';
import { baseTheme } from '../theme';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-bottom: 1px solid #eaeaea;

  min-height: 100px;
  padding: 0 30px;
`;

const Title = styled.h1`
  letter-spacing: -1px;
  font-weight: 200;

  @media ${baseTheme.media.small} {
    font-size: 24px;
  }
`;

const AddButton = styled.button`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 50px;
  border: none;

  cursor: pointer;
  transition: background-color .2s;

  &:hover{
    background-color: #f1f1f1;
  }

`;

const Header = ({ setIsAddPopupOpen }) => {
  function handleAddButtonClick() {
    setIsAddPopupOpen(true);
  }

  return (
    <Container>
      <Title>Interview Calendar</Title>
      <AddButton onClick={handleAddButtonClick}>
        <img src={addIcon} alt="" />
      </AddButton>
    </Container>
  );
};

export default Header;