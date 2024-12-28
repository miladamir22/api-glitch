import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';  
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlbumIcon from '@mui/icons-material/Album';
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Lent</Nav.Link>
            <Nav.Link href="#about">Tapşırıqlar</Nav.Link>
            <Nav.Link href="#contact">İstifadəçilər</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="ml-auto">
          <Nav.Link href="#home">
            <AlbumIcon /> 
          </Nav.Link>
          <Nav.Link href="#tasks">
            <PhotoCameraFrontIcon /> 
          </Nav.Link>
          <Nav.Link href="#users">
            <CalendarMonthIcon /> 
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
