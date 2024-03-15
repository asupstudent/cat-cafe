import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import gallery from '/src/mocks/gallery';
import buyOptions from '/src/mocks/buy-options';
import { GlobalStyle } from './styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper slides={ gallery } buyOptions={ buyOptions }/>
    </>
  );
}
