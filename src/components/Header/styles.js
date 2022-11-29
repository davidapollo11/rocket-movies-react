import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  display: flex;
  gap: 64px;
  align-items: center;
  justify-content: space-between;
  padding: 24px 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > h1 {
    font-size: 24px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  justify-content: center;


  img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    strong {
      font-size: 14px;
      font-weight: 700;

      white-space: nowrap;
    }

    button {
      font-size: 14px;
      font-weight: 400;
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

    }
  }

`