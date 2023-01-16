import { Stars } from '../Stars'
import { Tag } from '../Tag'

import { Container } from './styles'

export function Movie({ data, ...rest }) {
  const element = String(data.description)
  const LIMIT = 275
  const aboveLimit = element.length > LIMIT
  const dotsOrEmpty = aboveLimit ? '...' : ''

  const textTrated = element.substring(0, LIMIT) + dotsOrEmpty

  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars rating={data.rating} />
      <p>{textTrated}</p>

      {
        data.tags && <footer>
          {
            data.tags.map(tag => <Tag isHome key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  )
}