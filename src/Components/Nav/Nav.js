import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../Footer/Footer'
import { styles } from './Styles'

const Nav = ({ children }) => {
    const classes = styles()

    return (
        <div>
            <AppBar className={classes.appBar} position='fixed'>
                <Typography align='center' variant='h5' className={classes.title}>Corona Watch</Typography>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Nav
