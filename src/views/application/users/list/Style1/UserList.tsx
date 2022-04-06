import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Chip,
    Grid,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import { UserProfile } from 'types/user-profile';
import { useDispatch, useSelector } from 'store';
import { getUsersListStyle1 } from 'store/slices/user';

// assets
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import DeleteOutlineTwoTone from '@mui/icons-material/DeleteOutlineTwoTone';

const avatarImage = require.context('assets/images/profile', true);

// ==============================|| USER LIST 1 ||============================== //

const UserList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [data, setData] = React.useState<UserProfile[]>([]);
    const { usersS1 } = useSelector((state) => state.user);

    React.useEffect(() => {
        setData(usersS1);
    }, [usersS1]);

    React.useEffect(() => {
        dispatch(getUsersListStyle1());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }}>ID</TableCell>
                        <TableCell>用户名</TableCell>
                        <TableCell>角色</TableCell>
                        <TableCell>最后一次上线时间</TableCell>
                        <TableCell>状态</TableCell>
                        <TableCell align="center" sx={{ pr: 3 }}>
                            操作
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ pl: 3 }}>{row.id}</TableCell>
                                <TableCell>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Avatar alt="User 1" src={avatarImage(`./${row.avatar}`).default} />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography align="left" variant="subtitle1" component="div">
                                                {row.name}{' '}
                                                {row.status === 'Active' && (
                                                    <CheckCircleIcon sx={{ color: 'success.dark', width: 14, height: 14 }} />
                                                )}
                                            </Typography>
                                            <Typography align="left" variant="subtitle2" noWrap>
                                                {row.email}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell>{row.role}</TableCell>
                                <TableCell>{row.last}</TableCell>
                                <TableCell>
                                    {row.status === 'Active' && (
                                        <Chip
                                            label="激活"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.success.light + 60,
                                                color: theme.palette.success.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Rejected' && (
                                        <Chip
                                            label="注销"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark'
                                                        ? theme.palette.dark.main
                                                        : theme.palette.orange.light + 80,
                                                color: theme.palette.orange.dark
                                            }}
                                        />
                                    )}
                                    {row.status === 'Pending' && (
                                        <Chip
                                            label="未激活"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell align="center" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                        <Tooltip placement="top" title="修改用户信息">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <EditTwoTone sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip placement="top" title="删除用户">
                                            <IconButton
                                                color="primary"
                                                sx={{
                                                    color: theme.palette.orange.dark,
                                                    borderColor: theme.palette.orange.main,
                                                    '&:hover ': { background: theme.palette.orange.light }
                                                }}
                                                size="large"
                                            >
                                                <DeleteOutlineTwoTone sx={{ fontSize: '1.1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserList;
