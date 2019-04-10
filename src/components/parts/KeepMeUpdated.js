import React from "react"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import InformationBlock from "./InformationBlock"
import Button from "@material-ui/core/Button"


import TextField from '@material-ui/core/TextField';




const styles = theme => ({
    root: {
        
        
        margin: "auto",
        paddingTop: "30px",
        paddingBottom:"30px",
        
        padding: "0px 70px",
      
        textAlign:"left",

        marginTop: "120px",
    

        backgroundColor:"lightgrey",
        
        [theme.breakpoints.down("sm")]: {
          width: "95%",
          paddingRight: "15px",
          paddingLeft: "15px",
          marginRight: "auto",
          marginLeft: "auto",
          textAlign:"center",
          marginTop:"30px",
      },
 
      },

      container:{ 
        
          [theme.breakpoints.up('md')]:{
            margin:"auto",
            maxWidth: "75rem",
          },
          [theme.breakpoints.down('xs')]:{
            maxWidth:"30rem",
            margin:"0 auto",
          },
       

      },
//       cssLabel: {
//         color: 'black',
        
//       },
    
//       cssOutlinedInput: {
//         '&$cssFocused $notchedOutline': {
        
//           fontFamily:"Raleway",
//           borderColor:"#ffab48",
//         }
//       },
    
//       cssFocused: {},
//       notchedOutline: {
        
//         borderWidth:"1px",
//         borderRadius:"25px",  
        
//       },
//      input:{
//          width:"100%",
//          backgroundColor: "white",
//         borderRadius: "25px",
//         borderColor:"#ffab48", 
//      },

    cssLabel: {
    // color: "white"
  },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px"
    // borderColor: "white !important"
  },
    
  input:{
      width:"100%"
  }
    
     button:{
         color:"white",
         fontWeight:"bold",
         "&:hover":{
          background:"#ffab48",  
          },    
             
        
        
     }


})


const KeepMeUpdated = props => {
    const classes = props.classes
    return (
        <div className={classes.root} id={props.id}>

        <Grid
        container
        alignItems="center"
        alignContent="space-around"
        className={classes.container}
        >

        <Grid item xs={12} md={4}>
              <InformationBlock
                header_2={props.header_2}
                para_1={props.para_1}
              />
        </Grid>   

        
        <Grid item xs={12} md={5} cassName={classes.container}>

        <TextField
            className={classes.input}
            variant="outlined"
            label="Enter Your Email"
            placeholder = ""
            
            margin="dense"
         
            
           
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
            }}


          />

         </Grid> 

        <Grid item xs={12} md={2} className={classes.container}>
            <Button color="primary" className={classes.button} variant="contained" size="large">

               Subscribe 
            </Button>
        </Grid>
        </Grid>

        

        </div> 
    )
}

export default withStyles(styles)(KeepMeUpdated)


