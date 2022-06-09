import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';

// assets
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// table data
type BasicTableData = {
    name: string;
    calories: number;
    fat: string;
    carbs: number;
    protein: string;
    history?: any[];
};
function createData(name: string, calories: number, fat: string, carbs: number, protein: string) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        history: [
            { content: '车辆停靠在料棚A1', date: '2022-04-07 13:01:45', waring: '', capture: ['url1', 'url2'], video: 'url3' },
            {
                content: '车辆正在料棚A1区域B装载',
                date: '2022-04-07 14:01:45',
                waring: '装载货物不符',
                capture: ['url1', 'url2'],
                video: 'url3'
            }
        ]
    };
}

function Row({ row }: { row: BasicTableData }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell sx={{ pl: 3 }}>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right" sx={{ pr: 3 }}>
                    {row.protein}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {open && (
                            <Box sx={{ margin: 1 }}>
                                <TableContainer>
                                    <SubCard
                                        sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.50', mb: 2 }}
                                        title="车辆轨迹"
                                        content={false}
                                    >
                                        <Table size="small" aria-label="purchases">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>轨迹名称</TableCell>
                                                    <TableCell>时间</TableCell>
                                                    <TableCell>违规信息</TableCell>
                                                    <TableCell sx={{ pr: 2 }} align="right">
                                                        查看监控信息
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {row.history?.map((historyRow: any) => (
                                                    <TableRow hover key={historyRow.id}>
                                                        <TableCell>{historyRow.content}</TableCell>
                                                        <TableCell>{historyRow.date}</TableCell>
                                                        <TableCell>
                                                            {historyRow.waring && (
                                                                <Chip
                                                                    label={historyRow.waring}
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
                                                        </TableCell>
                                                        <TableCell align="right" sx={{ pr: 2 }}>
                                                            <Button variant="text">查看图片</Button>
                                                            <Button variant="text">查看录像</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </SubCard>
                                </TableContainer>
                            </Box>
                        )}
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createData('冀A88888', 3, '开票', 13930911111, '张三'),
    createData('冀A99999', 1, '装载', 13930911112, '李四'),
    createData('冀A66666', 0, '称重', 13930911113, '公司A'),
    createData('冀A77777', 0, '离场', 13930911113, '公司A'),
    createData('冀A99889', 2, '进厂', 13930911113, '公司A')
];

// ==============================|| TABLE - COLLAPSIBLE ||============================== //

export default function TransportList() {
    return (
        <TableContainer>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ pl: 3 }} />
                        <TableCell>车辆号码</TableCell>
                        <TableCell align="right">违规个数</TableCell>
                        <TableCell align="right">运输状态</TableCell>
                        <TableCell align="right">联系电话</TableCell>
                        <TableCell sx={{ pr: 3 }} align="right">
                            车辆归属
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
