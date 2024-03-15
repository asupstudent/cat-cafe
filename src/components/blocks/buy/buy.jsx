import React from 'react';
import { Form, Label } from '/src/components/styled';
import Button from '/src/components/ui/button/button';
import { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, StyleTitle, FormItem, Price } from './styles';
import PropTypes from 'prop-types';

function Buy({ buyOptions }) {
  return (
    <StyledSection>
      <StyleTitle level={ 1 } size={ TitleSize.BIG }>Купить билет</StyleTitle>
      <Form $width={ 540 }>
        <FormItem>
          <Label $margin={ 12 }>Продолжительность (часов)</Label>
        </FormItem>
        <FormItem $bottom={ 22 }>
          <Label $margin={ 12 }>Тип билета</Label>
        </FormItem>
        <Label $small $margin={ 6 }>Цена</Label>
        <Price>500 руб.</Price>
        <Button minWidth={ 460 }>Купить билет</Button>
      </Form>
    </StyledSection>
  );
}

Buy.propTypes = {
  buyOptions: PropTypes.object
};

export default Buy;
