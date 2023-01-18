import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import dashboardStyle from './dashboard-style'
import { Paper } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Dashboard(props) {
    const classes = useStyles();
    const commonStyle = dashboardStyle(props)

    const history = useHistory()


    const logout = () => {
        // localStorage.removeItem('token') (if any)
        return history.push('/')

    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Logo
                    </Typography>
                    <Button onClick={() => { logout() }} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            <Paper className={commonStyle.paperContainer} >
                <Typography variant='h3'> Welcome to Dashboard</Typography>
            </Paper >
        </div>
    );
}
