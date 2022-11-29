import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 116px 132px auto;
  grid-template-areas: 'header' 'title' 'summaries';

  > .title {
    margin: 0 auto;
    align-items: center;

    grid-area: title;
    
    
    width: 1130px;
    display: flex;
    justify-content: space-between;

    button {
      width: 207px;
      height: 48px;
    }
  }

  main::-webkit-scrollbar {
    width: 6px;
  }
  
  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 20px;
  }

  > main {
    width: 1130px;
    margin: 0 auto 56px;

    display: flex;
    flex-direction: column;
    gap: 24px;
    
    grid-area: summaries;
    overflow-y: scroll;

    padding-right:16px;
  }
  
`