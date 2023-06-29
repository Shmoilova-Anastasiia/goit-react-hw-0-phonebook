import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  border: 2rem solid rgba(108, 103, 108, 1);
  border-radius: 20px;
`;

export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  background: radial-gradient(
    circle,
    rgba(224, 232, 236, 1) 0%,
    rgba(192, 194, 195, 1) 100%
  );
  width: 100%;
`;
