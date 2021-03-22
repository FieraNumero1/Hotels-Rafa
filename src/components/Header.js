import { AppBar, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import logo from '../issest/img/logo.PNG'
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {

    const [mobileView, setMobileView] = useState(false);
    const classes = useStyle();
    const displayMobile = () => { }
    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} />
                <div className={classes.center}>
                    <InputBase fullwidth placeholder="Buscar ..." inputProps={{ className: classes.input }} />
                    <SearchIcon style={{ color: '#982F27' }} />
                </div>
            </Toolbar>
        )
    }

    return (
        <AppBar>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    )
}

const useStyle = makeStyles((styles) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'white'

    },
    logo: {
        height: "60px",
        margin: styles.spacing(1, 0, 0, 2),
        objectFit: "contain"
    },
    input: {
        fontSize: "1.2rem",
        padding: styles.spacing(1,5,1,5),
        
        margin: '8px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '999px',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #982F27',
        minWidth:'300px',
        borderRadius: '999px',
        padding: styles.spacing(1),
        margin: styles.spacing(1),
    },
}))

export default Header
