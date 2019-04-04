import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button"
import Header from "../../components/containers/Header"
import Footer from "../../components/containers/Footer"   
import Card1 from "../parts/Card1"

import { NavLink } from "react-router-dom"

 

const styles = theme => ({
    root:{
        marginTop:"50px",
        
        
    },
    
    card:{
        marginTop:"50px",

    },
    
    button:{
        background:"#ff8500",
        marginTop:"30px",
        color:"white",
        fontWeight:"bold",
        marginBottom:"40px",
     "&:hover":{
          background:"#ffab48",
      },    
        
    },
   
 link:{
  
  textDecoration:"none",
 },
 
})
   
   
const Plans = props => {
    const classes = props.classes

    return (
        
       
        <div className="card">
           
        <Card1

            header_2="Membership"

            header_3="BASIC"
            
            para_2={[<ul><li>Prefered For Single User </li>
            <li>Recieve 30-mins Free General Consult From Experts</li>
            <li>Add Up To 5 Favorite Recipes</li>
            </ul>]}

           
             headline_3="FREE"       
            

            header_4="PREMIUM"
            
            para_3={[<ul><li>Prefered For Single User</li>
                <li>Recieve One Free Consult From Experts For Meal Plan</li>
                <li>Customize Ingredient List Based On Personal Need</li>
                <li>Add Up To 20 Favorite Recipes</li>
                </ul>]
                }
            
            headline_4="$5.99/month"    

            header_5="PROFESSIONAL"

            para_4={[<ul><li>Prefered For Health Professionals</li>
                <li>Manage Up To 10 Profiles</li>
                <li>Able To Create Meal Plan </li>
                <li>Add Up To 50 Favorite Recipes</li>
                </ul>]}

            
            headline_5="Please Contact Us"        


             para_1="Ready to start planning your next meal"
                
        />
     
     
        <NavLink exact to='/contact'  className={classes.link} >
            <Button color="primary" className={classes.button} variant="extended" size="large">

               STAY UPDATED
            </Button>
        </NavLink>  
       


      


    </div> 
              

    )


    

}   
 
export default withStyles(styles) (Plans);
   
   
