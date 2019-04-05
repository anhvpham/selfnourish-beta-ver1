import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import { NavLink } from "react-router-dom"
import {Grid} from "@material-ui/core/Grid";

//parts
import MenuButton from  "../parts/MenuButton"

//import Logo
import LogoDesktop from "../../assets/logo_desktop.svg"
import LogoMobile from "../../assets/logo/logo_mobile.svg"

const styles = theme => ({
  root: {
    maxWidth: "75rem",
    backgroundColor:"transparent",
    margin: "0px auto",
    display: "flex",
    "justify-content": "space-between",
    position: "sticky",
    top: 0,
   
    fontSize:"18px",
    background:"transparent",
    
  },

  wrapper: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      top: "60px !important",
      left: "0",
      width: "100%",
      height: "60vh",

     
      
    },
    [theme.breakpoints.up("md")]: {
      display: "grid !important",
      "grid-template-columns": "auto auto",
      "align-items": "center"
    },
    width: "100%",
    
  
    
    
  },
  left: {
    "justify-self": "start",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column",
    }
  },
  right: {
    "justify-self": "end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "flex-direction": "column"
    }
  },
  link: {
    textDecoration:"none",
    fontSize:"20px",
    textTransform:"uppercase",
    [theme.breakpoints.down("sm")]: {
      
      padding:"20px",
      textAlign:"center",
      
      "&:hover": {
        
        color: theme.palette.primary.main,
      },
      "&:.active": {
        color: theme.palette.primary.main
      },


    },
   
    "&:hover": {
        
        color: theme.palette.primary.main,
      },
      "&:.active": {
        color: theme.palette.primary.main
      },
  
    //margin: "0 50px",
    marginRight:"0px",
    marginLeft:"0px",
    color:"black",
    fontWeight: "bold",
    cursor: "pointer",

  },
  
  button: {
    textTransform:"uppercase",
    borderRadius: "50px",
    border: "3px solid orange",
    background: "white",
    fontWeight: "bold",
    fontSize:"16px",
   

    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "0 auto"
    },
  }, 
  
  
  logoMobile: {
   
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  logoDesktop:{
    
  
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },

  

})

const menus =["recipes", "plans", "about us"]

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }


  render() {
    const classes = this.props.classes
    return (
      <div className={classes.root}>

      <NavLink exact to="/"  className={classes.link} offset={-136} >
        <img src={LogoDesktop} className={classes.logoDesktop} alt="selfnourish logo" width="80px" height="80px"/>
        <img src={LogoMobile} className={classes.logoMobile} alt="selfnourish logo" width="50px" height="50px"/>
        </NavLink>

        

        <div className={classes.wrapper} id="navigation">
          <div className={classes.left} >
            {menus.map((menu,index) => {
              
              return (

                <NavLink
                to={`/${menus[index]}`}  
                color="inherit" 
                className={classes.link} 
                key={menus[index]}>
                {menu}
                </NavLink>
              )
             
            })}
          </div>
          <div className={classes.right}>
          <NavLink to='/contact'  className={classes.link} >
            <Button
              variant="contained"
              color="white"
              className={classes.button} 
            >
              Contact Us
            </Button>
            </NavLink>
          </div>
        </div>
        <MenuButton dataTarget="#navigation" />
      </div>
    )
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Nav)
