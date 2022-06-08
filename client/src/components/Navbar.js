import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  const downloadFile = () => {
    buttonObject = "";
    const button = buttonObject;
    const templateString = `<!DOCTYPE html>
    <html class="background" style="background-color:black;" lang="en">
    <head>
        <link rel="shortcut icon" type="image/jpg" href="ico2.jpg"/>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BITE SITES</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://trayskirrtfrixko.com/style.css">
        <style>
        
    </style>
    </head>
    <body style="opacity:0.65;">
        <main>
            <div class="flex justify-center">
            </div>
            <div class="h-4"></div>
            <img id="pfp" style="width:200px;" class="mx-auto mt-5 mb-3" src="https://www.letsgetready.org/wp-content/uploads/2020/07/blank-300x300.png"></img>
            <div class="h-4"></div>
            <div class="flex justify-center">
                <p style="color:white;" class="font-light text-3xl">BITE SITES!</p>
                
    
            </div>
            <div class="h-4"></div>
    <div class="flex justify-center show">
        <button id="show" style="border-radius:15px;min-height:30px;width:200px;border-color:white;border-width:1px;" class="pop hover:bg-gray-800 bg-black text-gray-300 hover:text-gray-100 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-xl font-light mt-5 mx-24">
            Show Links
        </button>
    </div>
    ${button}
        <div class="flex justify-center">
            <button style="border-radius:30px;width:180px;" onclick="window.location.href='https://music.apple.com/us/artist/tray-skirrt-frixko/1557790411'" class="bg-black pop hover:bg-gray-800 text-gray-500 hover:text-gray-400 py-2 px-4 border border-gray-500 hover:border-transparent rounded text-base font-light mt-5 mx-24 platformbuttons displaynone">
                <img class="h-20 mx-auto platform mt-3 mb-2" src="https://trayskirrtfrixko.com/apple-music.png"></img>
           Apple Music
            </button>
        </div>
        <div class="h-10"></div>
        <p class="text-gray-300 font-light flex justify-center">"BITE SITE NICKNAME"</p>
            <div class="h-10"></div>
            <div class="h-10"></div>
            <a href="mailto:nick@getmighty.net"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">Site courtesy of GETMIGHTY.NET</p></a>
            <a href="mailto:nick@getmighty.net"><p style="color:rgb(75, 75, 75)" class="flex justify-center text-white font-sans">click here to contact the web developer</p></a>
            <div class="h-10"></div>
        </main>
        <script src="https://trayskirrtfrixko.com/script.js"></script>
    
        </body>
    </html>`
    const element = document.createElement('a');
    const file = new Blob([templateString], {
    type: "text/plain;charset-utf-8"
});
element.href = URL.createObjectURL(file);
element.download = "index.html";
document.body.appendChild(element);
element.click();
}
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <section class="card spacerbottom">
    <div class="cardheader">
<div class="spacer port"/>
</div>
<div class="spacer"/>
<div class="cardtext">
<button onClick={downloadFile} id="resumebutton" class="platformbuttons">Download File</button>
</div>
<div class="spacer"/>
</section>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Google Books Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Search For Books
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
