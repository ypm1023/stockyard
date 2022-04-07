import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Chip, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

import { useDispatch, useSelector } from 'store';

// assets
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import DeleteOutlineTwoTone from '@mui/icons-material/DeleteOutlineTwoTone';
import { getVenueList } from 'store/slices/venue';
import { DefaultRootStateProps } from 'types';

// ==============================|| USER LIST 1 ||============================== //

const VenueList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [data, setData] = React.useState<any[]>([]);
    const { venueS1 } = useSelector((state: DefaultRootStateProps) => state.venue);

    React.useEffect(() => {
        dispatch(getVenueList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        setData(venueS1);
    }, [venueS1]);

    console.log('data~~~~~~~~~~~~~~~~~~~', data);
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ pl: 3 }}>
                            场地名称
                        </TableCell>
                        <TableCell>煤炭类型</TableCell>
                        <TableCell>关联相机数量</TableCell>
                        <TableCell>使用状态</TableCell>
                        <TableCell align="left" sx={{ pl: 4 }}>
                            操作
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell sx={{ pl: 3 }}>{row.name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.cameras}</TableCell>
                                <TableCell>
                                    {row.status === 'Active' && (
                                        <Chip
                                            label="使用中"
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
                                    {row.status === 'Pending' && (
                                        <Chip
                                            label="未使用"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell align="left" sx={{ pl: 3 }}>
                                    <Stack direction="row" justifyContent="left" alignItems="center">
                                        <Tooltip placement="top" title="查看报警视频">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <EditTwoTone sx={{ fontSize: '1.5rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        {row.status === 'Pending' && (
                                            <Tooltip placement="top" title="审核报警信息">
                                                <IconButton
                                                    color="primary"
                                                    sx={{
                                                        color: theme.palette.orange.dark,
                                                        borderColor: theme.palette.orange.main,
                                                        '&:hover ': { background: theme.palette.orange.light }
                                                    }}
                                                    size="large"
                                                >
                                                    <DeleteOutlineTwoTone sx={{ fontSize: '1.5rem' }} />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VenueList;
