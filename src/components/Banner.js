import React from 'react'
import backgroundImage from '../issest/img/possibleBack.jpg'
import { Button, InputBase, makeStyles, Typography } from '@material-ui/core';

const Banner = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <Typography variant='h2' > Planea tu descanso </Typography>
                <Button variant="contained" color="primary"> Nuestras habitaciones </Button>
            </div>
            
        </div>
    )
}

const useStyle = makeStyles((theme)=>({
    root: {
        marginTop:'10px',
        height: '50vh',
        minWidth: '500px',
        position: 'relative',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        zIndex:0,
    },
    card:{
        width:'350px',
        backgroundColor:'rgba(152,47,39,0.5)',
        color:'white',
        textAlign:'center',
        transition: 'all 1s ease',
        fontSize:'35px',
        fontWeight:'bold',
        padding: theme.spacing(1, 1, 1, 1),
        margin: theme.spacing,
        
        '&:hover' : {
            backgroundColor:'rgba(152,47,39,0.9)',
            color:'white',
            fontWeight:'bold',
            borderBottomRightRadius: 50,
        },
        '& button:hover': {
            backgroundColor:'white',
            color:'rgb(48,63,159)',
            fontWeight:'bold',
            transform: 'scale(1.1)',
        },
    
    },

    botonsito:{
        backgroundColor:'rgba(152,47,39,0.8)',
        color:'white',
    }
      
  }))


export default Banner
