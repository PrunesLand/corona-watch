import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {
            maxWidth: '80vh'
        },
        hero: {

            textAlign: 'center',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        text1: {
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(3)
            }
        },
        text2: {
            fontSize: theme.spacing(8)
        },
        contMd: {
            height: '15vh',
            background: '#555',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        contLrg: {
            height: '35vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        gridItem2: {
            padding: theme.spacing(1)
        },
        tips: {

        },
        tipsItem: {
            height: theme.spacing(15),

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        icon: {
            height: theme.spacing(6),
            padding: theme.spacing(1)
        },
        redMain: {
            background: theme.palette.primary.main
        },
        redLight: {
            background: theme.palette.primary.light
        },
        redDark: {
            background: theme.palette.primary.dark
        },
        greyMain: {
            background: theme.palette.secondary.main
        },
        greyLight: {
            background: theme.palette.secondary.light
        },
        greyDark: {
            background: theme.palette.secondary.dark
        },
    }
})