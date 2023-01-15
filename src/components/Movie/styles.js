import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;

  border-radius: 16px;
  border: none  ;

  padding: 32px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  > p {
    width: 100%;

    display: flex;

    font-family: 'Roboto', serif;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`