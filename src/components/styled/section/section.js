import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  box-sizing: border-box;
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Section;
