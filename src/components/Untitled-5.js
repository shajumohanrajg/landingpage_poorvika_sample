import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import logo1 from '../logo1.svg'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));





function ResponsiveAppBar() { 
  
   
  return (
    <Container maxWidth="xl"  sx={{}}>
    <Box sx={{backgroundColor:'rgb(236 68 39 / 85%);'}}>
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 4, sm: 10, md: 12 }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={8} lg={1} xl={1}>
        <Item
          sx={{
            boxShadow: "none",
            backgroundColor: "transparent",
            textAlign: "center",
          }}
        >
           <Typography variant="body2" color="white">Copyright @ 2022 Poorvika Mobiles Private Limited | All Rights Reserved.</Typography>
        </Item>
      </Grid>
  
    </Grid>
    </Box>
    </Container>
  );
}
export default ResponsiveAppBar;