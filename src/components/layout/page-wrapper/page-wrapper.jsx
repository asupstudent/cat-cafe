import React from 'react';
import Header from '/src/components/layout/header/header';
import MainPage from '/src/components/pages/main-page/main-page';
import Footer from '/src/components/layout/footer/footer';
import { Main } from './styles';

function PageWrapper(prop) {
  return (
    <>
      <Header />
      <Main>
        <MainPage { ...prop }/>
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
