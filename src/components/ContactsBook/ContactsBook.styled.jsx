import styled from 'styled-components';

export const ContactsBookWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
`;

export const SubTitle = styled.h2`
  padding: 32px 20px;
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;
