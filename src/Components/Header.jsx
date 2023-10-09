import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar  bgColor='warning' className='text-center'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        
        <h3 className='text-light'>Quote Generator</h3>
        
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header