import { useTheme } from '@mui/material/styles';
// material-ui
import { Button, Grid, TextField, Divider } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| PROFILE 1 - PROFILE ACCOUNT ||============================== //

const PersonalAccount = () => {
    const { user } = useAuth();
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="基本信息">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic1" fullWidth label="姓名" defaultValue={user?.name} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-select-currency" fullWidth label="所在部门" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-multiline-static1"
                                    label="背景介绍"
                                    multiline
                                    fullWidth
                                    rows={3}
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
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic2" fullWidth label="联系电话" defaultValue="1399999999" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField id="outlined-basic3" fullWidth label="Email" defaultValue="demo@demo.com" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="outlined-multiline-static2" label="住址" multiline fullWidth rows={3} defaultValue="Demo" />
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
                            <Button variant="contained">更新用户信息</Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button sx={{ color: theme.palette.error.main }}>取消</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PersonalAccount;
