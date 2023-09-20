import * as React from "react";

//grid
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Carousel1 from "./Carousel1";
import bootstrap from "bootstrap";
import { countries } from "./Data";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Carousel from 'react-bootstrap/Carousel';
import "../style/Carousel.css";
//import { createStyles, withStyles } from "@material-ui/core";
import Helmet from "react-helmet";
//card
import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";
import Container from '@mui/material/Container';

//button
import { Button } from "@mui/material";
//typo
import Typography from "@mui/material/Typography";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  borderRadius:4,
  p: 4,
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Page() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="xl"  sx={{}}>

    <Box>
  
      <Box sx={{ flexGrow: 1, marginTop: 1 }}>
    
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
      
          <Grid item xs={12} sm={12} md={12} >

            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <img
                src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Laptops-Cyber-Sale-Banner.webp"
                alt="logo"
                className="cimg"
              />
            </Item>
          </Grid>
        </Grid>
        <Box sx={{backgroundColor:'#ECE0E4',padding:'20px',borderRadius:7}}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                What's your Pick?
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 9 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="https://www.poorvika.com/s?categories=categories.lvl1%3A%3D%5B%60Computers+%26+Tablets+%3E+Laptops%60%5D&stock_status=stock_status%3A%3D%5B%60In+Stock%60%5D&shop_by_use=shop_by_use%3A%3D%5B%60For+Business%60%5D" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Deals-of-the-day.webp"
                
                  height="150"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>
        
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>

              <Button href="" underline="none" onClick={handleOpen}>
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Windows-Laptops.webp"
                  height="150"
                  alt="logo"
                />
              
             </Button>
             
            </Item>
            <div>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 9 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Acer-Aspire-3.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/DELL.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/HP-Gaming.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>

          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/HP.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/HP1.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
           </Item>
          </Grid>
          <Grid item >
          <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
            <box sx={{borderRadius:20}}>
             <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/REDMI.webp"
             
                  height="280"
                  alt="logo"
                />
             </Button>
             </box>
           </Item>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  </div>
          </Grid>
          <Grid item >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/new-launch-laptops.webp"
                  height="150"
                  alt="logo"
                />
             </Button>
            </Item>
          </Grid>
          <Grid item >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                padding: "none",
              }}
            >
              <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Macbooks-laptops.webp"
                  height="150"
                  alt="logo"
                />
             </Button>
            </Item>
          </Grid>

          <Grid item >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Gaming-Laptop.webp"
                  height="150"
                  alt="logo"
                />
             </Button>
            </Item>
          </Grid>
          <Grid item >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Button href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/2-IN-1-Laptops.webp"
                  height="150"
                  alt="logo"
                />
             </Button>
            </Item>
          </Grid>
        </Grid>
        </Box>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                What's your purpose?
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 6, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/For-Business.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/For-Gaming.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/For-Home.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/For-Professionals.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/For-Students.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Processor
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Intel-i3.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Intel-i5.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Intel-i7.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Ryzen-3.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Ryzen-5.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Ryzen-7.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Typography
                variant="h4"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Screen size
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Display-01.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Display-02.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
          <Grid item  >
            <Item sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
              <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/Display-03.webp"
                  height="150"
                  alt="logo"
                />
             </Link>
            </Item>
          </Grid>
        </Grid>
        <Box sx={{backgroundColor:'#ECE0E4',padding:'20px',borderRadius:7}}>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="subtitle1"
                color="initial"
                sx={{ fontWeight: "bold" }}
              >
                Head Office
              </Typography>
              <Typography variant="body2" color="initial">
                Poorvika Mobiles Pvt Ltd
              </Typography>
              <Typography variant="body2" color="initial">
                Admin Office No.30,
              </Typography>
              <Typography variant="body2" color="initial">
                Arcot Road,
              </Typography>
              <Typography variant="body2" color="initial">
                Kodambakkam,
              </Typography>
              <Typography variant="body2" color="initial">
                Chennai- 600 024.
              </Typography>
            </Item>
          </Grid>
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Support
              </Typography>
              <Typography variant="body2" color="initial">
                Contact Us
              </Typography>
              <Typography variant="body2" color="initial">
                Site Map
              </Typography>
              <Typography variant="body2" color="initial">
                One Assist
              </Typography>
            </Item>
          </Grid>
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Policies
              </Typography>
              <Typography variant="body2" color="initial">
                T & C
              </Typography>
              <Typography variant="body2" color="initial">
                Privacy Policy
              </Typography>
              <Typography variant="body2" color="initial">
                One Assist
              </Typography>
            </Item>
          </Grid>
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Opportunities
              </Typography>
              <Typography variant="body2" color="initial">
                Careers
              </Typography>
            </Item>
          </Grid>
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                Know More
              </Typography>
              <Typography variant="body2" color="initial">
                About Us
              </Typography>
              <Typography variant="body2" color="initial">
                Our Stores
              </Typography>
              <Typography variant="body2" color="initial">
                Service Centres
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                color="initial"
              >
                About Us:
              </Typography>

              <Typography
                variant="body2"
                color="initial"
                sx={{ fontWeight: "medium", textTransform: "none" }}
              >
                Poorvika is the Largest Tech Retailer in India, spanning across
                460+ showrooms in and around Tamil Nadu, Karnataka, Pondicherry,
                Mumbai, Pune and Trivandrum, famous for their touch & feel
                experience. Poorvika sells a wide category of devices in its
                showrooms and Online portal, ranging from the Best Smartphones,
                Laptops, Computers, Smart Devices, Smart TVs to Accessories.
                Poorvika's E-Commerce platform www.poorvika.com caters to
                customers across India where Customers can Comfortably Order
                their devices with just a tap and get them delivered Safely with
                delivery options such as 2 Hours Delivery, Same Day Delivery,
                Next Day Delivery, and a Pickup at the Store option based on
                their location. Having served over 5 Crore+ Happy Customers,
                Poorvika takes pride in being India's leading retailer for Top
                Brands like Apple, Samsung, Oppo, Vivo, Xiaomi, OnePlus, Redmi,
                Realme, Nokia, etc.
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 10, md: 12 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
                 <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/google-play.webp"
                  
                  alt="logo"
                />
             </Link>
             
            </Item>
          </Grid>
          <Grid item  >
            <Item
              sx={{
                boxShadow: "none",
                backgroundColor: "transparent",
                textAlign: "left",
              }}
            >
                 <Link href="" underline="none">
                <img
                  src="https://img.poorvika.com/Deals/Landing-page/Laptop-Landing-Offers/app-store.webp"
                  
                  alt="logo"
                />
             </Link>
             
            </Item>
          </Grid>
        </Grid>

        </Box>
      </Box>
    </Box>
    </Container>
  );
}
export default Page;
