import { AppBar, Avatar, List, ListItem, IconButton, InputBase, makeStyles, Toolbar, Typography, Link } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import logo from '../issest/img/logo.PNG'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';


const Header = () => {

    const [mobileView, setMobileView] = useState(true);
    const [draweropen, setDraweropen] = useState(false);
    const classes = useStyle();

    useEffect(() => {
        const responsiveness = () =>
            window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);
        responsiveness();
        window.addEventListener("resize", () => responsiveness());
    }, []);

    const displayMobile = () => {
        const handleDrawerOpen = () => {
            setDraweropen(true);
        };

        const handleDrawerClose = () => {
            setDraweropen(false);
        };

        const headersData = ["Mi cuenta", "Habitaciones de lujo", "Cerrar sesión"];

        const getDrawerChoices = () => {
            return headersData.map((data) => {
                return (
                    <List>
                        <ListItem>{data}</ListItem>
                    </List>
                );
            });
        };
        return (
            <Toolbar className={classes.toolbar}>
                <IconButton
                    {...{
                        edge: "start",
                        color: "#ccc",
                        "aria-label": "menu",
                        "aria-haspopup": "true", //notifica a los usuarios con dificultades visuales, de que este elemento tiene un menu desplegable
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Drawer
                    {...{
                        anchor: "left",
                        open: draweropen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                <Link to='/'>
                    <img src={logo} className={classes.logo} alt='logo' />
                </Link>
                <div className={classes.right}>
                    <Typography>Sign in</Typography>
                    <Avatar className={classes.avatar} />
                </div>
            </Toolbar>
        );
    };


    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} />
                <div className={classes.center}>
                    <InputBase fullwidth placeholder="Buscar ..." inputProps={{ className: classes.input }} />
                    <SearchIcon style={{ color: '#982F27', paddingRight: '5px' }} />
                </div>
                <div className={classes.right}>
                    <Typography style={{ color: '#982F27' }}>
                        Sign in
                    </Typography>
                    <Avatar className={classes.avatar} />
                </div>
            </Toolbar>
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
    input: {
        color: '#982F27',
        padding: styles.spacing(1, 2, 1, 2),
        fontSize: "1.2rem",
    },
    right: {
        color: "#982F27",
        display: "flex",
        alignItems: "center",
        marginLeft: styles.spacing(1),
        padding: styles.spacing(2),
    },
    avatar: {
        marginLeft: styles.spacing(2),
    },
}));

export default Header
