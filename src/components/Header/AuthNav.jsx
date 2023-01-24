import { useLocation } from 'react-router-dom';
import {
  HeaderNavBtn,
  HeaderBtnWrapper,
} from 'components/Header/Header.styled';

export default function AuthNav() {
  const location = useLocation();
  return (
    <HeaderBtnWrapper>
      <HeaderNavBtn to={`register`} state={location.state}>
        Sign Up
      </HeaderNavBtn>
      <HeaderNavBtn to={`login`} state={location.state}>
        Log In
      </HeaderNavBtn>
    </HeaderBtnWrapper>
  );
}
