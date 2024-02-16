import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import './style.css';

function StarCard() {
  return (
    <article className='star-card'>
      <figure className='star-card__figure'>
        <img className="star-card__image" src={`${ process.env.PUBLIC_URL }/images/content/stars/sue.jpg`} width={313} height={320} alt='Изображение кота'/>
        <span className="star-card__icon">Ласковый</span>
      </figure>
      <Title size={TitleSize.SMALL}>Кошка Сью</Title>
      <p className="star-card__text">Эта юная красавица очень общительная и ласковая уже с первого дня, как приехала в кафе</p>
    </article>
  );
}

export default StarCard;
