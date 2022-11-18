import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  background: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'};

  border-radius: 10px;
  padding: 0 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    width: 100%;
    height: 56px;

    padding: 16px 0;
    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`