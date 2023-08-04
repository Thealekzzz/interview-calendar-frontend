import React from 'react';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import { Wrapper, Popup, Inputs, InputGroup, Input, Button } from './AddPopupStyle';

const AddPopup = ({ isOpen, setIsOpen, onSubmit }) => {
  const { values, handleChange, handleBlur, isValid } = useFormAndValidation();

  function handleWrapperClick() {
    setIsOpen(false);
  }

  function handlePopupClick(evt) {
    evt.stopPropagation();
  }

  function handleTimeChange(evt) {
    evt.target.value = `${evt.target.value.split(':')[0]}:00`;
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    
    onSubmit(values);
    setIsOpen(false);
  }

  return (
    <Wrapper open={isOpen} onClick={handleWrapperClick}>
      <Popup as={'form'} open={isOpen} onClick={handlePopupClick} onSubmit={handleSubmit}>
        <h2>Add task</h2>
        <Inputs>
          <InputGroup>
            <p>Date</p>
            <Input type='date' name='date' required onInput={handleChange} onBlur={handleBlur}/>
          </InputGroup>
          
          <InputGroup>
            <p>Time</p>
            <Input type='time' name='time' required step="3600" onInput={handleTimeChange} onBlur={handleBlur}/>
          </InputGroup>

          <InputGroup>
            <p>Name</p>
            <Input type='text' name='name' required onInput={handleChange} onBlur={handleBlur}/>
          </InputGroup>

        </Inputs>

        <Button disabled={!isValid}>Create</Button>
      </Popup>
    </Wrapper>
  );
};


export default AddPopup;