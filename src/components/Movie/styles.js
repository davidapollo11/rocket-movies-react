import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 15px;

  border-radius: 16px;

  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.PINK_100};

  > p {
    width: 100%;

    font-family: 'Roboto', serif;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`