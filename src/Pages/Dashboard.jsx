import React from 'react';
import  Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Sidenavar from '../Components/Sidenavar';
import Header from '../Components/Header';
import Slicemobile from '../Slice/Slicemobile';
import Slicelaptop from '../Slice/Slicelaptop';
import Sliceear from '../Slice/Sliceear'; 
import Slicetv from '../Slice/Slicetv';
import Slicefr from '../Slice/Slicefr';

function Dashboard() {
  return (
   
    <div className='Dashboard'>
      <Row>
      <Col sm={2}>
    <Sidenavar/>
      </Col>
      <Col sm={10}>
      <Header/>
      <Slicemobile/>
      <Slicelaptop/>
      <Sliceear/>
      <Slicefr/>
      <Slicetv/>
      </Col>
      </Row>
      </div>
      
  )
}

export default Dashboard