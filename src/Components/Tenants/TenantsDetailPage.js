import * as React from 'react';
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import { Card, Container, CardContent, Typography, Button} from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 'md'
    }
});

const TenantsDetailPage = ({tenants}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [tenant, setTenant] = useState(undefined);
    const { tenantId } = useParams();
    useEffect(()=>{
        let tenantFound = tenants.find(el => el.id === tenantId);
        if (tenantFound) {
            setTenant(tenantFound);
        }
    }, [])
    return (
        <Container maxWidth="xl">
            {tenant && (
                <>
                    <Button variant="outlined" color="secondary" onClick={()=>navigate('/', {replace: true})}>Go Back</Button>
                    <Typography variant="h4" component="h2">Tenant Detail Page # {tenant.id}</Typography>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="h2">
                                {tenant.name}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="h4">
                                {tenant.code} - {tenant.type} - {tenant.status}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {tenant.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </>
            )}
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        tenants: state.tenantsReducer.tenants,
        error: state.tenantsReducer.error,
    }
};

export default connect(mapStateToProps, {})(TenantsDetailPage)