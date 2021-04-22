import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { dataFilter } from './RoomsData';
import { Chip, Link, Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import Results from './Results';
import dataRoom from './RoomsData';
import backgroundImage from '../issest/img/fondo.1.svg';
import { useSelector, useDispatch  } from 'react-redux';
import { selectStart } from '../features/startSlice';
import { selectEnd } from '../features/endSlice';
import * as moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
import { setSearch } from '../features/searchSlice';

const SearchPage = () => {
    const classes = useStyles();
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);
    const dispatch = useDispatch();
    const [money, setMoney] = useState(100);
    const isThereMoney = () => {
        if(money<500){
            setMoney(money + 100)
        }
        
    }
    
    const isntThereMoney = () => {
        if(money>100){
            setMoney(money - 100)
        }
    }
    const handleChange = (event, value) => {
        setMoney(value);
    };

    useEffect(() => {
            dispatch(setSearch('...123'));
    },[])

    useEffect(() => {
            return () => dispatch(setSearch(''));
    },[])
    let todayHere = new Date()
    
    let dataRedux = moment(end).format('DD [de] MMMM [del] YYYY')
    let today = moment(todayHere).format('DD [de] MMMM [del] YYYY')
    return (
        <div className={classes.root}>
            <Typography variante='h2' style={{marginTop:10}} className={classes.textos}> Habitaciones disponibles
             </Typography>
             {dataRedux ===  today ? '':(<Typography variante='h2' style={{marginTop:10}} className={classes.subtitle}> Fecha seleccionada desde {moment(start).format('DD [de] MMMM [del] YYYY')} hasta {moment(end).format('DD [de] MMMM [del] YYYY')}
             </Typography>)}
            
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
                
                <Link style={{cursor:'pointer', textDecoration:'none'}} onClick={() => isntThereMoney()}> 
                <p style={{ color: '#A2443D',fontSize: 20 }}>
                        -100
                </p>
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

                <Link style={{cursor:'pointer',  textDecoration:'none'}} onClick={() => isThereMoney()}>
                <p style={{ color: '#A2443D',fontSize: 20 }}>
                        +100
                </p>
                    &nbsp; <AttachMoneyIcon style={{ color: '#A2443D', fontSize: 35 }} />
                </Link>
                

            </div>
            <div className={classes.cards}>
                {
                    dataRoom
                        .filter((data) => (data.cat === "room" && data.prize <= money))
                        .map(({ src, title, description, prize, stock, notAvailableStart, notAvailableEnd }) => (
                            <Results title={title} description={description} src={src} prize={prize} stock={stock} disableStart={notAvailableStart} disableEnd={notAvailableEnd} />
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
        minHeight: 'calc(100vh - (126px+56px))',
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
        justifyContent: 'left',
        marginLeft: '2vw',
        alignItems: 'center', 
        color: '#A2443D', 
        fontSize: '25px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
            marginLeft: '0vw',
            textAlign: 'center', 
        },
    },
    subtitle: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', 
        color: '#A2443D', 
        fontSize: '25px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
            marginLeft: '0vw',
            textAlign: 'center', 
        },
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
