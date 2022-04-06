/* eslint-disable jsx-a11y/label-has-associated-control */
// material-ui
// import { useTheme } from '@mui/material/styles';

import { Avatar, Grid, Typography, Box } from '@mui/material';
import logo from 'assets/images/logo.png';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => (
    // const theme = useTheme();

    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
     *
     */
    <Grid container>
        <Grid item>
            <Avatar alt="logo" src={logo} />
        </Grid>
        <Grid item>
            <Box>
                <Typography gutterBottom component="div" sx={{ fontSize: '1.75rem', fontWeight: 500, ml: 2, mb: 0.75, color: '#000000' }}>
                    <label style={{ textDecoration: 'none' }}>智慧料场</label>
                </Typography>
            </Box>
        </Grid>
    </Grid>
);
export default Logo;
