import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';


const Results = ({ src, title, description, prize, stock }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className={classes.left}>
                <img  className={classes.image} src={src} alt={title} />
            </div>
            <div className={classes.right}>
                <Typography variant="h5">{title}</Typography> 
                <Typography variant="body1">{description}</Typography> 
                <Typography variant="body1"> Precio por noche $<span className={classes.number}>{prize}</span></Typography> 
                <Typography variant="body1">Habitaciones disponibles <span className={classes.number}> {stock} </span></Typography> 
            </div>
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    left: {
        margin: theme.spacing(2,5,5,5),
        maxWidth:'50%',
        [theme.breakpoints.down("xs")]: {
            
            justifyContent: 'center',    
            display: 'absolute',
            alignItems: 'center',
        },
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: theme.spacing(2,5,5,5),
        
        [theme.breakpoints.down("xs")]: {
            flexWrap:'wrap',
        },
    },
    image: {
        maxWidth:'400px',
        height: 'auto',
        borderRadius: '10px',
    },
    number: {
        fontWeight:'bold',
        marginLeft:theme.spacing(1),
        fontSize:'1.1rem',
    },
}))


export default Results

