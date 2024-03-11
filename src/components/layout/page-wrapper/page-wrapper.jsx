import React from 'react';
import Header from '/src/components/layout/header/header';
import BuyPage from '/src/components/pages/buy-page/buy-page';
import Footer from '/src/components/layout/footer/footer';
import { Main } from './styles';

function PageWrapper(prop) {
  return (
    <>
      <Header />
      <Main>
        <BuyPage { ...prop }/>
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
