import React from 'react'
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

/**
 *
 * @param {Boolean} props.loading
 */
function RenderLoading({ loading }) {
  return (
    <React.Fragment>
      {loading && (
        <Row>
          <Col>
            <StyledLoading />
          </Col>
        </Row>
      )}
    </React.Fragment>
  )
}

/**
 *
 * @param {Boolean} props.error
 */
function RenderError({ error }) {
  return (
    <React.Fragment>
      {error && (
        <Row>
          <Col>
            <StyledError />
          </Col>
        </Row>
      )}
    </React.Fragment>
  )
}

/**
 *
 * @param {Array <any>} props.item
 */
function RenderItem({ item }) {
  return (
    <Row>
      <CardColumns>
        {item &&
          item.pokemons &&
          item.pokemons.map(items => (
            <Card
              key={items.id}
              id={items.id}
              imageUrl={items.image}
              name={items.name}
              number={items.number}
              classification={items.classification}
              fleeRate={items.fleeRate}
              resistant={items.resistant}
              types={items.types}
            />
          ))}
      </CardColumns>
    </Row>
  )
}

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
        <RenderLoading loading={loading} />
        <RenderError error={error} />
        <RenderItem item={data} />
      </Container>
    </Layout>
  )
}

export default Home
