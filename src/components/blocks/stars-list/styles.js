import styled from 'styled-components';
import { Section, Li, Ul } from '/src/components/styled';
import starsBackground from '/src/assets/stars-background.svg';
import startLeft from '/src/assets/stars-left.svg';
import startRight from '/src/assets/stars-right.svg';

export const StyledStarsSection = styled(Section)`
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${starsBackground});
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${startLeft});
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${startRight});
  }
`;

export const StyledStarsList = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;

export const StyledStarsItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
