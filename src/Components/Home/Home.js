import React, { useEffect, useState } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import * as api from '../../API/index'
import { styles } from './Styles'

const Home = () => {
    const [data, setData] = useState('')
    const classes = styles()
    const getData = async () => {
        try {
            const res = await api.fetchData()
            setData(res.data.penambahan.positif)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Container className={classes.hero}>
                        <Typography className={classes.text1}>As of DATE_HERE</Typography>
                        <Typography className={classes.text2}>TODAYS_POSITIVE</Typography>
                        <Typography className={classes.text1}>Cases recorded in Indonesia</Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Container className={classes.contMd}>
                        <Typography>HOSPITALIZED_DATA</Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Container className={classes.contMd}>
                        <Typography>DEATH_DATA</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Container className={classes.contMd}>
                        <Typography>RECOVERED_DATA</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Container className={classes.contMd}>
                        <Typography>CREDITS</Typography>
                    </Container>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home
