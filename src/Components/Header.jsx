import React from 'react'
import {Container,Navbar} from "react-bootstrap"
import Watch_history from '../Pages/Watch_history'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{textDecoration:"none"}}>
            
             <i className="fa-solid fa-cloud-arrow-up"></i>{' '}
            Media App
            
            </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
