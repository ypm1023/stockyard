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
    OutlinedInput,
    Pagination,
    Typography,
    TextField,
    Tooltip,
    Fab
} from '@mui/material';

// project imports
import VenueList from './VenueList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import { IconSearch } from '@tabler/icons';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FilterListIcon from '@mui/icons-material/FilterListTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/AddTwoTone';

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
                        <Typography variant="h3">场地列表</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            id="input-search-list-style1"
                            placeholder="搜索"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="1rem" />
                                </InputAdornment>
                            }
                            size="small"
                        />
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
                        <Tooltip title="新建场地">
                            <Fab color="primary" size="small" sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}>
                                <AddIcon fontSize="small" />
                            </Fab>
                        </Tooltip>
                    </Grid>
                </Grid>
            </CardContent>
            <VenueList />
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
