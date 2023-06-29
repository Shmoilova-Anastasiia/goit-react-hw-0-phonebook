import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Container, MainBlock } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <MainBlock>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainBlock>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
};
