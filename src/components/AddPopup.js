import React from 'react';
import { styled } from 'styled-components';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000080;
  
  opacity: 1;
  visibility: visible;
  
  transition: 
    opacity .4s cubic-bezier(0.075, 0.82, 0.165, 1), 
    visibility .4s cubic-bezier(0.075, 0.82, 0.165, 1);

  ${(props) => !props.open ? `
    opacity: 0;
    visibility: hidden;
  ` : ''}
`;

const Popup = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 30px;

  max-width: 100%;
  width: 400px;
  min-height: 300px;

  margin: 20px;
  padding: 20px;

  border-radius: 10px;
  background-color: white;

  transform: translate(0);

  transition: transform .4s cubic-bezier(0.075, 0.82, 0.165, 1);
  
  ${(props) => !props.open ? `
    transform: translateY(10px);
  ` : ''}
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  font-size: 14px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  border-radius: 3px;
  border: 2px solid #aaa;
  
  outline: none;

  &:focus {
    border-color: #3355DD;
  }
`;

const Button = styled.button`
  background-color: #F13939dd;
  padding: 10px 20px;

  font-weight: bold;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: 1px;
  color: white;

  border: none;
  outline: none;

  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: #F13939ff;

  }

  &:disabled {
    background-color: #ddd;
    cursor: auto;
  }
`;

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