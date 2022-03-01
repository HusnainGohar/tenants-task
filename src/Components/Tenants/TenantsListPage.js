import * as React from 'react';
import {fetchTenants} from "../../actions/tenantsActions";
import { connect } from 'react-redux'
import {useEffect, useLayoutEffect, useState} from "react";
import {Container} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";

const TenantsListPage = ({fetchTenants, tenants}) => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useLayoutEffect(()=>{
        fetchTenants();
    }, []);
    useEffect(()=>{
        if (tenants && tenants.length > 0) {
            setRows([...tenants]);
            setLoading(false)
        }
    }, [tenants])

    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'code', headerName: 'Code', width: 200 },
        { field: 'type', headerName: 'Type', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
    ];

    const handleRowClick = (params) => {
        navigate(`/tenant/${params.id}`);
    }

    return (
        <Container maxWidth="xl">
            <h2>TENANTS</h2>
            <div style={{ height: '100vh', width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                loading={loading}
                rowsPerPageOptions={[20]}
                onRowClick={handleRowClick}
            />
            </div>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        tenants: state.tenantsReducer.tenants,
        error: state.tenantsReducer.error,
    }
};

export default connect(mapStateToProps, { fetchTenants })(TenantsListPage)