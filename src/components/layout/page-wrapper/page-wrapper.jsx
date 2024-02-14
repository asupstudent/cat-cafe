import React from 'react';
import Header from '../header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../footer/footer';
import './style.css';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
