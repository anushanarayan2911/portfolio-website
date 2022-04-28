import React from 'react'
import CustomBtn from './customBtn'
import logoLight from '../Visuals/Home/Images/logoLight.png'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import { StylesContext } from '@material-ui/core/node_modules/@material-ui/styles'

const styles = makeStyles ({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width: 780px)']: {
            flexDirection: "column"
        }
    },
    logoLight: {
        width: "3%",
        ['@media (max-width: 780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width: 780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width: 780px)']: {
            paddingBottom: "1rem" 
        }
    }
})
function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0.87)" className={classes.bar}>
            <img src={logoLight} className={classes.logoLight}/>
            <img src={logoMobile} className={classes.logoMobile}/>
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Careers
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Demos
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact Us
            </Typography>
            <CustomBtn txt="Trial Our Product"/>
        </Toolbar>
    )
}

export default NavBar
