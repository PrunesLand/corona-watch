import { Typography } from '@material-ui/core'
import React from 'react'
import { styles } from './Styles'

const Footer = () => {

    const classes = styles()

    return (
        <div className={classes.root}>
            <Typography align='center' > &copy; {new Date().getFullYear()} Corona Watch</Typography>
        </div>
    )
}

export default Footer
