import { Container,Row,Col } from 'react-bootstrap'

//pages
import HomeIllust from './HomeIllust.jpg'
import stepOne from './stepOne.png'
import stepTwo from './stepTwo.png'
import stepThree from './stepThree.png'
//components
import Scan from '../components/Scan'


function Home() {
  return (
    <div>
     <Container>
      <Row>
       <div className="d-md-flex">
       <Col >
       <h1>Welcome To <strong className="text-danger">Swiver Scan</strong> !</h1>
       <p> Scan QR Codes from your bills to quickly extract essential informations.</p>
       <div>
        <br></br>
       <h5 className='mt-4 pb-2'>Just follow these 3 simple steps:</h5>
      <p>Click on the "Scan" button below.</p>
      <img className='icon-small pb-2' src={stepOne} alt='step one' />
      <p>Use your device camera to scan the QR code.</p>
      <img className='icon-small pb-2' src={stepTwo} alt='step two' />
      <p>Save the extracted information for your reference.</p>  
      <img className='icon-small pb-2' src={stepThree} alt='step three' />
       </div>
       </Col>
       <Col className='py-1'>
       <img className='img-fluid custom-img' src={HomeIllust} alt="home-qrcode" />
       </Col>
       </div>
      </Row>
     </Container>
     <Container className='scan-section my-5'>
      <Scan />
     </Container>
    </div>
  )
}

export default Home
