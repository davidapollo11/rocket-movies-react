import styled from 'styled-components'

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, isHome }) => isHome ? theme.COLORS.BACKGROUND_700 : theme.COLORS.PINK_100};

  padding: 8px 16px;

  border-radius: 8px;

  margin-right: 8px;
`