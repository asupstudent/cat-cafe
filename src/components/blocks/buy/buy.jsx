import React, { useState } from 'react';
import { Form, Label, Li, Ul } from '/src/components/styled';
import Button from '/src/components/ui/button/button';
import { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, StyleTitle, FormItem, Price, RadioLabelForTime, } from './styles';
import RadioButton from '/src/components/ui/radio-button/radio-button';
import PropTypes from 'prop-types';

function Buy({ buyOptions }) {
  const { durationOptions } = buyOptions;
  const [duration, setDuration] = useState(durationOptions[0]);
  return (
    <StyledSection>
      <StyleTitle level={ 1 } size={ TitleSize.BIG }>Купить билет</StyleTitle>
      <Form $width={ 540 }>
        <FormItem>
          <Label $margin={ 12 }>Продолжительность (часов)</Label>
          <Ul $isGridList $indent={ 12 } $align="left">
            {durationOptions.map((option) => (
              <Li key={ option }>
                <RadioButton
                  labelComponent={RadioLabelForTime}
                  selectValue={ duration }
                  value={ option }
                  text={ option }
                  onChange={(el) => {
                    setDuration(Number(el.target.value));
                  }}
                />
              </Li>
            ))}
          </Ul>
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
