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
            background: '#555'
        },
        gridItem: {

        }
    }
})