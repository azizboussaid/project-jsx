import React from 'react'
import Name from './Name'
import Card from 'react-bootstrap/Card';
import Price from './Price';
import product from './product';
import Desc from './Desc';

const App = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <h4><Desc/></h4>
        </Card.Text>
        
      </Card.Body>
      <h1><Price/></h1>
    </Card>
    
    </div>
  )
}

export default App
