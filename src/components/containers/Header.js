import React, { Component } from "react";
import Nav from "../parts/Nav";
import { withRouter } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

const Wrapper = styled("div") ({
  root:{
    //padding: "5px 30px",
    position: "sticky",
    top: 0,
    backgroundColor:"white",
    zIndex: 999,
    margin:"auto",
   padding:"0 20px",

    
    }
 
  

})



class Header extends Component {


  render() {

      const {match} = this.props;
      

    
           
       return <Wrapper>{match.path === "/" && <Nav/>}</Wrapper>
          
     

 
}
}

export default withRouter(Header)


