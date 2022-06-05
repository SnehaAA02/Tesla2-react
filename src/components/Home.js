import React from 'react'
import styled from "styled-components"
import Sneha1 from "./Sneha1"
import Sneha from "./Sneha"
import Sneha2 from "./Sneha2"

function home() {
  return (
    
    <><Container>

      <Sneha
         title="Model S"
         description="Order Online for Touchless Delievery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory" />
    
        <Sneha1
           title="Model Y"
           description="Order Online for Touchless Delievery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
     
        <Sneha2
          title="Model 3"
          description="Order Online for Touchless Delievery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory" />
     
        
      </Container></>
            
  )
}
export default home
const Container=styled.div`
height:100vh;

`

