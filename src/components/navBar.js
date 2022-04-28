import React from 'react'
import CustomBtn from './customBtn'
import logoLight from '../Visuals/Home/Images/logoLight.png'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { StylesContext } from '@material-ui/core/node_modules/@material-ui/styles'

const styles = makeStyles ({
    bar: {
        paddingBottom: "1.5rem",
        backgroundColor: "#fff",
        position: "absolute",
        left: 0,
        bottom: 0,
        ['@media (max-width: 780px)']: {
            flexDirection: "column"
        }
    },
    logoLight: {
        width: "5%",
        ['@media (max-width: 780px)']: {
            display: "none"
        }
    },
    menuItem: {
        cursor: "pointer",
        fontSize: 15,
        width: 10,
        color: "#000000",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        flexGrow: 1,
        "&:hover": {
            backgroundColor: "rgba(150, 150, 150, 0.2)"
        },
        ['@media (max-width: 780px)']: {
            paddingBottom: "1rem" 
        }
    }
})
function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bar}>
            <img src={logoLight} className={classes.logoLight}/>
            <Typography variant="h5" className={classes.menuItem}>
                ABOUT
            </Typography>
            <Typography variant="h5" className={classes.menuItem}>
                PORTFOLIO
            </Typography>
            <Typography variant="h5" className={classes.menuItem}>
                GALLERY
            </Typography>
            <Typography variant="h5" className={classes.menuItem}>
                CONTACT
            </Typography>
        </Toolbar>
    )
}

export default NavBar
