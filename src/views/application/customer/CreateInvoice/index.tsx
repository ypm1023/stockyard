import React, { useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, Divider, Grid, Stack, TextField } from '@mui/material';

// project imports
import AddItemPage from './AddItemPage';
import { gridSpacing } from 'store/constant';
import InputLabel from 'ui-component/extended/Form/InputLabel';
import MainCard from 'ui-component/cards/MainCard';

// third-party
import * as yup from 'yup';
import ProductsPage from './ProductsPage';
import { useFormik } from 'formik';

// yup validation-schema
const validationSchema = yup.object({
    invoiceNumber: yup.string().required('Invoice Number is Required'),
    customerName: yup.string().required('Customer Name is Required'),
    customerEmail: yup.string().email('Enter a valid email').required('Customer Email is Required'),
    customerPhone: yup.string().min(10, 'Phone number should be of minimum 10 characters').required('Customer Phone is Required'),
    customerAddress: yup.string().required('Customer Address is Required'),
    orderStatus: yup.string().required('Order Status is required')
});

// ==============================|| CREATE INVOICE ||============================== //

function CreateInvoice() {
    const formik = useFormik({
        initialValues: {
            invoiceNumber: '',
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            customerAddress: '',
            orderStatus: 'pending'
        },
        validationSchema,
        onSubmit: (values) => {
            if (values) {
                setOpen(true);
            }
        }
    });

    // array of products
    const initialProducsData = [
        {
            id: 1,
            product: '相机A',
            description: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
            quantity: '红外100米高清相机',
            amount: '192.168.1.1',
            total: '正在运行'
        },
        {
            id: 3,
            product: '相机B',
            description: 'lorem ipsum dolor sit amat, connecter adieu siccing eliot',
            quantity: '360度全景云台相机',
            amount: '192.168.1.3',
            total: '正在运行'
        }
    ];

    const [productsData, setProductsData] = useState(initialProducsData);
    const [open, setOpen] = useState(false);
    const [addItemClicked, setAddItemClicked] = useState<boolean>(false);

    // to delete row in order details
    const deleteProductHandler = (id: number) => {
        setProductsData(productsData.filter((item) => item.id !== id));
    };

    // Dialog Handler
    const handleDialogOk = () => {
        setOpen(false);
        formik.resetForm();
    };

    // add item handler
    const handleAddItem = (addingData: any) => {
        setProductsData([
            ...productsData,
            {
                id: addingData.id,
                product: addingData.name,
                description: addingData.desc,
                quantity: addingData.selectedQuantity,
                amount: addingData.amount,
                total: addingData.totalAmount
            }
        ]);

        setAddItemClicked(false);
    };

    return (
        <>
            <MainCard title="场地编辑">
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={4}>
                            <Stack>
                                <InputLabel required>场地名称</InputLabel>
                                <TextField
                                    id="invoiceNumber"
                                    name="invoiceNumber"
                                    value={formik.values.invoiceNumber}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.invoiceNumber && Boolean(formik.errors.invoiceNumber)}
                                    helperText={formik.touched.invoiceNumber && formik.errors.invoiceNumber}
                                    onChange={formik.handleChange}
                                    fullWidth
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack>
                                <InputLabel required>煤炭类型</InputLabel>
                                <TextField
                                    fullWidth
                                    id="customerName"
                                    name="customerName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.customerName && Boolean(formik.errors.customerName)}
                                    helperText={formik.touched.customerName && formik.errors.customerName}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Stack>
                                <InputLabel required>装载方式</InputLabel>
                                <TextField
                                    type="email"
                                    fullWidth
                                    id="customerEmail"
                                    name="customerEmail"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.customerEmail && Boolean(formik.errors.customerEmail)}
                                    helperText={formik.touched.customerEmail && formik.errors.customerEmail}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} />
                        <Grid item xs={12}>
                            <Stack>
                                <InputLabel>描述信息</InputLabel>
                                <TextField
                                    fullWidth
                                    id="customerAddress"
                                    name="customerAddress"
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.customerAddress && Boolean(formik.errors.customerAddress)}
                                    helperText={formik.touched.customerAddress && formik.errors.customerAddress}
                                    onChange={formik.handleChange}
                                    multiline
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>

                        <ProductsPage productsData={productsData} deleteProductHandler={deleteProductHandler} />

                        {addItemClicked ? (
                            <Grid item xs={12}>
                                <AddItemPage handleAddItem={handleAddItem} setAddItemClicked={setAddItemClicked} />
                            </Grid>
                        ) : (
                            <Grid item>
                                <Button variant="text" onClick={() => setAddItemClicked(true)}>
                                    添加相机
                                </Button>
                            </Grid>
                        )}

                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item sx={{ display: 'flex', justifyContent: 'flex-end' }} xs={12}>
                            <Button variant="contained" type="submit">
                                确定
                            </Button>
                        </Grid>
                        <Grid item>
                            <Dialog open={open}>
                                <DialogContent>
                                    <DialogContentText sx={{ fontWeight: 500, color: `secondary.dark` }}>
                                        Invoice Created Successfully
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions sx={{ pr: '20px' }}>
                                    <Button autoFocus variant="contained" onClick={handleDialogOk}>
                                        Ok
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    </Grid>
                </form>
            </MainCard>
        </>
    );
}

export default CreateInvoice;
