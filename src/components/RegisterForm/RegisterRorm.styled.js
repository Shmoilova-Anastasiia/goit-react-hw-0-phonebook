import styled from '@emotion/styled';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const RegisterFormStyled = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 100%;
  background: radial-gradient(
    circle,
    rgba(224, 232, 236, 1) 0%,
    rgba(192, 194, 195, 1) 100%
  );
  padding: 10px;
  justify-content: center;
  box-shadow: 0 5px 5px 0px #008000;
`;

export const RegisterFormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 36px;
  max-width: 100%;
`;

export const RegisterFieldFormik = styled(Field)`
  max-width: 100%;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
`;

export const RegisterStyledButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
width: 200px;
padding: 10px;
border-radius: 10px;
font-size: 20px;
margin-top: 20px;
margin-bottom:40px;
gap:10px;
box-shadow: 0 3px 3px 0px #808080;

&:hover {
  color: #008080;
    border-color: #008000;
    box-shadow: 0 5px 5px 0px #008000;
`;
export const ErrorMessage = styled(FormikError)`
  max-width: 500px;
  font-style: italic;
  color: #9e0202;
`;
