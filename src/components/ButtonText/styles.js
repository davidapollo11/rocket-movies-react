import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  border: none;

  background: none;
  color: ${({ theme }) => theme.COLORS.PINK}
`