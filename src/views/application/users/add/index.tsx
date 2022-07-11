import { useTheme } from '@mui/material/styles';
// material-ui
import { Button, Grid, TextField, Divider, Autocomplete } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';
import { dispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

// autocomplete options
const roleFilms = [
    { label: '管理员', id: 1 },
    { label: '操作员', id: 0 }
];

const PersonalAccount = () => {
    const { user, register } = useAuth();

    const theme = useTheme();
    const navigate = useNavigate();

    const [accountName, setAccountName] = useState('AccountName');

    const handleChangeAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountName(event.target.value);
    };

    const [accountRole, setAccountRole] = useState(1);

    const handleChangeAccountRole = (
        event: SyntheticEvent<Element, Event>,
        value: {
            label: string;
            id: number;
        } | null
    ) => {
        if (value) {
            setAccountRole(value.id);
        }
    };

    const [backgroundIntroduction, setBackgroundIntroduction] = useState('BackgroundIntroduction');
    const handleBackgroundIntroduction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBackgroundIntroduction(event.target.value);
    };

    const [accountPhone, setAccountPhone] = useState('BackgroundIntroduction');
    const handleAccountPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountPhone(event.target.value);
    };
    const [accountEmail, setAccountEmail] = useState('email');
    const handleAccountEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountEmail(event.target.value);
    };

    const handleCancelClick = () => {
        navigate(-1);
    };

    const handleAddClick = async () => {
        try {
            await register(accountName, accountEmail, backgroundIntroduction, accountPhone, accountRole).then(
                () => {
                    console.log('-0-----------------------');
                    // WARNING: do not set any formik state here as formik might be already destroyed here. You may get following error by doing so.
                    // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
                    // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
                    // github issue: https://github.com/formium/formik/issues/2430
                },
                (err: any) => {
                    console.log('err------------------------>', err);
                }
            );
        } catch (err: any) {
            dispatch(
                openSnackbar({
                    open: true,
                    anchorOrigin: { vertical: 'top', horizontal: 'left' },
                    message: '邀请用户失败!'
                })
            );
        }
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="基本信息">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    id="account-name"
                                    onChange={handleChangeAccountName}
                                    fullWidth
                                    label="姓名"
                                    defaultValue={user?.name}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Autocomplete
                                    onChange={handleChangeAccountRole}
                                    disablePortal
                                    options={roleFilms}
                                    defaultValue={roleFilms[0]}
                                    renderInput={(params) => <TextField {...params} label="角色" />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="backgroundIntroduction"
                                    label="背景介绍"
                                    multiline
                                    fullWidth
                                    rows={3}
                                    onChange={handleBackgroundIntroduction}
                                    defaultValue="管理员"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="联系信息">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <TextField id="phone" onChange={handleAccountPhone} fullWidth label="联系电话" defaultValue="1399999999" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="email" onChange={handleAccountEmail} fullWidth label="Email" defaultValue="demo@demo.com" />
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <Divider sx={{ mt: 2 }} />
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
                <Grid spacing={2} container justifyContent="flex-end">
                    <Grid item>
                        <AnimateButton>
                            <Button onClick={handleAddClick} variant="contained">
                                邀请用户
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleCancelClick} sx={{ color: theme.palette.error.main }}>
                            取消
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PersonalAccount;
