import React from 'react';
import Media from 'react-bootstrap/Media'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

  
const About = () => {
  return (
    
    <div>
                
                     <div>
                     <img src={require('../assets/img/i.jpg').default} width={1365} height={200}/>
                     <div>  <br /><br />   </div>
                     <Jumbotron fluid>
  <Container>
    <h3>Welcome to EtherBazaar,</h3>
    <p>
     Your number one source for all things [product, ie: shoes, bags, dog treats,gold,diamonds etc]. We're dedicated to giving you the very best of Products, with a focus on three characteristics, ie: dependability, customer service and uniqueness.
Founded in 2021 by Team-6, EtherBazaar has come a long way from its beginnings. When Team-6 first started out, our passion for connecting the seller and the buyer without the interference of the third party applications like banks for transactions drove us to do intense research, and gave us the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over place, and are thrilled to be a part of the fair trade wing of the cryptocurrency industry.
We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
<br/>
<br/>

Sincerely,<br/> 
EtherBazaar
    </p>
  </Container>
</Jumbotron>
      
     
    
          
                    </div>
                  
                
            </div>    
    
    
    
    );
};
  
export default About;