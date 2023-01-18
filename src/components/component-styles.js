import { createStyles, makeStyles } from '@material-ui/core/styles'


const componentStyles = makeStyles(() =>
    createStyles({
        container: {
            width: '90vw',
            height: '9vh',
            backgroundColor: 'teal',
            color: '#fff'
        }


    }))

export default componentStyles;