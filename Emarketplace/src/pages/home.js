import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


  
const Home = () => {
  return (
    <div style={{  width: 1350, padding: 30 }}>
    <Carousel>
    <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
src="https://miro.medium.com/max/3300/1*Cp0MlLn0R8UUU4lYUM5inw.jpeg"
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>Blockchain</h3>
          <p>DApp</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
src="https://images.theconversation.com/files/121656/original/image-20160509-23367-kxbc3k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip"
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>Blockchain</h3>
          <p>DApp</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
src="https://cedcommerce.com/blog/wp-content/uploads/2018/12/Must-Have-Features-For-Your-Ecommerce-Website-732x244.png"
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Two</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  </div>

     


  );
};
  
export default Home;