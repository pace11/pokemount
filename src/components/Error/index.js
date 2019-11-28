import React from 'react'
import { Alert } from 'react-bootstrap'

export default function StyledError() {
  return (
    <Alert variant="danger">
      Ouh..!! Sorry. Failed get data. Please check your connecivity
    </Alert>
  )
}
