import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavigationStyled to="/">Home</NavigationStyled>
      {isLoggedIn && (
        <NavigationStyled to="/phonebook">Phonebook</NavigationStyled>
      )}
    </nav>
  );
};
