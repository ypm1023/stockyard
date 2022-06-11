// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, TextField } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| PROFILE 1 - CHANGE PASSWORD ||============================== //

const ChangePassword = () => {
    const theme = useTheme();
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard>
                    <form noValidate autoComplete="off">
                        <Grid container spacing={gridSpacing} sx={{ mb: 1.75 }}>
                            <Grid item xs={12} md={6}>
                                <TextField type="password" id="outlined-basic7" fullWidth label="旧密码" />
                            </Grid>
                        </Grid>
                        <Grid container spacing={gridSpacing} sx={{ mb: 1.75 }}>
                            <Grid item xs={12} md={6}>
                                <TextField type="password" id="outlined-basic8" fullWidth label="新密码" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField type="password" id="outlined-basic9" fullWidth label="确认密码" />
                            </Grid>
                        </Grid>
                    </form>
                    <Grid spacing={2} container justifyContent="flex-end" sx={{ mt: 3 }}>
                        <Grid item>
                            <AnimateButton>
                                <Button variant="contained">更新密码</Button>
                            </AnimateButton>
                        </Grid>
                        <Grid item>
                            <Button sx={{ color: theme.palette.error.main }}>取消</Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default ChangePassword;
