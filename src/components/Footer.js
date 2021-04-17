import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                2021 Copyright by Rafa-Hotels
            </Typography>
            <Typography variant="subtitle1">
                <a alt="Privacy" href="/">Privacy</a> . <a alt="Terms" href="/"> Terms </a> .  <a alt="Terms" href="/"> Sitemap </a>
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid gray',
        marginTop: '1vh',
        textAlign: 'center',
        fontFamily:'italic',
        color: 'black',
        textDecoration: 'none',
        transition: 'all 1s ease',
        '&:hover' : {
            backgroundColor:'rgba(152,47,39,0.5)',
            boxShadow:'5px 10px 5px 15px gray',
            color:"white",
            fontWeight:'bold',
        }
    },
}))
