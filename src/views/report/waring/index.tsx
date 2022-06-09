import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Button,
    CardContent,
    Grid,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    Pagination,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';

// project imports
import WaringList from './WaringList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import SearchIcon from '@mui/icons-material/Search';
// ==============================|| USER LIST STYLE 1 ||============================== //

const WaringListPage = () => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<Element | ((element: Element) => Element) | null | undefined>(null);
    const handleClick = (event: React.MouseEvent) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">警报列表</Typography>
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
            <WaringList />
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
    );
};

export default WaringListPage;
