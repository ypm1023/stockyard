// material-ui
import { Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// ==============================|| PRODUCTS-DATA PAGE ||============================== //

function ProductsPage({ productsData, deleteProductHandler }: any) {
    return (
        <>
            {productsData.length ? (
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ pl: 3 }}>关联设备</TableCell>
                                    <TableCell>设备类型</TableCell>
                                    <TableCell>设备IP</TableCell>
                                    <TableCell>状态</TableCell>
                                    <TableCell align="right" sx={{ pr: 3 }} />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productsData.map((row: any, index: any) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ pl: 3 }}>{row.product}</TableCell>
                                        <TableCell>{row.quantity}</TableCell>
                                        <TableCell>{row.amount}</TableCell>
                                        <TableCell>{row.total}</TableCell>
                                        <TableCell sx={{ pr: 1 }} align="right">
                                            <IconButton color="error" size="small" onClick={() => deleteProductHandler(row.id)}>
                                                <DeleteTwoToneIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            ) : null}
        </>
    );
}

export default ProductsPage;
