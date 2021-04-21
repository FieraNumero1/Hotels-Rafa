import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CardSingle from './CardSingle'
import backgroundImage from '../issest/img/fondo.1.svg';

import { useHistory } from 'react-router-dom'


const View = () => {
    const classes = useStyles();
    const history = useHistory();
    
        
    console.log(history.location.state)
    return (
        <div className={classes.root}>
            
            <Typography variante='h1' className={classes.textos}>{history.location.state.cat==='room' ? 'Habitaciones de nuestro hotel': 'Entretenimiento de nuestro hotel'} 
             </Typography>
             
            <div className={classes.cards}>
                        
                <CardSingle title={history.location.state.title} description={history.location.state.description} src={history.location.state.src} prize={history.location.state.prize} stock={history.location.state.stock} disableStart={history.location.state.notAvailableStart} disableEnd={history.location.state.notAvailableEnd} />
            </div>
        </div >
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '0px',
        margin: '0px',
        textAlign: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
    },
    textos: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        // textAlign: 'center', 
        justifyContent: 'center',
        // marginLeft: '2vw',
        alignItems: 'center', 
        color: '#A2443D', 
        fontSize: '35px',
        fontWeight: 'bold',
        marginTop: '100px',
        marginBottom: '50px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
            marginLeft: '0vw',
            textAlign: 'center', 
        },
    },
    cards:{
        height:655,
    },
}))


export default View