import React from 'react'
import {
    MDBFooter
  } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
        <MDBFooter bgColor='warning' className='text-center text-lg-left' style={{position:'fixed', bottom:'0', width:'100%'}}>
      <div className='text-center p-3 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href=''>
          Quotegenerator.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer