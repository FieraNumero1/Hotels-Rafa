import { AppBar, Avatar, List, IconButton, InputBase, makeStyles, Toolbar, Button, Link } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import logo from '../issest/img/logo.PNG'
import foto from '../issest/img/foto.jpg'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import {useHistory} from 'react-router-dom';
import { Lightbox } from "react-modal-image";
import { useSelector, useDispatch } from 'react-redux';
import { selectSearch, setSearch } from '../features/searchSlice';



const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(selectSearch);
    
    const [mobileView, setMobileView] = useState(true);
    const [mobileViewAvatar, setMobileViewAvatar] = useState(true);
    const [draweropen, setDraweropen] = useState(false);
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    useEffect(() => {
        const responsiveness = () =>
            window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
        responsiveness();
        window.addEventListener("resize", () => responsiveness());
        const responsivenessLogo = () =>
            window.innerWidth < 400 ? setMobileViewAvatar(false) : setMobileViewAvatar(true);
        responsivenessLogo();
        window.addEventListener("resize", () => responsivenessLogo());
    }, []);

    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setDraweropen(true);
        };

        const handleDrawerClose = () => {
            setDraweropen(false);
        };

        

        const handleOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };
        

        const headersData = [
            {nombre:"Home",
            funcion: '/'}, 
            {nombre:"Ver habitaciones",
            funcion: '/search'}, 
            ];

        const getDrawerChoices = () => {
            return headersData.map((data) => {
                return (
                    <List>
                        <Button variant="contained" onClick={() => { history.push(data.funcion) }} style={{ backgroundColor: 'white', width: '100%', color: "#982F27" }}>
                            {data.nombre} {/* Aqui podemos hacer un onClick y aqui en el meter en el array el navigator */}
                        </Button>
                    </List>
                );
            });
        };
        return (
            <>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    {...{
                        edge: "start",
                        color: "#982F27",
                        "aria-label": "menu",
                        "aria-haspopup": "true", //notifica a los usuarios con dificultades visuales, de que este elemento tiene un menu desplegable
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon style={{ color: '#982F27' }} fontSize='large' />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: draweropen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <a href='/'>
                        <img alt='logo' src={logo} className={classes.logo} />
                    </a>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <a href='/'>
                    <img src={logo} className={classes.logo} alt='logo' />
                </a>
                <div className={classes.right}>
                    {mobileViewAvatar && (<a href='/' style={{ textDecoration: 'none', color: "#982F27" }}> Rafael Martínez </a>)}
                    <Link onClick={handleOpen}><Avatar alt='Foto' src={foto} className={classes.avatar} /> </Link>

                </div>
            
            </Toolbar>
                <div>
                {open&&(<Lightbox
                    medium={foto}
                    large={foto}
                    alt='Profile-Picture'
                    
                    onClose={handleClose}
                    />)}
                </div>
                </>
        );
    };

    const displayDesktop = () => {
        const setData = (data) =>{
            dispatch(setSearch(data.target.value));
        }

        const handleOpen = () => {
            setOpen(true);
            };
        
            const handleClose = () => {
            setOpen(false);
            };

        return (
            <>
            <Toolbar className={classes.toolbar}>
                <a href='/'>
                    <img alt='logo' src={logo} className={classes.logo} />
                </a>
                <div className={classes.center}>
                    {
                        data !=='...123' ? (<InputBase fullwidth onChange={setData} placeholder="Buscar ..." inputProps={{ className: classes.input }} />) : (<InputBase fullwidth onChange={setData} placeholder="               Deshabilitado" inputProps={{ className: classes.input }} disabled/>)
                    }
                    {/* <InputBase fullwidth onChange={setData} placeholder="Buscar ..." inputProps={{ className: classes.input }} /> */}
                    <SearchIcon style={{ color: '#982F27', paddingRight: '5px' }} />
                </div>
                <div className={classes.right}>
                    {mobileViewAvatar && (<a href='/' style={{ textDecoration: 'none', color: "#982F27" }}> Rafael Martínez </a>)}
                    <Link style={{ cursor:'pointer'}} onClick={handleOpen} ><Avatar alt='Foto' src={foto} className={classes.avatar} /> </Link>

                </div>
            </Toolbar>
            <div>
            {open&&(<Lightbox
                medium={foto}
                large={foto}
                alt='Profile-Picture'
                
                onClose={handleClose}
                />)}
            </div>
            </>
        )
    }

    return (
        <AppBar className={classes.root}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    )
}

const useStyle = makeStyles((styles) => ({
    root: {
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 99,
        width: "100%",

    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: "50px",
        margin: styles.spacing(1, 0, 0, 2),
        objectFit: "contain",
    },
    center: {
        display: "flex",
        alignItems: "center",
        maxWidth: "fit-content",
        border: '1px solid #982F27',
        borderRadius: "999px",
        [styles.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    name: {
        [styles.breakpoints.down("xs")]: {
            display: "none",
        },
        color: '#982F27',
        textDecoration: 'none',
    },
    input: {
        color: '#982F27',
        padding: styles.spacing(1, 2, 1, 2),
        fontSize: "1.2rem",
    },
    right: {
        display: "flex",
        alignItems: "center",
        marginLeft: styles.spacing(1),
        padding: styles.spacing(1),


    },
    avatar: {
        marginLeft: styles.spacing(2),
        width: '50px',
        height: '50px',

    },
}));

export default Header
