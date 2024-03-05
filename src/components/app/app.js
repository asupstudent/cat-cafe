import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import starList from '/src/mocks/star-list';
import { GlobalStyle } from './styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={ starList }/>
    </>
  );
}
