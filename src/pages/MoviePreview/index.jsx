import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'

import { Container } from './styles'

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText title='Voltar' icon={FiArrowLeft} />

        <div>
          <h1>Interestellar</h1>
          <Stars rating={2} />
        </div>

        <div>
          <img src="https://github.com/davidapollo11.png" alt="" />
          Por David Apollo

          <FiClock /> 23/05/22 às 08:00
        </div>

        <div>
          <Tag title='Ficção Científica' />
          <Tag title='Drama' />
          <Tag title='Família' />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nesciunt aut accusantium sed, adipisci, provident nulla saepe voluptatem nemo mollitia voluptas? A cumque accusamus ea deleniti voluptas neque nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias cum ipsam voluptatibus, nostrum nulla doloribus amet modi nihil veniam totam a est mollitia nisi iusto voluptas, distinctio architecto! Obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </main>
    </Container>
  )
}