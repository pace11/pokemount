import React from 'react'
import Navigation from '../Navigation'
import { Container } from 'react-bootstrap'

/**
 *
 * @param {React.Node} props.children
 */
const LayoutBody = ({ children }) => {
  return <main>{children}</main>
}

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navigation />
      <LayoutBody>
        <Container>{children}</Container>
      </LayoutBody>
    </React.Fragment>
  )
}
