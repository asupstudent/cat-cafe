import React from 'react';
import Title, { TitleSize } from '/src/components/ui/title/title';
import StarIcon from '/src/components/ui/star-icon/star-icon';
import './style.css';
import PropTypes from 'prop-types';

function StarCard({
  name, //имя кота
  about, //информация о коте
  feature, //особенность (ласковый, новенький и. т. д) CatFeature
  image //путь к картинке
}) {
  return (
    <article className='star-card'>
      <figure className='star-card__figure'>
        <img className="star-card__image" src={`${ process.env.PUBLIC_URL }${ image }`} width={313} height={320} alt='Изображение кота.'/>
        <StarIcon className="star-card__icon" feature={ feature }/>
      </figure>
      <Title size={TitleSize.SMALL}>{ name }</Title>
      <p className="star-card__text" dangerouslySetInnerHTML={{ __html: about }} />
    </article>
  );
}

StarCard.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  feature: PropTypes.string,
  image: PropTypes.string,
};

export default StarCard;
