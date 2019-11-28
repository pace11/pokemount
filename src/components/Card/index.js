import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Badge, Accordion, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronCircleRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

function StyledCard({
  id,
  imageUrl,
  name,
  number,
  classification,
  fleeRate,
  resistant,
  types,
}) {
  return (
    <Card style={{ boxShadow: '2px 3px 10px -8px #000000' }}>
      <Card.Img variant="top" src={imageUrl} alt={imageUrl} />
      <Card.Body>
        <Badge pill variant="success">
          <FontAwesomeIcon icon={faChevronCircleRight} /> {number}
        </Badge>
        <Card.Title>
        <h3>{name}</h3>
        </Card.Title>
        <Card.Subtitle>
          {classification}{' '}
          <Badge
            pill
            variant="primary"
            style={{ marginBottom: '5px' }}
          >
            <FontAwesomeIcon icon={faStar} /> {fleeRate}
          </Badge>
        </Card.Subtitle>
        <Card.Text>
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                >
                  Show item more ...
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Card.Text>
                    resistant :
                    {resistant.map(item => (
                      <Badge
                        style={{ marginLeft: '3px' }}
                        pill
                        variant="danger"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Card.Text>
                  <Card.Text>
                    types :
                    {types.map(item => (
                      <Badge
                        style={{ marginLeft: '3px' }}
                        pill
                        variant="info"
                      >
                        {item}
                      </Badge>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={`/detail/${id}/${name}`}>
          <Button variant="primary" block>
            Detail
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default StyledCard
