// eslint-disable-next-line 
import React from 'react'
import styled from 'styled-components'

function header() {
  return (
    <div>
    <Container>
      <a href="#">
        <img src="/images/logo.svg"  alt="" />
      </a>
      {/* <Menu>
        <a href='#'>Model S</a>
      </Menu> */}

 
      
    </Container>



</div>
  )
  
}

export default header

const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    top:0;
    left:0;
    right:0;
`

const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a {
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
      flex-wrap:no-wrap;

    }

`
// const RightMenu=styled.div`
// display:flex;
// align-items:center;

// a {
//   font-weight:600;
//   text-transform: uppercase;
//   margin-right:10px;
  
// }
// `