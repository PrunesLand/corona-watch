import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import * as api from '../../API/index'
import { styles } from './Styles'
import s_distance from '../../Images/keep-distance.svg'
import mask from '../../Images/mask.svg'
import vaccine from '../../Images/syringe.svg'
import clsx from 'clsx'

const Home = () => {
    const [data, setData] = useState('')
    const classes = styles()

    const getData = async () => {
        try {
            const res = await api.fetchData()
            setData(res.data.penambahan)
            console.log(res.data.penambahan)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Container className={clsx(classes.hero, classes.redMain)}>
                        <Typography className={classes.text1}>As of {data.tanggal},</Typography>
                        <Typography className={classes.text2}>{data.positif}</Typography>
                        <Typography className={classes.text1}>New cases recorded in Indonesia</Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Container className={clsx(classes.contMd, classes.redLight)}>
                        <Typography variant='h4'>{data.sembuh}</Typography>
                        <Typography variant='body2'>Recovered</Typography>
                    </Container>
                </Grid>
                <Grid item xs={6} className={classes.gridItem}>
                    <Container className={clsx(classes.contMd, classes.redDark)}>
                        <Typography variant='h4'>{data.meninggal}</Typography>
                        <Typography variant='body2'>Deaths</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Container className={clsx(classes.contLrg)}>
                        <Typography className={classes.text1} align='center'>Tips to Stay Protected:</Typography>
                        <Grid container className={classes.tips} >
                            <Grid item xs={4} className={classes.gridItem2}>
                                <Paper className={classes.tipsItem}>
                                    <img src={vaccine} alt='Vaccination' className={classes.icon} />
                                    <Typography className={classes.tipsText}>Get Vaccinated.</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem2}>
                                <Paper className={classes.tipsItem}>
                                    <img src={mask} alt='Wear a Mask' className={classes.icon} />
                                    <Typography className={classes.tipsText}>Wear A Mask.</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={4} className={classes.gridItem2}>
                                <Paper className={classes.tipsItem}>
                                    <img src={s_distance} alt='Social Distance' className={classes.icon} />
                                    <Typography className={classes.tipsText}>Social Distance.</Typography>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                    <Container className={classes.contLrg}>
                        <Typography variant='body2' className={classes.gridItem2}>Official data collected from the <a className={classes.links} href='https://data.covid19.go.id/public/index.html'>Indonesian Government</a> </Typography>
                        <Typography variant='body2' className={classes.gridItem2}>API Endpoints created by <a className={classes.links} href='https://github.com/Reynadi531'>Reynadi531</a></Typography>
                        <Typography className={classes.text1}>Website made by <a className={classes.links} href='https://github.com/PrunesLand'>PrunesLand</a></Typography>
                    </Container>
                </Grid>
            </Grid >

        </div >
    )
}

export default Home
