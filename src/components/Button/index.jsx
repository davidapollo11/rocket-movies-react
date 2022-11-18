import { Container } from './styles'

export function Button({ title, isDelete }) {
  return (
    <Container isDelete={isDelete}>
      {title}
    </Container>
  )
}