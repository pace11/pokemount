import React from 'react'
import Navigation from '../Navigation'
import { Container } from 'react-bootstrap'

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
