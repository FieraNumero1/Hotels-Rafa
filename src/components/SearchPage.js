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
            <Typography variante='h2' style={{marginTop:10}} className={classes.textos}> Habitaciones disponibles
             </Typography>
            <div className={classes.chips}>
                {
                    dataFilter.map(data => {
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
            <div className={classes.textos}>
            <p>
                    Precio &nbsp;
            </p>
            <p >
                    ${money}
            </p>
            </div>
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

            </div>
            <div className={classes.cards}>
                {
                    dataRoom
                        .filter((data) => (data.cat === "room" && data.prize <= money))
                        .map(({ src, title, description, prize, stock }) => (
                            <Results title={title} description={description} src={src} prize={prize} stock={stock} />
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
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: 'none',
    },
    chipInside: {
        backgroundColor: 'rgba(152,47,39,0.9)',
        textAlign: 'center',
        color: 'white',
        transition: 'all 1s ease',
        margin: "2vw",
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(152,47,39,0.5)',
            boxShadow: '1px 1px 1px 1px gray',
            color: "white",
        }
    },
    card: {
        border: 'none',
    },
    textos: {
        width:'50%',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center', 
        justifyContent: 'left',
        marginLeft: '2vw',
        alignItems: 'center', 
        color: '#A2443D', 
        fontSize: '25px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
        },
        // fontWeight: 'bold'
        
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
