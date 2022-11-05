import React from 'react';
import Card from 'react-bootstrap/Card';

export default function BookDetails() {
  return (
    <Card text='white' bg='info' className='shadow' >
       <Card.Body>
        <Card.Title>Ky Nghe Lay Tay</Card.Title>
        <Card.Subtitle>Phong Su</Card.Subtitle>
          <p>Vu Trong Phung</p>
          <p>90</p>
          <p>All books by this author</p>
          <ul>
            <li>Ky nghe lay tay</li>
            <li>so do</li>
          </ul>
       </Card.Body>
    </Card>
  )
}
