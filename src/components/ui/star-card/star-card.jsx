import React from 'react';
import Title, { TitleSize, TitleLevel } from '/src/components/ui/title/title';
import { StyledStarCard, StyledStarIcon, Figure, Image, Text } from './styles';
import PropTypes from 'prop-types';

function StarCard({
  name, //имя кота
  about, //информация о коте
  feature, //особенность (ласковый, новенький и. т. д) CatFeature
  image //путь к картинке
}) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={`${ process.env.PUBLIC_URL }${ image }`} width={ 313 } height={ 320 } alt='Изображение кота.'/>
        <StyledStarIcon feature={ feature }/>
      </Figure>
      <Title size={ TitleSize.SMALL } level={ TitleLevel.H3 }>{ name }</Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
}

StarCard.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  feature: PropTypes.string,
  image: PropTypes.string,
};

export default StarCard;
