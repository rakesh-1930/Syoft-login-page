import { Paper, Typography } from '@material-ui/core'
import React from 'react';
import componentStyles from './component-styles';

function FormImage(props) {

    const classes = componentStyles(props)


    return (
        <Paper className={classes.container}>
            <Typography>Image</Typography>
        </Paper>

    )
}

export default FormImage