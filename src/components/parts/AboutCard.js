import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography"
import SvgIcon from '@material-ui/core/SvgIcon'

import Members from './Members.js'
import InformationBlock from "./InformationBlock"

const styles = (theme) => ({
    root:{
    maxWidth:"100vw",
    textAlign:"center",
    
    },

    container:{

        maxWidth: "75em",
        margin: "auto",

    },

    container2:{
        margin: "0 auto",
        maxWidth:"600px"
    },

    item1:{
        maxWidth:"500px",
        margin:"0 auto",
    },

    item2:{
        margin:"50px",
        marginTop:"0px",
    },

    item3:{
        margin:"50px",
       
    },

    member2:{
        marginLeft:"150px",
        [theme.breakpoints.down("sm")]: {
            marginLeft:"0px",
          },  
          [theme.breakpoints.down("xs")]: {
            marginLeft:"0px",
          },   
    },

    socialIcon:{
    width: "2rem",
    height: "2rem",
    display: "inline-block",
    padding: "5px",
    marginTop: "10px",
    cursor: "pointer",
    "&:hover": {
      fill: "orange"
      },
    },   

})


function LinkedinIcon1(props) {
    return (
        <a href="https://www.linkedin.com/in/daphnepham/">
          <SvgIcon {...props}>
          <path  fill="#000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon2(props) {
    return (
        <a href="https://www.linkedin.com/in/marciaisejima/">
          <SvgIcon {...props}>
          <path  fill="#000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon3(props) {
    return (
        <a href="https://www.linkedin.com/in/tytstn/">
          <SvgIcon {...props}>
          <path  fill="#000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon4(props) {
    return (
        <a href="https://www.linkedin.com/in/merry-nguyen/">
          <SvgIcon {...props}>
          <path  fill="#000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
          </SvgIcon></a>
    );
  }
  function LinkedinIcon5(props) {
    return (
        <a href="https://www.linkedin.com/in/yukakos/">
          <SvgIcon {...props}>
          <path  fill="#000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
          </SvgIcon></a>
    );
  }


  const AboutCard = props => {
      const classes =  props.classes

      return (
          <div className={classes.root}>
             <Grid
            container
            alignItems="center"
            alignContent="space-around"
            className={classes.container}
          >
          
          <Grid item xs={12} md={12} className={classes.item1}>
              <InformationBlock
                header_2={props.header_1}
                para_1={props.para_1}
                align="center"
                
              />
            </Grid>


           <Grid item xs={12} md={12} className={classes.item2}>
              <InformationBlock
                header_2={props.header_2}
                para_1={props.para_2}
                align="center"
                
              />
            </Grid> 

            <Grid container alignItems="stretch" spacing={40} className={classes.container1}>
                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_1}
                      headerName={props.headerName_1}
                      position={props.position_1}
                      
                      className={classes.member}
                    />
                   
                    <LinkedinIcon1 className={classes.socialIcon}/>


                    </Grid>
                    

                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_2}
                      headerName={props.headerName_2}
                      position={props.position_2}
                      className={classes.member}
                    />
                    <LinkedinIcon2 className={classes.socialIcon}/>

                </Grid>

                <Grid item xs={12} md={4} className={classes.member}>

                    <Members 
                      img={props.img_3}
                      headerName={props.headerName_3}
                      position={props.position_3}
                      className={classes.member}
                    />
                    <LinkedinIcon3 className={classes.socialIcon}/>

                </Grid>

                <Grid container  spacing={40} className={classes.container2}>
                
                <Grid item xs={12} md={4} className={classes.member1}>

                    <Members 
                      img={props.img_4}
                      headerName={props.headerName_4}
                      position={props.position_4}
                      className={classes.member}
                    />
                    <LinkedinIcon4 className={classes.socialIcon}/>

                </Grid>

                <Grid item xs={12} md={4} className={classes.member2}>

                    <Members 
                      img={props.img_5}
                      headerName={props.headerName_5}
                      position={props.position_5}
                      
                      className={classes.member} 
                      
                    />
                    <LinkedinIcon5 className={classes.socialIcon}/>

                </Grid>
                
                
                </Grid>


            </Grid>






            <Grid item xs={12} md={12} className={classes.item3}>
              <InformationBlock
                header_2={props.header_3}
                para_1={props.para_3}
                para_1={props.para_4}
                align="center"
                button={props.button}
              />
            </Grid> 

          
          
          
          
          
          
          
          
          </Grid> 

          </div>
      )
  }
 
  export default withStyles(styles)(AboutCard) 
