import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Chip, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

import { useDispatch, useSelector } from 'store';

// assets
import GavelTwoTone from '@mui/icons-material/GavelTwoTone';
import VisibilityTwoTone from '@mui/icons-material/VisibilityTwoTone';
import { getWaringList } from 'store/slices/waring';

// ==============================|| USER LIST 1 ||============================== //

const WaringList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const [data, setData] = React.useState<any[]>([]);
    const { waringS1 } = useSelector((state) => state.waring);

    React.useEffect(() => {
        dispatch(getWaringList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        setData(waringS1);
    }, [waringS1]);

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ pl: 3 }}>
                            警报类型
                        </TableCell>
                        <TableCell>警报时间</TableCell>
                        <TableCell>警报状态</TableCell>
                        <TableCell>处理人</TableCell>
                        <TableCell>处理时间</TableCell>
                        <TableCell align="left" sx={{ pl: 4 }}>
                            操作
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell align="left" sx={{ pl: 3 }}>
                                    {row.type}
                                </TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell>
                                    {row.status === 'Active' && (
                                        <Chip
                                            label="已处理"
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
                                            label="未处理"
                                            size="small"
                                            sx={{
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.warning.light,
                                                color: theme.palette.warning.dark
                                            }}
                                        />
                                    )}
                                </TableCell>
                                <TableCell>{row.handle}</TableCell>
                                <TableCell>{row.time}</TableCell>
                                <TableCell align="left" sx={{ pr: 3 }}>
                                    <Stack direction="row" justifyContent="left" alignItems="center">
                                        <Tooltip placement="top" title="查看报警视频">
                                            <IconButton color="primary" aria-label="delete" size="large">
                                                <VisibilityTwoTone sx={{ fontSize: '1.5rem' }} />
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
                                                    <GavelTwoTone sx={{ fontSize: '1.5rem' }} />
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

export default WaringList;
