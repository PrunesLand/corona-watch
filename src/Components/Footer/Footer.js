import { Container, Typography } from '@material-ui/core'
import React from 'react'
import { styles } from './Styles'

const Footer = () => {

    const classes = styles()

    return (
        <Container className={classes.root}>
            <Typography align='center' > &copy; {new Date().getFullYear()} Corona Watch</Typography>
        </Container>
    )
}

export default Footer
