import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import { StyledSection, TextWrapper, Text, WorkTime, Address } from './styles';
import PropTypes from 'prop-types';

function About({ level }) {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={ TitleSize.BIG } title={ level }>Первое в России котокафе</Title>
        <Text>Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</Address>
      </TextWrapper>
    </StyledSection>
  );
}

About.propTypes = {
  level: PropTypes.string,
};

export default About;
