// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from '@mui/material';

// assets
import { IconBuildingStore } from '@tabler/icons';

// styles
const ListItemWrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    padding: 16,
    '&:hover': {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light
    },
    '& .MuiListItem-root': {
        padding: 0
    }
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = () => {
    const theme = useTheme();
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 330,
                py: 0,
                borderRadius: '10px',
                [theme.breakpoints.down('md')]: {
                    maxWidth: 300
                },
                '& .MuiListItemSecondaryAction-root': {
                    top: 22
                },
                '& .MuiDivider-root': {
                    my: 0
                },
                '& .list-container': {
                    pl: 7
                }
            }}
        >
            <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: theme.palette.success.dark,
                                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light,
                                border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
                                borderColor: theme.palette.success.main
                            }}
                        >
                            <IconBuildingStore stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">停靠警告</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2022-04-06 12:31:00
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2">
                            车辆冀A8888不应当停靠玉料场A1，<a href="www.baidu.com">点击查看报警视频</a>。
                        </Typography>
                    </Grid>
                </Grid>
            </ListItemWrapper>
            <Divider />
            <ListItemWrapper>
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                color: theme.palette.success.dark,
                                backgroundColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.success.light,
                                border: theme.palette.mode === 'dark' ? '1px solid' : 'none',
                                borderColor: theme.palette.success.main
                            }}
                        >
                            <IconBuildingStore stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={<Typography variant="subtitle1">偷运警告</Typography>} />
                    <ListItemSecondaryAction>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={12}>
                                <Typography variant="caption" display="block" gutterBottom>
                                    2022-04-06 12:31:00
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItemSecondaryAction>
                </ListItem>
                <Grid container direction="column" className="list-container">
                    <Grid item xs={12} sx={{ pb: 2 }}>
                        <Typography variant="subtitle2">
                            车辆冀A8888不应该装载料棚A2的货品，<a href="www.baidu.com">点击查看报警视频</a>。
                        </Typography>
                    </Grid>
                </Grid>
            </ListItemWrapper>
        </List>
    );
};

export default NotificationList;
