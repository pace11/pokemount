import React from 'react'
// import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Container, Row, CardColumns } from 'react-bootstrap'
import Card from '../../components/Card'

const POKEMONS = gql`
  query getAllPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      image
      name
      classification
      fleeRate
      resistant
      types
    }
  }
`

function Home() {
  const { loading, error, data } = useQuery(POKEMONS, {
    variables: {
      first: 50,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Container>
      <Row>
        <CardColumns>
          {data &&
            data.pokemons &&
            data.pokemons.map(item => (
              <Card
                key={item.id}
                imageUrl={item.image}
                title={item.name}
                number={item.number}
                classification={item.classification}
                fleeRate={item.fleeRate}
                resistant={item.resistant}
                types={item.types}
              />
            ))}
        </CardColumns>
      </Row>
    </Container>
  )
}

export default Home
