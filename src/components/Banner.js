import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../Banner1.jpg'
import banner2 from '../Banner2.jpg'
import banner3 from '../Banner3.jpg'

    const carousels  = [
{
    "id": 1,
    "image": banner1,
    "title": "FASHION COLLECTION 2026",
    "description": "Discover the latest fashion trends for 2026"
},
{
    "id": 2,
    "image": banner2,
    "title": "SUMMER SALE UP TO 50 %",
    "description": "Enjoy special discount must be enabled"
},
{
    "id": 3,
    "image": banner3,
    "title": "NEW ARRIVALS",
    "description": "Explore our newest clothing collection"
}
]




function Banner (){

    return(
          <>
     <Carousel>
       {carousels.map((item) => (
        <Carousel.Item key={item.id}>
            <img src={item.image} 
            alt={item.title}  
            className="d-block w-100" 
             style={{
              width: '100%',
              height: '600px',
             
              display: 'block',
              margin: 'auto'
            }}
            />
            <Carousel.Caption>

            
          <p>{item.title}</p>
          <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
       ))}
      
       
    </Carousel>
    </>
    )
}export default Banner