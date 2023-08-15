import { useState } from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import QrReader from 'react-qr-scanner';

//components
import Result from './Result';



export default function Scan() {
  const [camera, setCamera] = useState('');
  const [delay, setDelay] = useState(100);
  const [data, setData] = useState({
    text: "some scanned text",
    id: " "
  });
  const [scan, setScan] = useState('dont scan');
  const previewStyle = {
    height: 240,
    width: 320,
  };

  function handleAppearScan() {
    if (scan === 'dont scan') {
      setScan('scan');
    } else {
      setScan('dont scan');
    }
  }

  function handleCamera(event) {
    setCamera(event.target.value);
  }

  function handleScan(data) {
    //console.log('Scanned data:', data); 
    if (data && data.text) {
      setData(data.text);
    }
    /* else {
      console.log('Invalid data format:', data);
    }*/
  } 

  function handleError(err) {
    console.log(err);
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <Card>
              <Button onClick={handleAppearScan}>
                <i className='bi bi-qr-code-scan'></i> Scan
              </Button>
              {scan === 'scan' && (
                <Card.Body>
                  <label>
                    Select Camera
                    <select className="form-select my-3" value={camera} onChange={handleCamera}>
                      <option value="front">Front Camera</option>
                      <option value="rear">Rear Camera</option>
                    </select>
                  </label>
                  <QrReader
                    delay={delay}
                    style={previewStyle}
                    onError={handleError}
                    onScan={handleScan}
                    facingMode={camera}
                  />
                </Card.Body>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col lg={6} md={8}>
            {data.text !== "some scanned text" && (
              <Card>
                <Card.Body>
                  <h6>Results: <a href={data}>scanned</a></h6>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
