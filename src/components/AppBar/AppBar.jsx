import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelector';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderStyled position="static">
      <Navigation />
      <div style={{ margin: '0 auto' }}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </HeaderStyled>
  );
};
