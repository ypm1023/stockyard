import React from 'react';

// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'store';

import { getLogList } from 'store/slices/log';

// ==============================|| USER LIST 1 ||============================== //

const LogList = () => {
    const dispatch = useDispatch();

    const [data, setData] = React.useState<any[]>([]);
    const { logS1 } = useSelector((state) => state.log);

    React.useEffect(() => {
        dispatch(getLogList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        setData(logS1);
    }, [logS1]);
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" sx={{ pl: 3 }}>
                            日志信息
                        </TableCell>
                        <TableCell sx={{ width: 240 }}>记录时间</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data &&
                        data.map((row, index) => (
                            <TableRow hover key={index}>
                                <TableCell align="left" sx={{ pl: 3 }}>
                                    {row.content}
                                </TableCell>
                                <TableCell>{row.time}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default LogList;
