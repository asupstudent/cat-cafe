import React from 'react';
import Header from '/src/components/layout/header/header';
import MainPage from '/src/components/pages/main-page/main-page';
import Footer from '/src/components/layout/footer/footer';
import './styles.css';

function PageWrapper(prop) {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage { ...prop }/>
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
