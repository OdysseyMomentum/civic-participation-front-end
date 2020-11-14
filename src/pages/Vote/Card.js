import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NaturePeople } from '@material-ui/icons';
import './Vote.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        maxWidth: 585,
    },
    image: {
        width: 238,
        height: 185,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const CardPeopleIcon = withStyles({
    root: {
        color: '#000000',
        fontSize: 15,
    }
})(NaturePeople);

const DeleteButton = withStyles({
    root: {
        backgroundColor: 'rgba(227, 150, 150, 1)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 36,
        padding: '0 15px',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24)'
    },
    label: {
        textTransform: 'capitalize',
        fontSize: '14px',
        fontWeight: '500'
    },
})(Button);

const TitleHeaderTypography = withStyles({
    root: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '21px'
    }
})(Typography);

const CardContentTypography = withStyles({
    root: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '10px',
        lineHeight: '24px',
        color: 'rgba(0, 0, 0, 0.87);'
    }
})(Typography);

const CardPeopleTypography = withStyles({
    root: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        color: '#010101;'
    }
})(Typography);

export default function Card(props) {

    const classes = useStyles();

    const deleteProposal = () => {
        const { onDelete, proposalId } = props;
        onDelete(proposalId);
    }

    return (
        <Grid item container alignItems="center">
            <Grid item xs container>
                <Grid item container xs>
                    <Grid className={classes.paper}>
                        <Grid item xs container spacing={5}>
                            <Grid item>
                                <Paper>
                                    <Grid className={classes.image}>
                                        <img className={classes.img} alt="image" src={props.photo} />
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs container spacing={1} className="card-title">
                                        <Grid item xs={9}>
                                            <TitleHeaderTypography>{(props.title).slice(0, 50)}...</TitleHeaderTypography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TitleHeaderTypography>${props.budget}</TitleHeaderTypography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <CardContentTypography>
                                            {(props.description).slice(0, 70)} ...
                                        </CardContentTypography>
                                    </Grid>
                                    <Grid item container alignItems="center" spacing={3}>
                                        <Grid item>
                                            <CardPeopleIcon />
                                        </Grid>
                                        <Grid item>
                                            <CardPeopleTypography>Urban</CardPeopleTypography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <DeleteButton onClick={deleteProposal}>DELETE</DeleteButton>
            </Grid>
        </Grid>
    )
}