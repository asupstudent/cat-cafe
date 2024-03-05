import React from 'react';
import Title from '/src/components/ui/title/title';
import StarCard from '/src/components/ui/star-card/star-card';
import Button from '/src/components/ui/button/button';
import PropTypes from 'prop-types';
import { StyledStarsSection, StyledStarsList, StyledStarsItem } from './styles';

function StarsList({ stars, level }) {
  return (
    <StyledStarsSection>
      { stars?.length ? (
        <>
          <Title level={ level }>Наши звезды</Title>
          <StyledStarsList $isGridList>
            {stars.map((star) => (
              <StyledStarsItem key={ star.id }>
                <StarCard { ...star }/>
              </StyledStarsItem>
            ))}
          </StyledStarsList>
          <Button minWidth={ 353 } link="/buy">Купить билет</Button>
        </>
      ) : null }
    </StyledStarsSection>
  );
}

StarsList.propTypes = {
  stars: PropTypes.array,
  level: PropTypes.string,
};

export default StarsList;
