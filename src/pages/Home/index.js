import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Container, Row, CardColumns, Col } from 'react-bootstrap'
import Card from '../../components/Card'
import StyledError from '../../components/Error'
import Layout from '../../components/Layout'
import StyledLoading from '../../assets/icons/Loading'

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

  return (
    <Layout>
      <Container style={{ marginTop: '60px' }}>
      <h3>List All Pokemons</h3>
        {loading && (
          <Row>
            <Col>
              <StyledLoading />
            </Col>
          </Row>
        )}
        {error && (
          <Row>
            <Col>
              <StyledError />
            </Col>
          </Row>
        )}
        <Row>
          <CardColumns>
            {data &&
              data.pokemons &&
              data.pokemons.map(item => (
                <Link
                  key={item.id}
                  to={`/detail/${item.id}/${item.name}`}
                >
                  <Card
                    imageUrl={item.image}
                    title={item.name}
                    number={item.number}
                    classification={item.classification}
                    fleeRate={item.fleeRate}
                    resistant={item.resistant}
                    types={item.types}
                  />
                </Link>
              ))}
          </CardColumns>
        </Row>
      </Container>
    </Layout>
  )
}

export default Home
