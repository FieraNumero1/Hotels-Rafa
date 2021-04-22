import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  Paper, Typography } from '@material-ui/core';
import * as moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work



const CardSingle = ({ src, title, description, prize, stock, disableStart, disableEnd }) => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.root}>
            <div className={classes.background}>
                <div className={classes.left}>
                    <img className={classes.image} src={src} alt={title} />
                </div>
                <div className={classes.right}>
                    <Typography style={{ fontWeight: 1000 }} variant="h4">{title}</Typography>
                    <Typography variant="h5">{description}</Typography>
                    {
                        prize ? (<Typography variant="h5"> Precio por noche $<span className={classes.number}>{prize}</span></Typography>) : ''
                    }
                    {
                        stock ? (<Typography variant="h5">Habitaciones disponibles <span className={classes.number}> {stock} </span></Typography>):''
                    }
                    
                    {
                        disableStart ? (<Typography variant="h5">Habitación reservada desde <span style={{fontWeight:'bold'}}> {moment(disableStart).format('DD [de] MMMM [del] YYYY')} </span> hasta <span style={{fontWeight:'bold'}}> {moment(disableEnd).format('DD [de] MMMM [del] YYYY')} </span></Typography>):''
                    }
                    
                    
                </div>
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
        },
        flexWrap: 'wrap',
        background: 'transparent',
        marginBottom: 25,
    },
    background: {
        display: 'flex',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        transition: 'all 0.5s ease',
        '&:hover': {
            border: '2px solid #A2433C',
            background: 'rgba(0,0,0,0.1)',
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            height: 'auto',
        },
        height: '90%',
        
        
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',

    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '50%',
        fontWeight: 1000,
        color:'#A2433C',
        "@media (max-width: 600px)": {
            width: '100%',
            alignItems: 'center',
        },
        marginBottom: '50px',
        '& button':{
            marginTop: '50px',
            width: '50%',
        },
        '& button:hover': {
            backgroundColor: 'white',
            color: 'rgb(48,63,159)',
            fontWeight: 'bold',
          
        },
    },
    botonsito:{
        backgroundColor: '#A2433C',
        color:'white',
        fontWeight: 'bold',
        transition: 'all 0.5s ease',
        '&:hover': {
            backgroundColor: 'white !important',
            color:'#A2433C !important',
            boxShadow: '2.5px 5px gray',
        }
    },
    image: {
        width: '75%',
        height: 'auto',
        borderRadius: '10px',
        "@media (max-width: 600px)": {
            width: '300px',
        },
        "@media (max-width: 400px)": {
            width: '200px',
        },
        marginBottom: '50px',
        marginTop: '50px',
        transition: 'all 1s ease',
        '&:hover': {
            boxShadow: '5px 10px gray',
            transform: 'scale(1.1)',
        }
    },
    number: {
        marginLeft: theme.spacing(0.5),
    },
}))


export default CardSingle