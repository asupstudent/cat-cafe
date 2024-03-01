import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import './styles.css';
import PropTypes from 'prop-types';

function About({ level }) {
  return (
    <section className='about'>
      <div className='about__wrapper'>
        <Title size={ TitleSize.BIG } title={ level }>Первое в России котокафе</Title>
        <p className='about__text'>Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый из них ищет новый дом. Животных можно гладить, фотографировать, играть с ними.</p>
        <p className='about__work-time'>Рабочее время с 8:00 до 23:00</p>
        <p className='about__address'>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</p>
      </div>
    </section>
  );
}

About.propTypes = {
  level: PropTypes.string,
};

export default About;
