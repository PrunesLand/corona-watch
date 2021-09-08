import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => {
    return {
        root: {
            boxSizing: 'border-box',
            padding: 0,
            margin: 0
        },
        page: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        },
        toolbar: theme.mixins.toolbar,
        appBar: {
            background: '#e0e0e0',
            height: theme.spacing(10),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            color: theme.palette.text.primary
        }
    }
})