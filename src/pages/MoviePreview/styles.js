import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';

  main::-webkit-scrollbar {
    width: 6px;
  }
  
  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  > main {
    max-width: 1130px;
    margin: 40px auto 56px;
    padding: 0 16px;
    grid-area: content;
    overflow-y: scroll;

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin: 24px 0;

      h1{
        margin-right: 19px;
        font-weight: 400;
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;

      }

      svg:nth-child(5) {
        margin-right: 0px;
      }
    }

    > div:nth-child(3) {
      font-family: 'Roboto', sans-serif;
      display: flex;
      align-items: center;
      
      > img {
        width: 16px;
        border-radius: 50%;

        margin-right: 8px;
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin: 0 8px 0 16px;
      }
    }

    > div:nth-child(4) {
      margin: 40px 0;
    }

    > p {
      text-align: justify;
    }
  }
`