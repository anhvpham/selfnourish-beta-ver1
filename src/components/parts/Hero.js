import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom"

import InformationBlock from "./InformationBlock"

const styles = (theme, props) => ({
    root: {
      padding: "0px 40px",
      margin: "0px 50px",
      [theme.breakpoints.down("sm")]: {
        margin:"0",
        padding:"0",
        textAlign:"center",
       
      }  

    },
    container: {
      maxWidth: "75rem",
      margin: "auto",

    },

    item: {
      textAlign: "left",
      marginTop:"-50px",
        
      [theme.breakpoints.up("md")]: {
      width:"480px",
      
      
      },    

      [theme.breakpoints.down("sm")]: {
       marginTop:"0px",
      
      
      }  

      
    },
    img1: {
      width: "100%",
      "z-index": "-1",
      marginTop:"-100px",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }  
    },

    img2: {
      width: "100%",
 
      margin:"0 auto",
      
    
    
      
      [theme.breakpoints.up("md")]: {
        display: "none"
      }  
    },
    button: {


      background: theme.palette.primary.main,
      color:"white",
      fontWeight:"bold",
        
      "&:hover":{
          background:"#ffab48",
      },    
   

      [theme.breakpoints.up("md")]: {
      
        marginTop:"50px",
        float:"left",
       

      } , 
      [theme.breakpoints.down("sm")]: {
        margin:"0 auto",
        marginLeft:"0",
        marginTop:"30px",
  
      }  
    },


    link:{
      textDecoration:"none",
    }
 

  })

 

  class Hero extends Component {
    render() {
      const classes = this.props.classes
      return (
        <div className={classes.root} id={this.props.id}>
          <Grid
            container
            alignItems="center"
            alignContent="space-around"
            className={classes.container}
          >
            <Grid item xs={12} md={6}>
            {this.props.img2 && (
                <img
                  className={classes.img2}
                  src={this.props.img2}
                  alt={this.props.alt}
                />
              )}

              <InformationBlock
                header_1={this.props.header_1}
                headline={this.props.headline}
                className={classes.item}
              />

          
          <Grid item xs={12} md={5} className={classes.item3}>
             <NavLink exact to='/recipes'  className={classes.link} >
            <Button color="primary" className={classes.button} variant="extended" size="large">

               TRY IT NOW 
            </Button>
          </NavLink> 
        </Grid>
        
            </Grid>
            
            <Grid item xs={12} md={6} className={classes.item}>
              {this.props.img1 && (
                <img
                  className={classes.img1}
                  src={this.props.img1}
                  alt={this.props.alt}
                />
              )}
                
            </Grid>
          </Grid>
        </div>
      )
    }
  }
  
  export default withStyles(styles)(Hero)
