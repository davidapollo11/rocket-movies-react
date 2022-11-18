import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  border: none;
  background-color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK};
  color: ${({ theme, isDelete }) => isDelete ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_700};

  border-radius: 10px;


  font-size: 16px;
  font-weight: 500;

  padding: 17px 0;
`