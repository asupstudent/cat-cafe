import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import './style.css';
import '/src/fonts/inter-v13-cyrillic_latin-regular.woff2';
import '/src/fonts/inter-v13-cyrillic_latin-700.woff2';
import starList from '/src/mocks/star-list';

export default function App() {
  return <PageWrapper stars={ starList }/>;
}
