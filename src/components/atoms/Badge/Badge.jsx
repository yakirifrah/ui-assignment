import { Badge as MtBadge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    notification: {
        backgroundColor: '#5584FF',
        color: '#FFFFFF',
    },
    listPrimary:{
        backgroundColor: '#5584FF',
        color: '#FFFFFF',
        width: '45px',
        height: '45px',
    },
    secondaryList: {
        backgroundColor: '#f83c7b',
        color: '#FFFFFF',
        width: '45px',
        height: '45px',
    }
}));

const Badge=({badgeContent,type,children})=>{
    const classes = useStyles();
    return(
        <MtBadge classes={{badge:classes[`${type}`]}} badgeContent={badgeContent}>
            {children}
        </MtBadge>
    )

}

export default Badge;
