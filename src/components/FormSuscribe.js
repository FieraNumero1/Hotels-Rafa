import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../issest/img/fondo.1.svg';
import { useHistory } from 'react-router-dom'
import FormSingle from './FormSingle'

const FormSuscribe = () => {
    const classes = useStyles();
    const history = useHistory();

    if (!history.location.state?.src) {
        history.replace('/');
        return null;
    }

    return (
        <div className={classes.root}>

            <Typography variante='h1' className={classes.textos}> Formulario de solicitud de reserva
                </Typography>

            <div className={classes.cards}>

                <FormSingle src={history.location.state.src} title={history.location.state.title} />
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
        minHeight: 'calc(100vh - (122px+56px))',
    },
    textos: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#A2443D',
        fontSize: '35px',
        fontWeight: 'bold',
        marginTop: '50px',
        marginBottom: '50px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
            marginLeft: '0vw',
            textAlign: 'center',
            marginTop: '25px',
            marginBottom: '25px',
        },
    },
    cards: {
        height: 'auto',
    },
}))


export default FormSuscribe