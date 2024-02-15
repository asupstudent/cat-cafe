import React from 'react';
import Title, { TitleSize } from '../../ui/title/title';
import './style.css';

function StarCard() {
  return (
    <article className='star-card'>
      <figure className='star-card__figure'>
        <img src='/src/assets/sue.jpg' width={313} height={320} alt='Изображение кота'/>
      </figure>
      <Title size={TitleSize.SMALL}>Кошка Сью</Title>
    </article>
  );
}

export default StarCard;
