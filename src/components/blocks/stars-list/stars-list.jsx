import React from 'react';
import Title from '/src/components/ui/title/title';
import StarCard from '/src/components/ui/star-card/star-card';
import Button from '/src/components/ui/button/button';
import './styles.css';
import PropTypes from 'prop-types';

function StarsList({ stars, level }) {
  return (
    <section className="star-list">
      { stars?.length ? (
        <>
          <Title level={ level }>Наши звезды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li className="star-list__item" key={ star.id }>
                <StarCard { ...star }/>
              </li>
            ))}
          </ul>
          <Button minWidth={ 353 } link="/buy">Купить билет</Button>
        </>
      ) : null }
    </section>
  );
}

StarsList.propTypes = {
  stars: PropTypes.array,
  level: PropTypes.string,
};

export default StarsList;
