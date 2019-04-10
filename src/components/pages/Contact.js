import React, { Component } from "react"
 import { withStyles } from "@material-ui/core/styles"
 import Typography from "@material-ui/core/Typography"

 import Button from "@material-ui/core/Button"


 

 import ContactUs from "../parts/ContactUs"
     
    
 const styles = theme => ({
    root:{
        marginTop:"50px",
        

        
    },
    
    card:{
        marginTop:"50px"

    },
    
    button:{
        marginTop:"30px",
        color:"white",
        fontWeight:"bold",
      [theme.breakpoints.down('sm')]:{
            marginTop:"0px",
   },
    },
  
  contact:{
      height:"90vh",
      
  },
})   

 const Contact = props => {
    const classes = props.classes
    return(
       
        
       <div className="contact">
       
        <ContactUs
        header_2="We'd love to hear from you"
        para_1="Thank you for your interest to SelfNourish! if you would like to keep up to date about SelfNourish, please email us at selfnourish.ca@gmail.com or fill in the form below"
        id="Contact us"
        />

    

        </div>
       
    )
 }

 export default withStyles(styles) (Contact)



 



 
