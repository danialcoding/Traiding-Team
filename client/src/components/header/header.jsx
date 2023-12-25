//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as React from "react";

import { FiMenu } from 'react-icons/fi';

import { MainMenuItems } from './mainmenuitems';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './header.css'



const MainMenu = () => {

    return (
            <>
            {['lg'].map((expand) => (
              <Navbar key={expand} bg="light" expand={expand} className="main-menu">
                <Container className='menu-container' fluid>
                  <h4 className='navbrand' href="#">Traiding Team</h4>
                  <Navbar.Toggle children={<div className='toggle-btn'><FiMenu/></div>} className='nav-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas className='nav-box bg-dark text-white' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Traiding Team</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="nav-div justify-content-start flex-grow-1 pe-3 align-center">

                        {
                          MainMenuItems.map((item,index) => {
                            if(item.haveChilds) {
                              return(
                                <NavDropdown key={index} title={item.title} id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                {
                                  item.childs.map((child,cindex) => {
                                    return(
                                      <NavDropdown.Item key={cindex} href={child.path}>{child.title}</NavDropdown.Item>
                                    ) 
                                  })
                                }
                              </NavDropdown>
                              )
                            }
                            else {
                              return (
                                <Nav.Link key={index} className='link' href={item.path}>{item.title}</Nav.Link>
                              );
                            }
                          })
                        }
                      </Nav>
                      <div className='btn-div'>
                        <a href='/sing-in' className='btn-si'>Sing In</a>
                        <a href='/sing-up' className='btn-su'>Sing Up</a>
                      </div>
                      
                      {/* <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                      </Form> */}
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </>
    );
}
export default MainMenu;