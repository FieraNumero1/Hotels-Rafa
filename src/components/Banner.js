import React from 'react'
import backgroundImage from '../issest/img/back.jpg'
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';

const Banner = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <h2> Planea tu descanso </h2>
                <Button variant="contained" color="primary" disableElevation> Mira nuestras habitaciones </Button>
            </div>
            
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root: {
        top:'10px',
        height: '50vh',
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        // zIndex:-1,
    },
    card:{
        width:'20vw',
        backgroundColor:'rgba(0,0,0,0)',
        color:'black',
        textAlign:'center',
        height:'23vh',
        transition: 'all 1s ease',
        fontWeight:1000,
        fontSize:'35px',
        padding: theme.spacing(1, 1, 1, 1),
        margin: theme.spacing(1, 1, 1, 1),
        '&:hover' : {
            backgroundColor:'rgba(152,47,39,0.5)',
            color:'rgb(63,81,181)',
        }
    },

    botonsito:{
        backgroundColor:'rgba(152,47,39,0.8)',
        color:'white',
    }
      
  }))


export default Banner
