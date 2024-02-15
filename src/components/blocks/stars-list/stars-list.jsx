import React from 'react';
import Title from '/src/components/ui/title/title';
import StarCard from '/src/components/ui/star-card/star-card';
import Button from '/src/components/ui/button/button';
import './style.css';

function StarsList() {
  return (
    <section className="star-list">
      <Title>Наши звезды</Title>
      <ul className="star-list__list">
        <li className="star-list__item">
          <StarCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;
