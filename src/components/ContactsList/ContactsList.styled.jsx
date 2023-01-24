import styled from 'styled-components';

export const ContactsListContainer = styled.ul`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 30px;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 60px;

  list-style: none;
`;

export const Text = styled.p`
  width: 400px;
  margin-right: auto;
  margin-left: auto;

  font-size: 20px;
`;
