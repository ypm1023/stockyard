import React from 'react';

import zhLocale from 'date-fns/locale/zh-CN';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    Grid,
    InputAdornment,
    Menu,
    MenuItem,
    // OutlinedInput,
    Pagination,
    Typography,
    TextField,
    CardContent,
    Tooltip,
    IconButton,
    Fab
} from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// project imports
import TransportList from './TransportList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import SearchIcon from '@mui/icons-material/Search';

// ==============================|| USER LIST STYLE 1 ||============================== //

const TransportListPage = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhLocale}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    {/* <MainCard>
                        <Grid container justifyContent="space-between" spacing={2} alignItems="center">
                            <Grid container spacing={2} xs={10} alignItems="center">
                                <Grid item>
                                    <OutlinedInput
                                        id="input-search-list-style1"
                                        placeholder="搜索"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconSearch stroke={1.5} size="1rem" />
                                            </InputAdornment>
                                        }
                                    />
                                </Grid>
                                <Grid item>
                                    <DesktopDatePicker
                                        label="开始时间"
                                        value={new Date()}
                                        onChange={(date) => console.log('date', date)}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </Grid>
                                <Grid item>
                                    <DesktopDatePicker
                                        label="结束时间"
                                        value={new Date()}
                                        onChange={(date) => console.log('date', date)}
                                        renderInput={(params) => <TextField {...params} fullWidth />}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button size="large" variant="contained" color="secondary">
                                    查询
                                </Button>
                            </Grid>
                        </Grid>
                    </MainCard>  */}
                </Grid>
                <Grid item xs={12}>
                    <MainCard
                        title={
                            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                                <Grid item>
                                    <Typography variant="h3">运输列表</Typography>
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
                                </Grid>
                            </Grid>
                        </CardContent>
                        <TransportList />
                        <Grid item xs={12} sx={{ p: 3 }}>
                            <Grid container justifyContent="space-between" spacing={gridSpacing}>
                                <Grid item>
                                    <Pagination count={10} color="primary" />
                                </Grid>
                                <Grid item>
                                    <Button
                                        size="large"
                                        sx={{ color: theme.palette.grey[900] }}
                                        color="secondary"
                                        endIcon={<ExpandMoreRoundedIcon />}
                                        onClick={handleClick}
                                    >
                                        10 条
                                    </Button>
                                    <Menu
                                        id="menu-user-list-style1"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        variant="selectedMenu"
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        transformOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right'
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}> 10 条</MenuItem>
                                        <MenuItem onClick={handleClose}> 20 条</MenuItem>
                                        <MenuItem onClick={handleClose}> 30 条</MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        </Grid>
                    </MainCard>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
};

export default TransportListPage;
