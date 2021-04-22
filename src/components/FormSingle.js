import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormHelperText, Input, InputLabel, Paper, Typography, Button, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom'
import * as moment from 'moment';
import 'moment/locale/es'  // without this line it didn't work
import { useSelector, useDispatch } from 'react-redux';
import { selectStart } from '../features/startSlice';
import { selectEnd } from '../features/endSlice';
import { setSearch } from '../features/searchSlice';

const FormSingle = ({ src, title }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const start = useSelector(selectStart);
    const end = useSelector(selectEnd);
    const [value, setValue] = useState('Mujer');
    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        password2: '',
        birthday: '',
        gender: value,
    });
    
    const setForm = () =>{
        if (data.name !=='' && data.lastName !=='' && data.email !=='' && data.phone !=='' && data.password !=='' && data.password2 !=='' && data.birthday !==''){
            if(data.password===data.password2){
                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                let regNumber = /^[0-9]{4}(-[0-9]{4})?$/;
                if (reg.test(data.email) === false) {
                    swal( "Advertencia","Correo invalido","warning");
                    return false;
                }
                if (regNumber.test(data.phone) === false) {
                    swal( "Advertencia","Numero de telefono invalido (el formato debe llevar guion en medio. Ejemplo: 0000-0000)","warning");
                    return false;
                }
                if (data.password.length<8) {
                    swal( "Advertencia","La contraseña es vulnerable, debe ser mínimo de 8 caracteres","warning");
                    return false;
                }
                swal( "Éxito","Reversa realizada con éxito","success");
                history.replace('/');
                dispatch(setSearch(''));
            }
            else{
                swal( "Advertencia","Las contraseñas no coinciden","warning");
            }
        }else{
            swal( "Advertencia","Debe ingresar toda la información solicitada","warning");
        }
    }
    
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChageText = (name) => (value) => {
        setData((prevData) => ({ ...prevData, [name]: value.target.value }))
    }
    useEffect(()=>{
        dispatch(setSearch('...123'));
    },[])

    return (
        <Paper elevation={0} className={classes.root}>
            <div className={classes.background}>
                <div className={classes.left}>
                    <div>
                        <Typography variante='h1' className={classes.textos}> {title}
                        </Typography>
                    </div>
                    <img className={classes.image} src={src} alt='hotel' />
                </div>
                <div className={classes.right}>
                    
                    <Typography variant="h5" className={classes.textos}>Reserva desde  {moment(start).format('DD [de] MMMM [del] YYYY')}  hasta {moment(end).format('DD [de] MMMM [del] YYYY')} </Typography>
                    <div className={classes.center}>
                        <FormControl className={classes.formWidth}>
                            <InputLabel className={classes.inputStyle} htmlFor="my-input">Nombre</InputLabel>
                            <Input onChange={handleChageText('name')} id="name" style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                        </FormControl>

                        <FormControl className={classes.formWidth}>
                            <InputLabel className={classes.inputStyle} htmlFor="my-input">Apellido</InputLabel>
                            <Input id="lastName" onChange={handleChageText('lastName')} style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                        </FormControl>

                        <FormControl className={classes.formWidth}>
                            <InputLabel htmlFor="my-input" className={classes.inputStyle} >Email address</InputLabel>
                            <Input onChange={handleChageText('email')} id="email" style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                            <FormHelperText id="my-helper-text" style={{ color: '#A2433C' }}>Nunca compartiremos tu correo.</FormHelperText>
                        </FormControl>

                        <FormControl className={classes.formWidth}>
                            <InputLabel className={classes.inputStyle} htmlFor="my-input">Telefono</InputLabel>
                            <Input placeholder="0000-0000" id="number" onChange={handleChageText('phone')} style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                        </FormControl>

                        <FormControl className={classes.formWidth}>
                            <InputLabel className={classes.inputStyle} htmlFor="my-input">Contraseña</InputLabel>
                            <Input id="password" type="password" onChange={handleChageText('password')} style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl className={classes.formWidth}>
                            <InputLabel className={classes.inputStyle} htmlFor="my-input">Repita contraseña</InputLabel>
                            <Input id="repeatPassword" type="password" onChange={handleChageText('password2')} style={{ color: '#A2433C' }} aria-describedby="my-helper-text" />
                        </FormControl>

                        <TextField
                            id="date"
                            label="Fecha de nacimiento"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                                color: '#A2433C',
                            }}
                            style={{ width: '65%', color: '#A2433C' }}
                            onChange={handleChageText('birthday')}
                        />
                        <FormControl style={{ marginTop: 25, display: 'flex', flexDirection: 'column' }} component="fieldset" >
                            <FormLabel style={{ color: '#A2433C', fontWeight: 'bold' }} component="legend">Genero</FormLabel>
                            <RadioGroup aria-label="Genero" name="Genero" value={value} onChange={handleChange}>
                                <FormControlLabel className={classes.inputStyle} value="Hombre" control={<Radio style={{ color: '#A2433C' }} />} label="Hombre" />
                                <FormControlLabel className={classes.inputStyle} value="Mujer" control={<Radio style={{ color: '#A2433C' }} />} label="Mujer" />
                            </RadioGroup>
                        </FormControl>
                        <Button style={{ marginTop: 10, width: "50%" }} variant="contained" onClick={setForm} className={classes.botonsito}>
                            Realizar reserva
                        </Button>
                    </div>
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
        boxSizing: 'content-box',
        width: '100%',
    },
    background: {
        boxSizing: 'content-box',
        display: 'flex',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        border: '2px solid #A2433C',
        background: 'rgba(0,0,0,0.1)',
        [theme.breakpoints.down("xs")]: {
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
        },
        height: 'auto',
        marginBottom: 30,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        boxSizing: 'content-box',
        [theme.breakpoints.down("xs")]: {
            width: '100%',
        },

    },
    center: {
        boxSizing: 'content-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },
    right: {
        boxSizing: 'content-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '50%',
        fontWeight: 1000,
        color: '#A2433C',
        "@media (max-width: 600px)": {
            width: '100%',
            alignItems: 'center',
        },
        marginBottom: '50px',
    },
    botonsito: {
        boxSizing: 'content-box',
        backgroundColor: '#A2433C',
        color: 'white',
        fontWeight: 'bold',
        transition: 'all 0.5s ease',
        '&:hover': {
            backgroundColor: 'white !important',
            color: '#A2433C !important',
            boxShadow: '2.5px 5px gray',
        }
    },
    image: {
        width: '85%',
        height: 'auto',
        borderRadius: '10px',
        boxSizing: 'content-box',
        "@media (max-width: 600px)": {
            width: '300px',
            marginBottom: '25px',
            marginTop: '25px',
        },
        "@media (max-width: 400px)": {
            width: '200px',
            marginBottom: '25px',
            marginTop: '25px',
        },
        marginBottom: '50px',
        marginTop: '50px',
        transition: 'all 1s ease',
        '&:hover': {
            boxShadow: '5px 10px gray',
            transform: 'scale(1.1)',
        }
    },
    textos: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign:'center',
        color: '#A2443D',
        fontSize: '25px',
        fontWeight: 'bold',
        marginBottom: '10px',
        "@media (max-width: 600px)": {
            width: '100%',
            justifyContent: 'center',
            marginLeft: '0vw',
            textAlign: 'center',
        },
    },
    formWidth: {
        width: '65%',
        marginTop: 5,
        boxSizing: 'content-box',
    },
    inputStyle: {
        boxSizing: 'content-box',
        color: '#A2433C',
        fontWeight: 'bold'
    }
}))


export default FormSingle