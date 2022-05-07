import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/jumbotron';
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'
  
const Contactus = () => {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'Right',
    //     alignItems: 'Right',
    //     height: '100vh'
    //   }}
    // >
     
    // </div>
    // <div>
    //   <form >
    //   <img src={require('../assets/img/c.jpg').default} width={1365} height={200}/>
    //   <div className="top">
    //     <label className="labelWidth">Name</label>
    //     <input type="text"></input>
    //   </div>
    //   <br></br>
    //   <div>
    //     <label className="labelWidth">Email</label>
    //     <input type="text"></input>
    //   </div>
    //   <br></br>
    //   <div>
    //     <label className="labelWidth">Contact no</label>
    //     <input type="text"></input>
    //   </div>
    //   <br></br>
    //   <div>
    //     <label className="labelWidth">Message</label>
    //     <input type="text"></input>
    //   </div>
    //   <br></br>
    //   <div>
    //     {/* <button>submit</button> */}
    //     <input type="submit" value="Sbmit" className="button"></input>
    //   </div>
    //   </form>      

    // </div>

    <div>
                     <img src={require('../assets/img/c.jpg').default} width={1365} height={200}/>
                     <div>  <br />  </div>
                     <CardGroup>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://img.etimg.com/thumb/msid-61131171,width-640,resizemode-4,imgsize-30471/easy-to-use.jpg" />
    <Card.Body>
      <Card.Title>Location</Card.Title>
      <Card.Text>
        H.No:49-266<br/>
        Mihtani<br/>
        Hyderabad
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>Contact</Card.Title>
      <Card.Text>
        040-23080578<br/>
        +91 7095839902
        {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    <Card.Img variant="top" src="data:image/png;base64,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" />
    <br/><br/><br/>
    <Card.Body>
      <Card.Title>Email Address</Card.Title>
      <Card.Text>
       
        etherbazaar@gmail.com
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card border="dark" style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>Message</Card.Title>
      <Card.Text>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Name</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>
<div>  <br />  </div>
                     <Jumbotron fluid>
  <Container>
   
</Container>
</Jumbotron>
</div>
  );
};
  
export default Contactus;