import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {

        },
        hero: {
            background: '#f30000',
            textAlign: 'center',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        text1: {
            padding: theme.spacing(5),
            fontSize: theme.spacing(2.5)
        },
        text2: {
            fontSize: theme.spacing(4)
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
        }
    }
})