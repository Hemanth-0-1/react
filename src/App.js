import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className='main'>
      <Router>
        <Row>
          {/* Header */}
          <Col sm={2}>
            <Header />
          </Col>
          
          {/* Main Content Area */}
          <Col sm={10}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
