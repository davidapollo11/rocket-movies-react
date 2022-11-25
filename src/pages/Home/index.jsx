import { FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Movie } from '../../components/Movie'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <div className='title'>
        <h1>Meus filmes</h1>
        <Button title='Adicionar filme' icon={FiPlus} />
      </div>

      <main>
        <Movie data={{
          title: 'Interestellar',
          rating: 4,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nesciunt aut accusantium sed, adipisci, provident nulla saepe voluptatem nemo mollitia voluptas? A cumque accusamus ea deleniti voluptas neque nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias cum ipsam voluptatibus, nostrum nulla doloribus amet modi nihil veniam totam a est mollitia nisi iusto voluptas, distinctio architecto! Obcaecati.',
          tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />
        <Movie data={{
          title: 'Interestellar',
          rating: 4,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nesciunt aut accusantium sed, adipisci, provident nulla saepe voluptatem nemo mollitia voluptas? A cumque accusamus ea deleniti voluptas neque nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias cum ipsam voluptatibus, nostrum nulla doloribus amet modi nihil veniam totam a est mollitia nisi iusto voluptas, distinctio architecto! Obcaecati.',
          tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />
        <Movie data={{
          title: 'Interestellar',
          rating: 4,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nesciunt aut accusantium sed, adipisci, provident nulla saepe voluptatem nemo mollitia voluptas? A cumque accusamus ea deleniti voluptas neque nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias cum ipsam voluptatibus, nostrum nulla doloribus amet modi nihil veniam totam a est mollitia nisi iusto voluptas, distinctio architecto! Obcaecati.',
          tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />
        <Movie data={{
          title: 'Interestellar',
          rating: 4,
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore officia nemo quam debitis facere sed eligendi nihil adipisci amet eum beatae vitae, deserunt voluptatum iste, alias sunt voluptate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quisquam nesciunt aut accusantium sed, adipisci, provident nulla saepe voluptatem nemo mollitia voluptas? A cumque accusamus ea deleniti voluptas neque nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum alias cum ipsam voluptatibus, nostrum nulla doloribus amet modi nihil veniam totam a est mollitia nisi iusto voluptas, distinctio architecto! Obcaecati.',
          tags: [
            { id: '1', name: 'Ficção Científica' },
            { id: '2', name: 'Drama' },
            { id: '3', name: 'Família' }
          ]
        }} />
      </main>
    </Container>
  )
}