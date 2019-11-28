import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons'
import StyledError from '../../components/Error'
import StyledLoading from '../../assets/icons/Loading'

const POKEMON = gql`
  query getDetailPokemon($id: String!, $name: String!) {
    pokemon(id: $id, name: $name) {
      number
      name
      image
      fleeRate
      classification
      resistant
      types
      weaknesses
    }
  }
`

function RenderNamePokemon({ item }) {
  return (
    <React.Fragment>
      {item && item.pokemon && (
        <h3>Detail Pokemon {item.pokemon.name}</h3>
      )}
    </React.Fragment>
  )
}

function RenderItemPokemon({ item }) {
  return (
    <React.Fragment>
      {item && item.pokemon && (
        <Row>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Resistant</th>
                <th>Types</th>
                <th>Weaknesses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Badge pill variant="success">
                    <FontAwesomeIcon icon={faChevronCircleRight} />{' '}
                    {item.pokemon.number}
                  </Badge>
                  <img
                    src={item.pokemon.image}
                    alt={item.pokemon.image}
                  />
                </td>
                <td>
                  {item.pokemon.name}{' '}
                  <Badge pill variant="success">
                    <FontAwesomeIcon icon={faStar} />{' '}
                    {item.pokemon.fleeRate}
                  </Badge>
                  <p>{item.pokemon.classification}</p>
                </td>
                <td>
                  <React.Fragment>
                    {item.pokemon.resistant.map(item => (
                      <Badge
                        pill
                        variant="danger"
                        style={{ marginRight: '5px' }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </React.Fragment>
                </td>
                <td>
                  <React.Fragment>
                    {item.pokemon.types.map(item => (
                      <Badge
                        pill
                        variant="info"
                        style={{ marginRight: '5px' }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </React.Fragment>
                </td>
                <td>
                  <React.Fragment>
                    {item.pokemon.weaknesses.map(item => (
                      <Badge
                        pill
                        variant="warning"
                        style={{ marginRight: '5px' }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </React.Fragment>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      )}
    </React.Fragment>
  )
}

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

function Detail() {
  const { id, name } = useParams()
  const { loading, error, data } = useQuery(POKEMON, {
    variables: {
      id,
      name,
    },
  })

  return (
    <Layout>
      <Container style={{ marginTop: '60px' }}>
        <RenderNamePokemon item={data} />
        <RenderLoading loading={loading} />
        <RenderError error={error} />
        <RenderItemPokemon item={data} />
      </Container>
    </Layout>
  )
}

export default Detail
