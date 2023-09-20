import * as React from 'react';
import { Typography, Toolbar,AppBar,Button } from '@mui/material';
import logo1 from '../logo1.svg';











function ResponsiveAppBar() {

  const img = <img src="https://img.poorvika.com/common/Poorvika-english-logo.svg" alt='Poorvika_logo' />
  return (

    <AppBar position="static" sx={{ backgroundColor: 'rgb(242 88 36) !important;', boxShadow: 'none' }} title={img}>



      <Toolbar sx={{ color: 'black', }}>
<Button href="https://www.poorvika.com/">
        <img src={logo1} className="logo" alt="logo" width={150} />
        </Button>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,

            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >

        </Typography>


      </Toolbar>

    </AppBar>

  );
}
export default ResponsiveAppBar;