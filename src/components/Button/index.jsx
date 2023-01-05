import { Container } from './styles'

export function Button({ icon: Icon, title, isDelete, ...rest }) {
  return (
    <Container type='button' isDelete={isDelete} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}