import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 10px;
  padding: 19px 24px;

  > input {
    width: 100%;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
  }
  
  > svg {
    margin-right: 12px;
  }
`