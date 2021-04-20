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
        textAlign: 'center',
        fontFamily: 'italic',
        textDecoration: 'none',
        marginBottom: 0,
        backgroundColor: 'rgba(152,47,39,0.5)',
        boxShadow: '1px 1px 5px 5px gray',
        color: "white",
        fontWeight: 'bold',
    },
}))
