import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPastafarianism } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
  return (
    <React.Fragment>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <FontAwesomeIcon icon={faPastafarianism} /> Pokemount -
            Apps Pokemon List
          </Navbar.Brand>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}
