import { Container } from './styles'

export function Tag({ isHome, title, ...rest }) {
  return (
    <Container isHome={isHome} {...rest}>
      {title}
    </Container>
  )
}