import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 42px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white}
  
  /* ${props => {
    return css`
      background-color: ${buttonVariant[props.variant]}
    `
  }} */
`