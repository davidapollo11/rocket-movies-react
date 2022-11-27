import styled from 'styled-components'
import backgroundImg from '../../assets/something-magical-SdjA-_Xzuxg-unsplash.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    font-weight: 500;

    margin: 48px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 24px;
  }

  > a {
    margin-top: 42px;
    text-align: center;

    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`