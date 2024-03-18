import React from 'react';
import styled from 'styled-components';
import { VisuallyHiddenInput } from '/src/components/styled';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: block;
`;

function RadioButton({
  labelComponent, // компонент для отображения label
  selectValue, // выбранное значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="radio"
      />
      <LabelComponent $isChecked={isChecked}>{ text }</LabelComponent>
    </Label>
  );
}

RadioButton.propTypes = {
  labelComponent: PropTypes.any,
  selectValue: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.number,
  text: PropTypes.number,
  onChange: PropTypes.func
};

export default RadioButton;
