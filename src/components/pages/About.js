import React, {Component} from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import {NavLink} from "react-router-dom"


import AboutCard from "../parts/AboutCard"


//members photo
import vu from "../../assets/team/vu.jpg"
import marcia from "../../assets/team/marcia.jpg"
import tanya from "../../assets/team/tanya.jpg"
import merry from "../../assets/team/merry.jpg"
import yukako from "../../assets/team/yukako.jpg"



const styles = theme => ({
    root:{
        maxWidth: "100vw",
        overflow: "hidden",
    },

   
    button: {
        color:"white",
        fontWeight:"bold",
        marginBottom:"40px",
        background:"#ff8500",
        
        "&:hover":{
          background:"#ffab48",
      },    
      
    },
    
    link:{
    textDecoration:"none",
    
    }

    
   
})





const About = props => {
    const classes = props.classes

    return(
        <div className="aboutus">
        {/* <Header /> */}
        <AboutCard 
            header_1="About Us"
            para_1="We are health-conscious creators. Our team believes it is possible that people still can enjoy their daily diet even if they are having chronic conditions"
            align="center"
        

            header_2= "Team Members"
        
       

            img_1={vu}
            headerName_1="Vu Anh Pham"
            position_1="Project Manager / Developer"
            
        
            img_2={marcia}
            headerName_2="Marcia Emi Isejima"
            position_2="Developer / QA"

            img_3={tanya}
            headerName_3="Thanyathorn Sangthien"
            position_3="UX / UI Designer"

            img_4={merry}
            headerName_4="Merry Nguyen"
            position_4 ="UI Designer"

            img_5={yukako}
            headerName_5 = "Yukako Suzuki"
            position_5 = "Designer / Web Content"


            header_3="Become A Partner"
            para_3="Thank you for your interest to Selfnourish!"
            para_4="If you are interested in becoming our business partner, please contact us"

        
        />
       
       
         <NavLink exact to='/contact'  className={classes.link} >
            <Button color="primary" className={classes.button} variant="extended" size="large">

               CONTACT US
            </Button>
        </NavLink>  

      


        </div>
    )
}
export default withStyles(styles) (About)
