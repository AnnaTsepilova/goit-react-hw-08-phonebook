import styled from 'styled-components';

export const PhonePageWrapper = styled.div`
  min-height: 100vh;
  min-width: 320px;
  width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const MainContainer = styled.main`
  display: flex;
`;

export const PhonebookContainer = styled.main`
  min-height: 100vh;
  width: 100%;
`;
