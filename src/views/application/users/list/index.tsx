import React from 'react';
import { useNavigate } from 'react-router-dom';
// material-ui
import { CardContent, Grid, IconButton, InputAdornment, Pagination, TextField, Tooltip, Typography, Fab } from '@mui/material';

// project imports
import UserList from './UserList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets;
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/AddTwoTone';
// ==============================|| USER LIST STYLE 1 ||============================== //

const ListStylePage = () => {
    const navigate = useNavigate();
    // const theme = useTheme();
    const handleAddAccountClick = () => {
        const route: string = '/user/add';

        if (route && route !== '') {
            navigate(route);
        }
    };

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">用户列表</Typography>
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            placeholder="搜索"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Tooltip title="筛选">
                            <IconButton size="large">
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>

                        {/* product add & dialog */}
                        <Tooltip title="新建用户">
                            <Fab
                                color="primary"
                                onClick={handleAddAccountClick}
                                size="small"
                                sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}
                            >
                                <AddIcon fontSize="small" />
                            </Fab>
                        </Tooltip>
                    </Grid>
                </Grid>
            </CardContent>
            <UserList />
            <Grid item xs={12} sx={{ p: 3 }}>
                <Grid container justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item />
                    <Grid item>
                        <Pagination count={1} color="primary" />
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};
export default ListStylePage;
