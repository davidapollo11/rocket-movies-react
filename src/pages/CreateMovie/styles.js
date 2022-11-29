import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 'header' 'content';

  > main {
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 20px;
    }

    overflow-y: scroll;
    grid-area: content;
    width: 1130px;
    margin: 40px auto 56px;
    padding: 0 16px;

    button:nth-child(1) {
      align-self: flex-start;
      margin-bottom: 24px;
    }

    > h1 {
      margin-bottom: 40px;
    }

    > div:nth-child(3) {
      display: flex;
      gap: 40px;
      margin-bottom: 40px;
    }

    .bookmarks {
      display: flex;
      gap: 24px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      padding: 16px;
      border-radius: 10px;

      margin-bottom: 40px;
    }

    > div:nth-child(6) {
      display: flex;
      gap: 40px;
    }
  };
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 274px;

  margin-bottom: 40px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  padding: 19px 24px;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`