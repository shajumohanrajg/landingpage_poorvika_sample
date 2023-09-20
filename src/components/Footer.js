import * as React from "react";

import Typography from "@mui/material/Typography";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ResponsiveAppBar() {
  return (
  
      <Box sx={{ backgroundColor: "rgb(236 68 39 / 85%);" }}>
        
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
              <Typography variant="body2" color="white">
                Copyright @ 2022 Poorvika Mobiles Private Limited | All Rights
                Reserved.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
   
  );
}
export default ResponsiveAppBar;
