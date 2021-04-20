import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import { dataFilter } from './RoomsData';
import { Chip, Link, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import Results from './Results';
import dataRoom from './RoomsData'
import backgroundImage from '../issest/img/fondo.1.svg'

const SearchPage = () => {
    const classes = useStyles();
    const [money, setMoney] = useState(100);
    const isThereMoney = () => {
        setMoney(money + 100)
    }
    const isntThereMoney = () => {
        setMoney(money - 100)
    }
    const handleChange = (event, value) => {
        setMoney(value);
    };

    useEffect(() => {
        console.log('data', money)
    }, [money])


    return (
        <div className={classes.root}>
            <Typography variante='h2' className={classes.text1} gutterBottom> Habitaciones disponibles
             </Typography>
            <div className={classes.chips}>
                {
                    dataFilter.map(data => {
                        //  let icono = <HighlightOffTwoTone/>
                        const handleDelete = () => {
                            swal("Ups!", "No podemos remover los filtros", "warning");
                        };
                        return (
                            <Chip
                                label={data.label}
                                className={classes.chipInside}
                                onDelete={handleDelete}
                            />
                        )
                    })
                }
            </div>
            <Typography variante='h3' className={classes.text1} gutterBottom> 
                Precio
            </Typography>
            
            <div className={classes.slider}>
                <Link onClick={() => isntThereMoney()}>
                    <MoneyOffIcon style={{ color: '#A2443D', fontSize: 35 }} />
                </Link>
                
                
                <Slider
                    style={{ color: '#A2443D' }}
                    valueLabelDisplay
                    value={money}
                    min={100}
                    max={500}
                    onChange={handleChange}
                    aria-labelledby="continuous-slider" />

                <Link onClick={() => isThereMoney()}>
                    <AttachMoneyIcon style={{ color: '#A2443D', fontSize: 35 }} />
                </Link>
                <Typography variante='h3' style={{ color: '#A2443D', fontSize: 25 }} > 
                {money}
                </Typography>
            </div>
            <div className={classes.cards}>
                {
                    dataRoom
                        .filter((data) => (data.cat === "room" && data.prize <= money))
                        .map(({ src, title, description, prize, stock }) => (
                        <Results title={title} description={description} src={src} prize={prize} stock={stock}/>                    
                ))
            }
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
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        boxShadow:'none',
    },
    chipInside: {
        backgroundColor: 'rgba(152,47,39,0.9)',
        textAlign: 'center',
        color: 'white',
        transition: 'all 1s ease',
        margin: "1vw",
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(152,47,39,0.5)',
            boxShadow: '1px 1px 1px 1px gray',
            color: "white",
        }
    },
    card:{
        border:'none',
    },
    text1: {
    margin:theme.spacing(1),
    fontSize:'1.5rem',
    fontWeight: 400,
    },
    slider: {
        display: 'flex',
        flexDirection: 'row',
        width: '300px',
        margin: '2vw',
        alignItems: 'center',
    },
}))


export default SearchPage
