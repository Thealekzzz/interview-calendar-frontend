import React from 'react';

import addIcon from '../../images/add.svg';

import { Container, Title, AddButton } from './HeaderStyle';

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