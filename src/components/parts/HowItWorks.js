
import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import InformationBlock from "./InformationBlock"
import List from '@material-ui/core/List';
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom"



const styles = theme => ({
  root: {
    margin: "auto",
    paddingTop: "30px",
    margin: "0px 50px",
    padding: "0px 40px",
    marginBottom:"-100px",
    textAlign:"left",

    [theme.breakpoints.down("sm")]:{

      marginTop:"30px",
      textAlign:"center",
      margin: "0px 30px",
      textAlign:"center",

    },
    
  },
  container: {
    maxWidth: "75rem",
    margin: "auto",

    
    
  },

  item:{
    // fontSize:"22px",

    // [theme.breakpoints.down("sm")]: {
    //   fontSize:"16px",

    //   }

    
  },

  img: {
    width: "90%",
    
    borderRight:"1px solid #f3e1cd",
    
    borderRadius:"50%",
    
    
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },  
    
    [theme.breakpoints.up("md")]: {
      marginBottom:"-10px",
    }  
  },

  button:{
    
      "&:hover":{
          background:"#ffab48",
      },    
      alignSelf: "center",
      marginTop: "20px",
      background: "#ff8500",
      color:"#fff",
      fontWeight:"bold",
      fontStyle:"normal"
   
    



  },

  container_1:{
    
    marginTop:"20px",
    background:"linear-gradient(90deg,#ffffff 40%,#f3e1cd 50%)"
    
    
    
 
  },

  container_2:{
    backgroundColor:"#f3e1cd",
    borderRight:"2px solid #f3e1cd",
    "border-top-right-radius":"25px" ,
    "border-bottom-right-radius":"25px",
    marginTop:"20px",
    fontStyle:"italic",
    fontFamily:"Raleway",
    padding:"90px 0px 40px 0px",

    [theme.breakpoints.down("sm")]: {
      "border-top-left-radius":"25px" ,
      "border-bottom-left-radius":"25px",
      textAlign:"center",
      padding:"20px",
    } , 

    [theme.breakpoints.up("md")]: {
      padding:"90px 0px 40px 0px",
    }
  },

  container_3:{
    padding: "40px 50px",
    // paddingLeft:"70px",
    // paddingTop:"40px",
    //fontSize:"22px",
    

    [theme.breakpoints.down("sm")]: {
    
      textAlign:"center",
      padding:"0px",
      fontSize:"16px",
     
    }  
    
  },

  item_1 :{
    paddingTop:"20px",
    marginTop:"10px",
    maxWidth:"300px",
    
    [theme.breakpoints.down("sm")]: {
    
      margin:"0 auto",
    
     
    }  
  },

  link:{
    textDecoration:"none",
  },

  headline:{
    
    
    [theme.breakpoints.down("sm")]: {
    
      fontSize:"16px",
    
     
    }, 
    
  },
})

const HowItWorks = props => {
  const classes = props.classes
  return (
    <div className={classes.root} id={props.id}>
      <Grid
        container
        alignItems="center"
        alignContent="space-around"
        className={classes.container}
      >

        <Grid item xs={12} md={5}>
              <InformationBlock
                header_2={props.header_2}
              />
        </Grid>

        <Grid container alignItems="stretch" >
        <Grid item xs={12} md={4} spacing={20} className={classes.container_1}>
        
         <img className={classes.img} src={props.img} alt={props.alt} />  
        </Grid>

        <Grid item xs={12} md={4} alignItems="stretch" spacing={20} className={classes.container_2}>  
          <InformationBlock
            headline={props.headline}
            className={classes.headline}
            
          />

        <Grid item xs={12} md={6} className={classes.item3}>
        <NavLink exact to='/recipes'  className={classes.link} >
            <Button color="primary" className={classes.button} variant="extended" size="large">

               TRY IT NOW 
            </Button>
          </NavLink>  
        </Grid>
          
        </Grid>
        
        <Grid item xs={12} md={4} className={classes.container_3}>
              
            <InformationBlock 
                
                header_3={props.header_4}
                para_2={props.para_4}
                className={classes.item_1}
            />


            <InformationBlock 
                
                header_3={props.header_5}
                para_2={props.para_5}
                className={classes.item_1}
            />


             <InformationBlock 
                
                header_3={props.header_6}
                para_2={props.para_6}
                className={classes.item_1}
            />    

    
            

        </Grid>  
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(HowItWorks)
