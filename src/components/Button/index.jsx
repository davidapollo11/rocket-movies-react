import { Container } from './styles'

export function Button({ icon: Icon, title, isDelete }) {
  return (
    <Container isDelete={isDelete}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}